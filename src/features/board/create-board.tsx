'use client'

import { Button } from "@/components/ui/button";
import CreateBoardDialog from "./create-board-dialog";
import { Card, CardContent } from "@/components/ui/card";
import useCreateBoard from "@/hooks/use-create-board";

export function CreateBoardCard() {
    const { open, setOpen, createBoard } = useCreateBoard();

    return (
        <>
            <Card 
                onClick={() => setOpen(true)}
                className="border border-dashed ring-0 hover:cursor-pointer"
            >
                <CardContent className="flex h-full flex-col items-center justify-center">
                    <span className="font-semibold text-base">Criar novo board</span>
                    <span>Comece com colunas padrão</span>
                </CardContent>
            </Card>
            <CreateBoardDialog 
                open={open}
                onOpenChange={setOpen}
                onCreateBoard={createBoard}
            />
        </>
    )
}

export default function CreateBoardButton() {
    const { open, setOpen, createBoard } = useCreateBoard();
 
    return (
        <div>
            <Button 
                variant="outline"
                onClick={() => setOpen(true)}
            >
                Novo board
            </Button>
            <CreateBoardDialog 
                open={open}
                onOpenChange={setOpen}
                onCreateBoard={createBoard}
            />
        </div>
    )
}
