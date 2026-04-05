import Image from "next/image";

const API_KEY = process.env.TMDB_API_KEY;
console.log(API_KEY);

async function getMovie(id: string) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    const res = await fetch(
        url,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        const error = await res.text();
        console.error(error);
        throw new Error("Failed to fetch details");
    }

    return res.json();
}

export default async function DetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;

    const data = await getMovie(id);

    //   const title = data.title || data.name;
    //   const date = data.release_date || data.first_air_date;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 text-white">

            {/* Backdrop */}
            <div
                className="w-full h-75 rounded-xl bg-cover bg-center mb-6"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
                }}
            />

        </div>
    );
}