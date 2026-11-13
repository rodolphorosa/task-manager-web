import Home from "@/features/home";
import { Suspense } from "react";

export default async function Page() {
    return (
        <Suspense>
            <Home />
        </Suspense>
    )
}