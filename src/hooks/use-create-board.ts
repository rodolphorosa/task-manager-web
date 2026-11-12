import { boardsService } from "@/services/boards.service";
import { CreateBoardRequest } from "@/types/board";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateBoard() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: (data: CreateBoardRequest) => boardsService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['boards'] })
        }
    });
}

