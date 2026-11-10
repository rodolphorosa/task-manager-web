import Column from "./column"

export default interface Board {
    id: string
    title: string
    description?: string
    createdAt: number
    updatedAt: number
    columns: Column[]
    color: string
}

export interface CreateBoardRequest {
    title: string
    description?: string
    color?: string
}