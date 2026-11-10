import BoardPage from "@/features/board/board-page";
import { Suspense } from "react";

interface Props {
    params: Promise<{
        id: string
    }>
}

export default async function Page({ params }: Props) {
    const { id } = await params;
    return (
        <Suspense>
            <BoardPage boardId={id} />
        </Suspense>
    )
}
