import { getTasks } from "@/db/subjectDb";
import { useQuery } from "@tanstack/react-query";

export const useTasks = () => {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks,
    });
};
