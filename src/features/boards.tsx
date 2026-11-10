import { boardsService } from "@/services/boards.service";
import React from "react";
import BoardCard from "./board/board-card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function Boards () {
    const boards = await boardsService.findAll();
    return (
        <div className="flex flex-col px-8">
            <div className="flex flex-row gap-2 py-2 items-center">
                <span>Task Manager</span>
                <Button variant="ghost">Boards</Button>
                <Button variant="ghost">Minhas tasks</Button>
            </div>
            <div className="flex flex-col gap-8 py-2">
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl font-semibold">Meus boards</span>
                        <span className="text-sm font-normal text-muted-foreground">{boards.length} boards ativos</span>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Input placeholder="Buscar boards"/>
                        <Button variant="default" className="px-4 py-3">
                            Novo board
                        </Button>
                    </div>
                </div>
                <div className="flex items-stretch gap-4">
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
                </div>
            </div>
        </div>
    )
}
