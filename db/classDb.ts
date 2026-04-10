import { getDB } from "./database";

export interface TodayClass {
    id: number;
    start_time: string;
    end_time: string;
    status: "present" | "absent" | "gt" | "not_marked";
    class_name: string;
    subject_name: string;
    code: string | null;
    prof_name: string | null;
}


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
    SELECT *
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
          INSERT INTO Classes (subject_id, start_time, end_time)
          VALUES (?, ?, ?)
          `,
                    [subject.id, subject.start_time, subject.end_time]
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
