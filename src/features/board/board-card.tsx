
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { boardColors, progressColors } from "@/constants/board-colors";
import Board from "@/types/board";
import { cn } from "cn";

export default function BoardCard({ board }: { board: Board }) {
    const colorClass = boardColors[board.color];
    
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
                    <span>4 colunas</span>{" \u00B7 "}
                    <span>12 tasks</span> 
                </div>
                <Progress 
                    value={25} 
                    className={cn(
                        "bg-gray-200",
                        progressColors[board.color]
                    )}
                />
                <p className="text-sm text-muted-foreground">25% concluído</p>
                <p className="text-sm text-muted-foreground self-end">Atualizado hoje</p>
            </CardContent>
        </Card>
    );
}
