
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { boardColors, progressColors } from "@/constants/board-colors";
import Board from "@/types/board";
import { cn } from "cn";

export default function BoardCard({ board }: { board: Board }) {
    const colorClass = boardColors[board.color];

    function formatColumnsCount(count: number) {
        return count > 0 ? `${count} colunas`: 'Nenhuma coluna';

    }

    function formatTasksCount(count: number) {
        return count > 0 ? `${count} tarefas`: 'Nenhuma tarefa';
    }
    
    return (
        <Card className="overflow-hidden gap-0 pt-0">
            <div className={`${colorClass} h-2`}/>
            <CardContent className="flex flex-col gap-3 p-4">
                <h3 className="text-base font-semibold">
                    {board.title}
                </h3>
                <p className="text-sm">
                    {board.description}
                </p>
                <div>
                    <span>{formatColumnsCount(board.columnsCount)}</span>{" \u00B7 "}
                    <span>{formatTasksCount(board.tasksCount)}</span> 
                </div>
                <Progress 
                    value={board.completedPercentage} 
                    className={cn(
                        "bg-gray-200",
                        progressColors[board.color]
                    )}
                />
                <p className="text-sm text-muted-foreground">{board.completedPercentage}% concluído</p>
                <p className="text-sm text-muted-foreground self-end">Atualizado hoje</p>
            </CardContent>
        </Card>
    );
}
