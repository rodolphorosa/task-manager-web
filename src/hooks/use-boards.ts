import { boardsService } from "@/services/boards.service";
import { useQuery } from "@tanstack/react-query";

export function useBoards() {
    return useQuery({
        queryKey: ['boards'],
        queryFn: () => boardsService.findAll()
    });
}
