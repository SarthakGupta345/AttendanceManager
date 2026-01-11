import { dailyClassAutomation, getTodayClass, makeClassAbsent, makeClassPresent } from "@/db/classDb";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useTodayClasses = () =>
    useQuery({
        queryKey: ["classes", "today"],
        queryFn: getTodayClass,
    });


export const useDailyAutomation = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: dailyClassAutomation,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["classes", "today"] });
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
        },
    });
};

export const useMarkAbsent = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => makeClassAbsent(id),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["classes", "today"] });
        },
    });
};