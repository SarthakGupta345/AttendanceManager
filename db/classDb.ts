import { routineData, WEEK_DAYS } from "@/Constants/routineData";
import { getDB } from "./database";

export interface TodayClass {
    id: number;
    start_time: string;
    end_time: string;
    status: "present" | "absent" | "gt" | "not_marked";
    type: string;
    class_name: string;
    subject_name: string;
    code: string | null;
    prof_name: string | null;
}

export interface AttendanceStats {
    total: number;
    present: number;
    percentage: number;
}

export interface SubjectStats {
    subject_name: string;
    code: string | null;
    total: number;
    present: number;
    absent: number;
    gt: number;
}

export interface DateAttendance {
    total: number;
    present: number;
    absent: number;
    not_marked: number;
}

export const getSubjectsStats = async (): Promise<SubjectStats[]> => {
    const db = await getDB();
    return await db.getAllAsync<SubjectStats>(`
        SELECT 
            s.name as subject_name,
            s.code,
            COUNT(c.id) as total,
            SUM(CASE WHEN c.status = 'present' THEN 1 ELSE 0 END) as present,
            SUM(CASE WHEN c.status = 'absent' THEN 1 ELSE 0 END) as absent,
            SUM(CASE WHEN c.status = 'gt' THEN 1 ELSE 0 END) as gt
        FROM Subjects s
        LEFT JOIN Classes c ON s.id = c.subject_id
        WHERE c.is_cancelled = 0 AND c.status != 'not_marked'
        GROUP BY s.name, s.code
    `);
};

export const getAttendanceForDate = async (date: string): Promise<DateAttendance> => {
    const db = await getDB();
    const result: any = await db.getFirstAsync(`
        SELECT 
            COUNT(*) as total,
            SUM(CASE WHEN status = 'present' THEN 1 ELSE 0 END) as present,
            SUM(CASE WHEN status = 'absent' THEN 1 ELSE 0 END) as absent,
            SUM(CASE WHEN status = 'not_marked' THEN 1 ELSE 0 END) as not_marked
        FROM Classes
        WHERE created_date = ? AND is_cancelled = 0
    `, [date]);

    return {
        total: result?.total || 0,
        present: result?.present || 0,
        absent: result?.absent || 0,
        not_marked: result?.not_marked || 0
    };
};

export const getMonthlyAttendanceMarkers = async (yearMonth: string): Promise<string[]> => {
    // yearMonth format: 'YYYY-MM'
    const db = await getDB();
    const results = await db.getAllAsync<{ created_date: string }>(`
        SELECT DISTINCT created_date
        FROM Classes
        WHERE created_date LIKE ? AND status != 'not_marked' AND is_cancelled = 0
    `, [`${yearMonth}%`]);

    return results.map(r => r.created_date);
};

export const getScheduledCountForDay = async (dayBit: number): Promise<number> => {
    const db = await getDB();
    const result: any = await db.getFirstAsync(`
        SELECT COUNT(*) as count
        FROM Subjects
        WHERE (lecture_days & ?) != 0 AND completed = 0 AND type != 'Lunch'
    `, [dayBit]);
    return result?.count || 0;
};

const DAY_BIT_MAP: Record<string, number> = {
    'SUN': 64,
    'MON': 1,
    'TUE': 2,
    'WED': 4,
    'THR': 8,
    'FRI': 16,
    'SAT': 32
};

