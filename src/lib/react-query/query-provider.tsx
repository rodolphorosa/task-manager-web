'use client';

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";
import type { ReactNode } from "react";

function QueryProvider({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider;