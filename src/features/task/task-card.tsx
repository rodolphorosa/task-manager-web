import Task from "@/types/task"
import TaskDetail from "./task-detail";
import { Progress, ProgressLabel } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { progressColors } from "@/constants/board-colors";
import { CheckSquare2 } from "lucide-react";

interface Props {
    task: Task
}

export default function TaskCard({ task }: Props) {
    return (
        <TaskDetail task={task}>
            <div className="flex flex-col gap-4">
                <h3 className="text-sm font-medium">
                    {task.title}
                </h3>
                <div className="flex items-center gap-3">
                    <Progress 
                        value={30} 
                        className={cn(
                            "flex-1 w-full bg-gray-200",
                            progressColors['amber']
                        )} 
                    />
                    <span 
                        className="
                            flex items-center gap-1 
                            text-sm text-right text-muted-foreground 
                            tabular-nums 
                        "
                    >
                        <CheckSquare2 className="h-4 w-4 shrink-0" />
                        <span>3/10</span>
                    </span>
                </div>
            </div>
        </TaskDetail>
    )
}
