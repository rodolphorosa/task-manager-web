
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Board from "@/types/board";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

export default function BoardCard({ board }: { board: Board }) {
    return (
        <Card className="overflow-hidden gap-0 pt-0">
            <div className="bg-violet-600 h-2"/>
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
                    className="
                        bg-gray-200
                        **:data-[slot=progress-indicator]:bg-violet-600
                    "
                />
                <p className="text-sm text-muted-foreground">25% concluído</p>
                <p className="text-sm text-muted-foreground self-end">Atualizado hoje</p>
            </CardContent>
        </Card>
    );
}
