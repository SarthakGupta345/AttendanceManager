import { 
    ClassData, 
    createClass, 
    dailyClassAutomation, 
    getAttendanceStats, 
    getTodayClass, 
    makeClassAbsent, 
    makeClassPresent,
    getSubjectsStats,
    getAttendanceForDate,
    getMonthlyAttendanceMarkers,
    getScheduledCountForDay,
    getClassesForDate
} from "@/db/classDb";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useTodayClasses = () =>
    useQuery({
        queryKey: ["classes", "today"],
        queryFn: getTodayClass,
    });

export const useClassesForDate = (date: string) =>
    useQuery({
        queryKey: ["classes", "date-list", date],
        queryFn: () => getClassesForDate(date),
        enabled: !!date
    });

export const useScheduledCount = (dayBit: number) =>
    useQuery({
        queryKey: ["classes", "scheduled", dayBit],
        queryFn: () => getScheduledCountForDay(dayBit),
        enabled: dayBit > 0
    });

export const useSubjectsStats = () =>
    useQuery({
        queryKey: ["classes", "subjects"],
        queryFn: getSubjectsStats,
    });

export const useDateAttendance = (date: string) =>
    useQuery({
        queryKey: ["classes", "date", date],
        queryFn: () => getAttendanceForDate(date),
    });

export const useMonthlyMarkers = (yearMonth: string) =>
    useQuery({
        queryKey: ["classes", "markers", yearMonth],
        queryFn: () => getMonthlyAttendanceMarkers(yearMonth),
    });

export const useAttendanceStats = () =>
    useQuery({
        queryKey: ["classes", "stats"],
        queryFn: getAttendanceStats,
    });

export const useDailyAutomation = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: dailyClassAutomation,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["classes", "today"] });
            qc.invalidateQueries({ queryKey: ["classes", "stats"] });
        },
    });
};

export const useMarkAbsent = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => makeClassAbsent(id),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["classes", "today"] });
            qc.invalidateQueries({ queryKey: ["classes", "stats"] });
        },
    });
};

export const useMarkPresent = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            const res = await makeClassPresent(id);
            if (res.changes === 0) throw new Error("Failed to mark present");
            return res;
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["classes", "today"] });
            qc.invalidateQueries({ queryKey: ["classes", "stats"] });
        },
        onError: (error: any) => {
            console.log(error);
        }
    });
};

export const useCreateClass = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: async (data: ClassData) => {
            const res = await createClass(data);
            if (res.changes === 0) throw new Error("Failed to create class");
            return res;
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["classes", "today"] });
        },
        onError: (error: any) => {
            console.log(error);
        },
    })
}