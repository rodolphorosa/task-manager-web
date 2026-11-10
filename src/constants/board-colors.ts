export const boardColors: Record<string, string> = {
    slate: "bg-slate-600",
    red: "bg-red-600",
    orange: "bg-orange-600",
    amber: "bg-amber-600",
    green: "bg-green-600",
    teal: "bg-teal-600",
    blue: "bg-blue-600",
    violet: "bg-violet-600",
} as const;

export const progressColors: Record<string, string> = {
    slate: "**:data-[slot=progress-indicator]:bg-slate-600",
    red: "**:data-[slot=progress-indicator]:bg-red-600",
    orange: "**:data-[slot=progress-indicator]:bg-orange-600",
    amber: "**:data-[slot=progress-indicator]:bg-amber-600",
    green: "**:data-[slot=progress-indicator]:bg-green-600",
    teal: "**:data-[slot=progress-indicator]:bg-teal-600",
    blue: "**:data-[slot=progress-indicator]:bg-blue-600",
    violet: "**:data-[slot=progress-indicator]:bg-violet-600",
} as const;