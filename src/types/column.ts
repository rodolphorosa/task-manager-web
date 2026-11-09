import Task from "./task"

export default interface Column {
    id: string
    title: string
    position: number
    createdAt: number
    updatedAt: number
    tasks: Task[]
}