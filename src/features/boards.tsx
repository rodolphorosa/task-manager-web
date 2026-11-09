import React from "react";
import { boardsService } from "../services/boards.service";
import BoardCard from "./board/board-card";

export default async function Boards () {
    const boards = await boardsService.findAll()
    
    return (
        <div className="flex flex-row gap-4 p-4">
            {boards.map((board) => {
                return (
                    <React.Fragment key={board.id}>
                        <BoardCard board={board} />
                    </React.Fragment>
                )
            })}
        </div>
    )
}
