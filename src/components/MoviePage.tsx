"use client"

import { useEffect, useState } from "react";
import type MovieData from "@/types/movie.index";
import { useDebounce } from "@/hooks/useDebounce";
import MovieDetailsPage from "./MovieDetailsPage";
import Spinner from "./Spinner";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const API_URL = process.env.NEXT_PUBLIC_TMDB_URL

const MoviePage = () => {
    const [movieData, setMovieData] = useState<MovieData[]>([])
    const [page, setPage] = useState<number>(1)
    const [search, setSearch] = useState<string>("")

    const debouncedVal = useDebounce(search, 500)

    let url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}`

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
            {movieData.length >= 1 ? (
                <MovieDetailsPage page={page} setPage={setPage} setSearch={setSearch} movie_Data={movieData} />
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default MoviePage