import { boardsService } from "@/services/boards.service";
import React from "react";
import BoardCard from "./board/board-card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CreateBoardButton, { CreateBoardCard } from "./board/create-board";

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
        </div>
    )
}
