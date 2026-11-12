'use client'

import { Button } from "@/components/ui/button";
import CreateBoardDialog from "./create-board-dialog";
import { Card, CardContent } from "@/components/ui/card";
import useCreateBoard from "@/hooks/use-create-board";
import { type ReactNode,  useState } from "react";
import { CreateBoardRequest } from "@/types/board";
import { useRouter } from "next/navigation";

type Props = {
    children: (openDialog: () => void) => ReactNode
}

function CreateBoard({ children }: Props) {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { mutate: createBoard } = useCreateBoard();

    function handleCreate(data: CreateBoardRequest) {
        createBoard(data, {
            onSuccess: (board) => {
                setOpen(false);
                router.push(`/boards/${board.id}`);
            },
            onError: () => console.error('Não foi possível criar o board'),
        })
    }
    
    return (
        <>
            {children(() => setOpen(true))}
            <CreateBoardDialog 
                open={open}
                onOpenChange={setOpen}
                onCreateBoard={handleCreate}
            />
        </>
    )
}

export function CreateBoardCard() {
    return (
        <CreateBoard>
            {(open) => (
                <Card 
                    role="button" 
                    onClick={open}
                    className="border border-dashed ring-0 hover:cursor-pointer"
                >
                    <CardContent className="flex h-full flex-col items-center justify-center">
                        <span className="font-semibold text-base">Criar novo board</span>
                        <span>Comece com colunas padrão</span>
                    </CardContent>
                </Card>
            )}
        </CreateBoard>
    )
}

export default function CreateBoardButton() {
    return (
        <CreateBoard>
            {(open) => (
                <Button variant="outline" onClick={open}>
                    Novo board
                </Button>
            )}
        </CreateBoard>
    )
}
