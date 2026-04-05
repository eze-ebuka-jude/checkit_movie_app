import TvPage from "@/components/TvPage";
import { Suspense } from "react";

export default async function Home() {
    return (
        <>
            <Suspense fallback={<p>Loading movies...</p>}>
                <TvPage />
            </Suspense>
        </>
    );
}