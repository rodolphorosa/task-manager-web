import { Button } from "@/components/ui/button";
import BoardsList from "./board/board-list";

export default function Boards () {
    return (
        <div className="flex flex-col px-8">
            <div className="flex flex-row gap-2 py-2 items-center">
                <span>Task Manager</span>
                <Button variant="ghost">Boards</Button>
                <Button variant="ghost">Minhas tasks</Button>
            </div>
            <BoardsList />
        </div>
    )
}
