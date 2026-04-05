"use client"

import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-[#121829]">
            <div className="max-w-7xl! mx-auto! px-4! flex items-center justify-between py-4!">
                <div>
                    <Image src="/app-logo.svg" alt="app-logo" width={60} height={60} />
                </div>
                <div className="flex items-start gap-12 text-[#A8AEBF]">
                    <span className="font-semibold cursor-pointer"><Link href='/'>Home</Link></span>
                    <span className="font-semibold cursor-pointer"><Link href='/movie'>Movies</Link></span>
                    <span className="font-semibold cursor-pointer"><Link href='/tv'>Tv Shows</Link></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar