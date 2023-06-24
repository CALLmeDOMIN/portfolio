"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IconLockOpen } from "@tabler/icons-react";

export default function Nav() {
    const [open, setOpen] = useState(false);
    // const [scroll] = useState(false);

    return (
        <nav className="w-screen flex fixed top-0 transition-all ease-in-out duration-500items-center justify-between gap-8 p-8 md:px-10 shadow-xl md:opacity-90 bg-slate-900 z-[999]">
            <Link className="opacity-100" href={"#home"}>
                <Image
                    src={"/logo.png"}
                    alt="Logo"
                    width={48}
                    height={48}
                ></Image>
            </Link>
            <div
                onClick={() => setOpen(!open)}
                className="transition-all duration-500 md:hidden h-full z-20 aspect-square text-3xl text-pink-400 cursor-pointer"
            >
                <IconLockOpen className={open ? "icon-cancel" : "icon-menu"} />
            </div>
            <ul
                className="pt-12 md:p-0 py-10 mt-0 text-gray-300 font-bold list-none flex flex-col items-center justify-center md:flex-row md:static z-10
			 md:z-auto fixed shadow-2xl md:shadow-none w-3/4 h-screen md:w-auto
			 md:h-auto top-0 -right-full gap-10 md:gap-4 bg-inherit md:bg-transparent
			md:opacity-100 transition-all ease-in duration-500"
            >
                <li>
                    <Link
                        onClick={() => setOpen(false)}
                        className="flex items-strech justify-center p-1 hover:text-pink-400 transition-all duration-500"
                        href={"#about"}
                    >
                        About me
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpen(false)}
                        className="flex items-strech justify-center p-1 hover:text-pink-400 transition-all duration-500"
                        href={"#portfolio"}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpen(false)}
                        className="flex items-strech justify-center p-1 hover:text-pink-400 transition-all duration-500"
                        href={"#portfolio"}
                    >
                        Certificates
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpen(false)}
                        className="flex items-strech justify-center p-1 hover:text-pink-400 transition-all duration-500"
                        href={"#contact"}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-center p-1 text-pink-400 transition-all duration-500 font-medium"
                        href={"/CV_1-7.pdf"}
                        target="_blank"
                    >
                        <button className="border p-2 rounded-md border-pink-400 transition-all duration-300 hover:bg-pink-400/10">
                            Resume
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
