import { boardsService } from "@/services/boards.service";
import { CreateBoardRequest } from "@/types/board";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useCreateBoard() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    
    async function createBoard(data: CreateBoardRequest) {
        try {
            const board = await boardsService.create(data);
            setOpen(false);
            router.push(`/boards/${board.id}`);
        } catch {
            alert("Não foi possível criar o board.");
        }
    }

    return { open, setOpen, createBoard };
}