export const seedSubjects = async () => {
    const db = await getDB();
    
    const count: any = await db.getFirstAsync("SELECT COUNT(*) as count FROM Subjects");
    if (count.count > 0) return; // Already seeded

    console.log("🌱 Seeding subjects from routineData...");
    
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 6); // Set a default end date 6 months from now
    const endDateStr = endDate.toISOString().split("T")[0];

    await db.withTransactionAsync(async () => {
        for (const day of WEEK_DAYS) {
            const dayClasses = routineData[day];
            const dayBit = DAY_BIT_MAP[day];

            for (const item of dayClasses) {
                if (item.type === 'Lunch') continue; // Skip lunch in attendance DB

                const times = item.time.split('-').map(t => t.trim());
                const startTime = times[0];
                const endTime = times[1];

                await db.runAsync(
                    `INSERT INTO Subjects (name, code, prof_name, start_time, end_time, lecture_days, end_date, type)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                    [item.subjectName, item.subjectCode, item.facultyRoom, startTime, endTime, dayBit, endDateStr, item.type]
                );
            }
        }
    });

    console.log("✅ Seeding complete");
};

export const getAttendanceStats = async (): Promise<AttendanceStats> => {
    const db = await getDB();
    const result: any = await db.getFirstAsync(`
        SELECT 
            COUNT(*) as total,
            SUM(CASE WHEN status = 'present' THEN 1 ELSE 0 END) as present
        FROM Classes
        WHERE is_cancelled = 0 AND status != 'not_marked'
    `);

    const total = result?.total || 0;
    const present = result?.present || 0;
    const percentage = total > 0 ? (present / total) * 100 : 0;

    return { total, present, percentage };
};


const DAY_BIT = [64, 1, 2, 4, 8, 16, 32]; // Sun → Sat

const getTodayInfo = () => {
    const today = new Date();
    return {
        date: today.toISOString().split("T")[0],
        dayBit: DAY_BIT[today.getDay()],
    };
};


export const getTodaySubjects = async (): Promise<Subjects[]> => {
    const db = await getDB();
    const { date, dayBit } = getTodayInfo();

    return await db.getAllAsync<Subjects>(
        `
    SELECT id, start_time, end_time, type
    FROM Subjects
    WHERE
      start_date <= ?
      AND end_date >= ?
      AND (lecture_days & ?) != 0
      AND completed = 0;
    `,
        [date, date, dayBit]
    );
};

interface Subjects {
    id: number;
    start_time: string;
    end_time: string;
    type: string;
}

export const autoGenerateTodayClasses = async () => {
    const db = await getDB();
    const { date } = getTodayInfo();

    const subjects: Subjects[] = await getTodaySubjects();

    await db.withTransactionAsync(async () => {
        for (const subject of subjects) {
            const existing = await db.getFirstAsync(
                `
        SELECT id FROM Classes
        WHERE subject_id = ?
        AND created_date = ?
        `,
                [subject.id, date]
            );

            if (!existing) {
                await db.runAsync(
                    `
          INSERT INTO Classes (subject_id, start_time, end_time, type)
          VALUES (?, ?, ?, ?)
          `,
                    [subject.id, subject.start_time, subject.end_time, (subject as any).type]
                );
            }
        }
    });
};

const getCurrentTime = () =>
    new Date().toTimeString().slice(0, 5); // HH:mm


export const normalizePastClasses = async () => {
    const db = await getDB();
    const now = getCurrentTime();

    await db.runAsync(
        `
    UPDATE Classes
    SET status = 'not_marked'
    WHERE
      end_time < ?
      AND status = 'not_marked'
      AND is_cancelled = 0;
    `,
        [now]
    );
};


export const dailyClassAutomation = async () => {
    await autoGenerateTodayClasses();
    await normalizePastClasses();
};


export const getTodayClass = async (): Promise<TodayClass[]> => {
    const db = await getDB();

    const today = new Date();
    const todayDate = today.toISOString().split("T")[0];
    const todayBit = [64, 1, 2, 4, 8, 16, 32][today.getDay()];

    return await db.getAllAsync<TodayClass>(
        `
    SELECT 
      c.id,
      c.start_time,
      c.end_time,
      c.status,
      c.type,
      COALESCE(c.name, s.name) AS class_name,
      s.name AS subject_name,
      s.code,
      s.prof_name
    FROM Classes c
    JOIN Subjects s ON s.id = c.subject_id
    WHERE
      s.start_date <= ?
      AND s.end_date >= ?
      AND (s.lecture_days & ?) != 0
      AND c.is_cancelled = 0
    ORDER BY c.start_time ASC;
    `,
        [todayDate, todayDate, todayBit]
    );
};

export const getClassesForDate = async (date: string): Promise<TodayClass[]> => {
    const db = await getDB();
    const dateObj = new Date(date);
    const dayBit = [64, 1, 2, 4, 8, 16, 32][dateObj.getDay()];

    return await db.getAllAsync<TodayClass>(
        `
    SELECT 
      c.id,
      c.start_time,
      c.end_time,
      c.status,
      c.type,
      COALESCE(c.name, s.name) AS class_name,
      s.name AS subject_name,
      s.code,
      s.prof_name
    FROM Classes c
    JOIN Subjects s ON s.id = c.subject_id
    WHERE
      c.created_date = ?
      AND c.is_cancelled = 0
    ORDER BY c.start_time ASC;
    `,
        [date]
    );
};


export const cancelClass = async (id: number) => {
    const db = await getDB();
    return await db.runAsync(
        `
    UPDATE Classes
    SET is_cancelled = 1, status = 'not_marked'
    WHERE id = ?;   
    `,
        [id]
    );
};

interface ClassDataBySubjectId {
    subject_id: number,
    start_time: string,
    end_time: string
}

export const createClassBySubjectId = async (
    data: ClassDataBySubjectId
) => {
    const db = await getDB();
    return await db.runAsync(
        `
    INSERT INTO Classes (subject_id, start_time, end_time)
    VALUES (?, ?, ?);
    `,
        [data.subject_id, data.start_time, data.end_time]
    );
};


export const makeClassPresent = async (id: number) => {
    const db = await getDB();
    return await db.runAsync(
        `
    UPDATE Classes
    SET status = 'present'
    WHERE id = ? AND is_cancelled = 0 AND status = 'not_marked';
    `,
        [id]
    );
};

export const makeClassAbsent = async (id: number) => {
    const db = await getDB();
    return await db.runAsync(
        `
    UPDATE Classes
    SET status = 'absent'
    WHERE id = ? AND is_cancelled = 0 AND status = 'not_marked';
    `,
        [id]
    );
};


export interface ClassData {
    name: string,
    profName: string,
    startTime: string,
    endTime: string
}

export const createClass = async (data: ClassData) => {
    const db = await getDB();
    return await db.runAsync(
        `
        INSERT INTO Classes (name, prof_name, start_time, end_time)
        VALUES (?, ?, ?, ?);
        `,
        [data.name, data.profName, data.startTime, data.endTime]
    )
}
