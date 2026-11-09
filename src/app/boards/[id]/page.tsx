import BoardPage from "@/src/features/board/board";
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
