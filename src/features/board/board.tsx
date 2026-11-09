import { boardsService } from "@/src/services/boards.service";
import Board from "@/src/types/board";
import Column from "@/src/types/column";
import Task from "@/src/types/task";
import { Plus } from "lucide-react";

function BoardContent({ board }: { board: Board }) {
    return (
        <div className="flex flex-row gap-4 p-4">
            {board.columns.map((column) => 
                <ColumnComponent column={column} />
            )}
        </div>
    )
}

function ColumnComponent({ column }: { column: Column }) {
    return (
        <div className="flex flex-col gap-4 p-2 rounded-xl shadow-sm/25 bg-muted/40">
            <div className="flex flex-row p-2 justify-between">
                <span className="text-md font-semibold">{column.title}</span>
                <span className="text-muted-foreground">{column.tasks.length}</span>
            </div>
            <div className="flex flex-col gap-2">
                {column.tasks.map((task) => 
                    <TaskComponent task={task}/>
                )}
            </div>
            <div className="flex flex-row gap-2 p-2 items-center">
                <Plus className="h-4 w-4 shrink-0"/>
                <span>Adicionar uma tarefa</span>
            </div>
        </div>
    )
}


function TaskComponent({ task }: { task: Task }) {
    return (
        <div className="flex flex-col gap-2 p-2 rounded-xl shadow-sm/25">
            <span>{task.title}</span>
            <span>{task.description}</span>
        </div>
    )
}

interface Props {
    boardId: string;
}

export default async function BoardPage({ boardId}: Props) {
    const board = await boardsService.findById(boardId);
    
    return (
        <BoardContent board={board} />
    )
}