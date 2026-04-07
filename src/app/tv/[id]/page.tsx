import Image from "next/image";
import { CiStar } from "react-icons/ci";

const API_KEY = process.env.TMDB_API_KEY

type Genre = {
    id: number;
    name: string;
};

async function getTvSeries(id: string) {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
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

    const data = await getTvSeries(id);

    const title = data.name;

    return (
        <div className="max-w-7xl! mx-auto! px-4! py-8! text-white">

            <div className="relative">
                {/* Backdrop */}
                <div
                    className="w-full h-85 rounded-xl bg-cover bg-center mb-6"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
                    }}
                />

                <div className="bg-gray-100/20! border rounded-lg absolute left-8 backdrop-blur-sm! -bottom-16 md:w-[40%] w-[80%] h-auto p-5! text-white! font-bold text-2xl">
                    <span className="text-sm!">CheckitMovies / Tv Shows</span>
                    <h1 className="py-3! font-bold text-2xl!">{title}</h1>
                </div>
            </div>

            <div className="mt-42! flex lg:items-start md:items-center items-center justify-center gap-14! w-full!">
                <div className="lg:block md:hidden hidden">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.name}
                        width={700}
                        height={550}
                        className="w-170! h-163! rounded-2xl"
                    />
                </div>

                <div className="flex flex-col items-start gap-8! lg:w-1/2! md:w-full! w-full!">
                    <div className="text-[#A8AEBF] pb-4!">
                        <h4 className="text-2xl! font-bold">{data.tagline}</h4>
                        <p className="w-full text-sm">{data.overview}</p>
                    </div>

                    <div>
                        {data.vote_average >= 0 && (
                            <div className=" bg-white rounded-lg px-2! py-1!">
                                <span className="text-md font-bold flex gap-1 w-full text-[#FFAD49]"><CiStar className="h-5! w-5!" /> {data.vote_average.toFixed(1)}</span>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4!">
                        <div className="flex flex-col gap-4!">
                            <span className="text-[#A8AEBF]">Type</span>
                            <h3 className="text-2xl! font-bold">Tv Shows</h3>
                        </div>

                        <div className="flex flex-col gap-4!">
                            <span className="text-[#A8AEBF]">Status</span>
                            <h3 className="text-2xl! font-bold">{data.status ? data.status : "N/A"}</h3>
                        </div>

                        <div className="flex flex-col gap-4!">
                            <span className="text-[#A8AEBF]">First air date</span>
                            <h3 className="text-2xl! font-bold">{data.first_air_date ? data.first_air_date : "N/A"}</h3>
                        </div>

                        <div className="flex flex-col gap-4!">
                            <span className="text-[#A8AEBF]">Last air date</span>
                            <h3 className="text-2xl! font-bold">{data.last_air_date ? data.last_air_date : "N/A"}</h3>
                        </div>

                        <div className="flex flex-col gap-4!">
                            <span className="text-[#A8AEBF]">No. of seasons</span>
                            <h3 className="text-2xl! font-bold">{data.number_of_seasons ? data.number_of_seasons : "N/A"}</h3>
                        </div>

                        <div className="flex flex-col gap-4!">
                            <span className="text-[#A8AEBF]">No of episodes</span>
                            <h3 className="text-2xl! font-bold">{data.number_of_episodes ? data.number_of_episodes : "N/A"}</h3>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4!">
                        <span className="text-[#A8AEBF]">Runtime</span>
                        <h3 className="text-2xl! font-bold">{data.runtime ? data.runtime + ' mins' : "N/A"}</h3>
                    </div>

                    <div className="flex flex-col gap-4!">
                        <span className="text-[#A8AEBF]">Genres</span>
                        <h3 className="text-2xl! font-bold">{data.genres?.map((genre: Genre) => genre.name).join(", ")}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}