'use client'

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import Task from "@/types/task"
import { type ReactNode, useState } from "react"
import Checklist from "./task-checklist"

interface Props {
    task: Task
    children: ReactNode
}

export default function TaskDetail({ task, children }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={
                <button 
                    role="button"
                    className="
                        w-full
                        bg-card
                        border-0 rounded-lg
                        text-left
                        p-4
                        shadow-sm
                        transition
                        hover:shadow-md
                    "
                >
                    {children}
                </button>
            }/>
            <DialogContent>
                <DialogHeader className="text-lg font-semibold">
                    {task.title}
                </DialogHeader>
                <div className="flex flex-col gap-2 w-full">
                    <h3 
                        className="uppercase text-sm font-semibold"
                    >
                        Descrição
                    </h3>
                    <p>
                        {task.description}
                    </p>
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between text-sm">
                            <span className="uppercase font-semibold">Checklist</span>
                            <div className="flex items-center gap-1">
                                <span>{3} de {10}</span>
                                <span>{'\u00B7'}</span>
                                <span>{30}%</span>
                            </div>
                        </div>
                        <Progress value={30}/>
                    </div>
                </div>
                <Checklist />
                <DialogFooter>
                    <span>Conteúdo do footer</span>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
