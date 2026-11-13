
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { boardsService } from "@/services/boards.service";
import Board from "@/types/board";
import Column from "@/types/column";
import Task from "@/types/task";
import { Plus } from "lucide-react";
import TaskCard from "../task/task-card";

function BoardContent({ board }: { board: Board }) {
    return (
        <div className="flex items-stretch gap-4 p-4">
            {board.columns.map((column) => 
                <ColumnComponent column={column} />
            )}
            <Button variant="outline" className="border border-dashed">
                Nova coluna
            </Button>
        </div>
    )
}

function ColumnComponent({ column }: { column: Column }) {
    return (
        <Card className="flex-1 gap-4 bg-muted/40 p-2">
            <div className="flex flex-row justify-between p-2">
                <span className="text-base font-semibold">
                    {column.title}
                </span>

                <span className="text-muted-foreground">
                    {column.tasks.length}
                </span>
            </div>

            <CardContent className="flex flex-col gap-2 p-0">
                {column.tasks.map((task) => (
                    <TaskComponent key={task.id} task={task} />
                ))}
            </CardContent>

            <div className="flex flex-row items-center gap-2 p-2">
                <Plus className="h-4 w-4 shrink-0" />
                <span>Adicionar uma tarefa</span>
            </div>
        </Card>
    );
}


function TaskComponent({ task }: { task: Task }) {
    return (
        <TaskCard task={task}/>
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