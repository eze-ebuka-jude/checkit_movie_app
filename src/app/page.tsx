import HomePage from "@/components/HomePage";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading movies...</p>}>
        <HomePage />
      </Suspense>
    </>
  );
}
