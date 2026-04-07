"use client"

import { useEffect, useState } from "react";
import type TvData from "@/types/tv.index";
import { useDebounce } from "@/hooks/useDebounce";
import TvDetailsPage from "./TvDetailsPage";
import Spinner from "./Spinner";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const API_URL = process.env.NEXT_PUBLIC_TMDB_URL

const TvPage = () => {
    const [tvData, setTvData] = useState<TvData[]>([])
    const [page, setPage] = useState<number>(1)
    const [search, setSearch] = useState<string>("")

    const debouncedVal = useDebounce(search, 500)

    let url = `${API_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=${page}`

    if (debouncedVal) url = `${API_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(debouncedVal.trim())}`

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
            .then(res => setTvData(res.results))
            .catch(err => console.error(err));
    }, [url])

    return (
        <>
            {tvData.length >= 1 ? (
                <TvDetailsPage page={page} setPage={setPage} setSearch={setSearch} tv_Data={tvData} />
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default TvPage