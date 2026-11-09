import Board from "@/src/types/board"
import Image from "next/image"

export default function BoardCard({board} : {board: Board}) {
    return (
        <div className="flex flex-col rounded-xl shadow-md">
            <Image 
                src="/images/studying.jpg" 
                alt="studying" 
                width={300} 
                height={300} 
                className="rounded-t-xl"
            />
            <div className="flex flex-col gap-2 p-4">
                <span 
                    className="text-md font-semibold"
                >
                    {board.title}
                </span>
                <span className="text-sm">
                    {board.description}
                </span>
            </div>
        </div>
    )
}
