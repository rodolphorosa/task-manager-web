import Image from "next/image";
import { boardsService } from "../services/boards.service";
import Boards from "../features/boards";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense>
      <Boards />
    </Suspense>
  );
}
