import { useState } from "react"
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi"

import Container from "../Container"
import Images from "../Images"
import logo from "../../assets/logo.png"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const navItems = [
        "Home",
        "About",
        "Services",
        "Portfolio",
        "Blog",
        "Contact",
    ]

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 py-5">
                <Container className={"px-4 lg:px-0"}>
                    <div className="flex items-center justify-between px-6 lg:px-10 py-0.5 rounded-full bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                        {/* LOGO */}
                        <div className="relative z-50">
                            <Images
                                imgSrc={logo}
                                className="w-[120px] md:w-[145px]"
                            />
                        </div>
                        {/* DESKTOP MENU */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-x-10">
                                {navItems.map((item) => (
                                    <li
                                        key={item}
                                        className="relative text-[15px] font-medium text-[#111111] cursor-pointer tracking-wide transition-all duration-300 hover:text-[#D9832E] group"
                                    >
                                        {item}
                                        <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-[#D9832E] transition-all duration-300 group-hover:w-full"></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* RIGHT BUTTON */}
                        <div className="hidden lg:flex items-center gap-x-4 cursor-pointer">
                            <button className="px-7 py-3 rounded-full bg-[#111111] text-white text-sm font-medium cursor-pointer hover:bg-[#D9832E] duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                                Let’s Talk
                            </button>
                        </div>
                        {/* MOBILE MENU ICON */}
                        <div
                            className="lg:hidden relative z-50"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            {showMenu ? (
                                <HiOutlineX className="text-3xl text-black cursor-pointer" />
                            ) : (
                                <HiOutlineMenuAlt4 className="text-3xl text-black cursor-pointer" />
                            )}
                        </div>
                    </div>
                </Container>
                {/* MOBILE MENU */}
                <div
                    className={`fixed top-0 ${
                        showMenu ? "right-0" : "-right-full"
                    } w-[80%] sm:w-[60%] h-screen bg-[#0f0f0f] duration-500 z-40 px-8 pt-28`}
                >
                    <ul className="flex flex-col gap-y-8">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className="text-white text-[20px] font-medium border-b border-white/10 pb-4 hover:text-[#D9832E] duration-300 cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button className="mt-12 w-full py-4 rounded-full bg-[#D9832E] text-white text-sm font-semibold hover:opacity-90 duration-300">
                        Let’s Talk
                    </button>
                </div>
                {/* OVERLAY */}
                <div
                    onClick={() => setShowMenu(false)}
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 duration-300 ${
                        showMenu
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }`}
                ></div>
            </header>
        </>
    )
}

export default Header