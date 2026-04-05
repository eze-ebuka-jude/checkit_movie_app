"use client"

import { useEffect, useState } from "react";
import { CiSearch, CiStar } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import type movieData from "@/types/movie.index";
import { useDebounce } from "@/hooks/useDebounce";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const API_URL = process.env.NEXT_PUBLIC_TMDB_URL

const MoviePage = () => {
    const [movieData, setMovieData] = useState<movieData[]>([])
    const [page, setPage] = useState<number>(1)
    const [search, setSearch] = useState<string>("")

    const debouncedVal = useDebounce(search, 500)

    let url = `${API_URL}/discover/movie?language=en-US&page=${page}`

    if (debouncedVal) url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(debouncedVal.trim())}`

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(res => setMovieData(res.results))
            .catch(err => console.error(err));
    }, [url])

    return (
        <>
            <div className="mt-24! flex flex-col items-start">
                <p className="w-2xl! py-1! text-[#A8AEBF]">
                    CheckitMovies
                </p>
                <h1 className="text-white font-bold! text-5xl! mb-10!">Movies</h1>
                <div className="flex items-center gap-6! border! p-5! w-[30%]! rounded-[20px]! border-[#A8AEBF]!">
                    <CiSearch className="text-[#A8AEBF]! h-8! w-8!" />
                    <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Movies" className="text-[#A8AEBF]! font-light text-md outline-none!" />
                </div>

                <div className="mt-12!">
                    <span className=" text-[#A8AEBF] font-extralight">{movieData.length} items</span>
                </div>
            </div>

            <div className="mt-22! text-white flex   mb-8!  flex-col gap-8 items-center justify-center w-full">
                <div className="grid grid-cols-4 mt-14 gap-6 w-full!">
                    {movieData && (
                        movieData.map((data, index) => (
                            <Link key={index} className="rounded-lg overflow-hidden relative cursor-pointer" href={`/movie/${data?.id}`}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                                    alt={data.title}
                                    width={500}
                                    height={750}
                                    className="w-full h-auto"
                                />

                                {data.vote_average >= 0 && (
                                    <div className="absolute top-2 left-3 bg-[#000000] rounded-lg px-1!">
                                        <span className="text-md font-bold flex gap-1 w-full text-[#FFAD49]"><CiStar className="h-5! w-5!" /> {data.vote_average.toFixed(1)}</span>
                                    </div>
                                )}
                            </Link>
                        ))
                    )}
                </div>
            </div>

            <div className="my-12! flex items-center justify-center w-full! gap-8">
                {[1, 2, 3].map((pageNum, index) => (
                    <button type="button" key={index + 1} className={`${pageNum === page && 'py-2! px-4! rounded-lg! bg-[#7B6EF6]!'} text-white!  cursor-pointer`} onClick={() => setPage(pageNum)}>{pageNum}</button>
                ))}
            </div>
        </>
    )
}

export default MoviePage