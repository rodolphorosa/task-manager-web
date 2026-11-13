'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { Activity } from "@/types/activity";
import { useState } from "react";

interface Props {
    activity: Activity
}

export default function TaskActivity({ activity }: Props) {
    const [checked, setChecked] = useState(activity.isDone)
    return (
        <Field orientation="horizontal">
            <Checkbox 
                id={activity.id} 
                name={activity.id} 
                checked={checked} 
                onCheckedChange={setChecked} 
            />
            <FieldLabel 
                htmlFor={activity.id}
                className={cn(
                    checked && "line-through text-muted-foreground"
                )}
            >
                {activity.title}
            </FieldLabel>
        </Field>
    )
}
