'use client';

import { useBoards } from "@/hooks/use-boards";
import BoardCard from "./board-card";
import CreateBoardButton, { CreateBoardCard } from "./create-board";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function BoardsList() {
    const { data: boards, isPending, isError, error } = useBoards();

    if(isPending) {
        return <p>Carregando boards</p>
    }

    if(isError) {
        return <p>Não foi possível carregar os boards {error.message}.</p>
    }

    return (
        <div className="flex flex-col gap-8 py-2">
            <div className="flex flex-row justify-between items-end">
                <div className="flex flex-col gap-2">
                    <span className="text-2xl font-semibold">Meus boards</span>
                    <span className="text-sm font-normal text-muted-foreground">{boards.length} boards ativos</span>
                </div>
                <div className="flex flex-row gap-2">
                    <Input placeholder="Buscar boards"/>
                    <CreateBoardButton />
                </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {boards.map((board) => {
                    return (
                        <Link 
                            key={board.id} 
                            href={`/boards/${board.id}`} 
                            className="flex-1"
                        >
                            <BoardCard board={board} />
                        </Link>
                    )
                })}
                <CreateBoardCard />
            </div>
        </div>
    )
}
