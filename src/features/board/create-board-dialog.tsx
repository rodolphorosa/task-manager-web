'use client'

import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { boardColors } from "@/constants/board-colors";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CreateBoardRequest } from "@/types/board";

interface Props {
    open: boolean
    onOpenChange: (open: boolean) => void
    onCreateBoard: (data: CreateBoardRequest) => void
}

export default function CreateBoardDialog({ open, onOpenChange, onCreateBoard }: Props) {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [color, setColor] = useState<string>("slate");

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Novo board
                    </DialogTitle>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="board-title">Nome</FieldLabel>
                        <Input 
                            id="board-title" 
                            type="text" 
                            placeholder="Planos..."
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="board-description">Descrição</FieldLabel>
                        <Textarea 
                            id="board-description" 
                            placeholder="Descrição..."
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Field>
                    <div className="flex flex-wrap justify-evenly">
                        {Object.entries(boardColors).map((entry) => {
                            return (
                                <button
                                    key={entry[0]}
                                    type="button"
                                    aria-label={`Selecionar cor ${entry[0]}`}
                                    aria-pressed={color === entry[0]}
                                    className={cn(
                                        entry[1],
                                        "h-9 w-9 rounded-full",
                                        color === entry[0] && "outline-3 outline-offset-1"
                                    )}
                                    onClick={() => setColor(entry[0])}
                                />
                            )
                        })}
                    </div>
                </FieldGroup>
                <DialogFooter>
                    <DialogClose render={<Button variant="outline">Cancelar</Button>}/>
                    <Button 
                        onClick={(e) => {
                            e.preventDefault();
                            onCreateBoard({ 
                                title,
                                description,
                                color
                            });
                        }}
                        disabled={title === undefined || title.length === 0}
                    >
                        Criar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}