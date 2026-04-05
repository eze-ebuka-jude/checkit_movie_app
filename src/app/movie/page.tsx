import MoviePage from "@/components/MoviePage";
import { Suspense } from "react";

export default async function Home() {
    return (
        <>
            <Suspense fallback={<p>Loading movies...</p>}>
                <MoviePage />
            </Suspense>
        </>
    );
}