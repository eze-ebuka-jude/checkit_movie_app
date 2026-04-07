"use client"

import { CiSearch, CiStar } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import type TvData from "@/types/tv.index";
import Spinner from "./Spinner";

interface TvDetailsProps {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    tv_Data: TvData[]
}

const TvDetailsPage = ({ page, setPage, setSearch, tv_Data }: TvDetailsProps) => {
    return (
        <>
            {tv_Data.length >= 1 ? (
                <>
                    <div className="mt-24! flex flex-col lg:items-start md:items-center items-center">
                        <p className="md:w-2xl! w-full! text-center! lg:text-start! py-1! text-[#A8AEBF]">
                            CheckitMovies
                        </p>
                        <h1 className="text-white font-bold! text-5xl! mb-10!">TV Shows</h1>
                        <div className="flex items-center gap-6! border! p-5! lg:w-[30%]! md:w-[50%]! w-full rounded-[20px]! border-[#A8AEBF]!">
                            <CiSearch className="text-[#A8AEBF]! h-8! w-8!" />
                            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Tv Shows" className="text-[#A8AEBF]! font-light text-md outline-none!" />
                        </div>

                        <div className="mt-12!">
                            <span className=" text-[#A8AEBF] font-extralight">{tv_Data && tv_Data.length} items</span>
                        </div>
                    </div>

                    <div className="mt-22! text-white flex   mb-8!  flex-col gap-8 items-center justify-center w-full">
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-14 gap-6 w-full!">
                            {tv_Data && (
                                tv_Data.map((data, index) => (
                                    <div className="bg-[#121829] flex flex-col p-2! h-60! rounded-lg" key={index}>
                                        <Link className="rounded-lg overflow-hidden relative cursor-pointer" href={`/tv/${data?.id}`}>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                                                alt={data.name}
                                                width={500}
                                                height={750}
                                                className="w-full h-40!"
                                            />

                                            {data.vote_average >= 0 && (
                                                <div className="absolute top-2 left-3 bg-[#000000] rounded-lg px-1!">
                                                    <span className="text-md font-bold flex gap-1 w-full text-[#FFAD49]"><CiStar className="h-5! w-5!" /> {data.vote_average.toFixed(1)}</span>
                                                </div>
                                            )}
                                        </Link>

                                        <span className="text-[#A8AEBF] text-sm font-bold mt-8!">{data.name}</span>
                                    </div>
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
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default TvDetailsPage