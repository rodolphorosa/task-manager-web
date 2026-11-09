export default interface Task {
    id: string
    title: string
    description?: string
    position: number
    status: string
    dueDate: number
    createdAt: number
    updatedAt: number
}
