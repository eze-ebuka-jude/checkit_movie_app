"use client"

import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
    const [showNav, setShowNav] = useState<boolean>(false)

    const handleShowNav = () => {
        setShowNav((prev: boolean) => !prev)
    }

    return (
        <nav className="bg-[#121829]">
            <div className="md:max-w-7xl! mx-auto! px-4! flex items-center justify-between py-4!">
                <div>
                    <Image src="/app-logo.svg" alt="app-logo" width={60} height={60} />
                </div>

                <div className="md:flex items-start gap-12 text-[#A8AEBF] hidden">
                    <span className="font-semibold cursor-pointer"><Link href='/'>Home</Link></span>
                    <span className="font-semibold cursor-pointer"><Link href='/movie'>Movies</Link></span>
                    <span className="font-semibold cursor-pointer"><Link href='/tv'>Tv Shows</Link></span>
                </div>

                <button id="menu-btn" className="md:hidden text-4xl! text-white!" onClick={handleShowNav}>
                    {!showNav ? (
                        <AiOutlineMenuFold />
                    ) : (
                        <MdClose />
                    )}
                </button>
            </div>

            {showNav && (
                <div id="mobile-menu" className="md:hidden px-4 pb-4 space-y-2 bg-[#121829] transition-all duration-300">
                    <div className="flex items-center justify-center gap-12! py-5! w-full text-[#A8AEBF]">
                        <span className="font-semibold cursor-pointer"><Link href='/'>Home</Link></span>
                        <span className="font-semibold cursor-pointer"><Link href='/movie'>Movies</Link></span>
                        <span className="font-semibold cursor-pointer"><Link href='/tv'>Tv Shows</Link></span>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar