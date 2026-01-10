import { dailyClassAutomation, getTodayClass, makeClassPresent } from "@/db/classDb";
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
    mutationFn: makeClassPresent,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["classes", "today"] });
    },
  });
};
