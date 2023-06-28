"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";

export default function Nav() {
    const [open, setOpen] = useState(false);
    // const [scroll] = useState(false);

    return (
        <nav className="w-screen flex fixed top-0 transition-all ease-in-out duration-500items-center justify-between gap-8 p-8 md:px-10 shadow-xl md:opacity-90 bg-background text-text z-10">
            <Link className="opacity-100" href={"#home"}>
                <Image
                    src={"/logo.png"}
                    alt="Logo"
                    width={48}
                    height={48}
                    className="aspect-square w-auto cursor-pointer ease-in-out transition-all duration-300 hover:opacity-80"
                ></Image>
            </Link>
            <div
                onClick={() => setOpen(!open)}
                className="transition-all duration-500 md:hidden h-full z-20 aspect-square text-3xl text-primary-button cursor-pointer"
            >
                {open ? <IconX /> : <IconMenu2 />}
            </div>
            <ul
                className={
                    "pt-12 md:p-0 py-10 mt-0 text-text font-bold list-none flex flex-col items-center justify-center md:flex-row md:static z-10 md:z-auto fixed shadow-2xl md:shadow-none w-3/4 h-screen md:w-auto md:h-auto top-0 -right-full gap-10 md:gap-4 bg-inherit md:bg-transparent md:opacity-100 transition-all ease-in duration-500" +
                    (open ? " right-0" : " -right-full")
                }
            >
                <li>
                    <Link
                        onClick={() => setOpen(false)}
                        className="flex items-strech justify-center p-1 hover:text-accent hover:-translate-y-1 transition-all duration-300"
                        href={"#about"}
                    >
                        About me
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpen(false)}
                        className="flex items-strech justify-center p-1 hover:text-accent hover:-translate-y-1 transition-all duration-300"
                        href={"#projects"}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpen(false)}
                        className="flex items-strech justify-center p-1 hover:text-accent hover:-translate-y-1 transition-all duration-300"
                        href={"#certificates"}
                    >
                        Certificates
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpen(false)}
                        className="flex items-strech justify-center p-1 hover:text-accent hover:-translate-y-1 transition-all duration-300"
                        href={"#contact"}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        passHref
                        onClick={() => setOpen(false)}
                        className="flex items-center font-semibold justify-center p-3 rounded-md px-6 text-background bg-primary-button transition-all duration-300 shadow-sm shadow-primary-button"
                        href={"/DominikSieronCV.pdf"}
                        target="_blank"
                    >
                        <button>Resume</button>
                    </Link>
                </li>
            </ul>
            <div
                onClick={() => setOpen(false)}
                className={
                    "md:hidden backdrop-blur md:backdrop-blur-none fixed z-[5] w-screen h-screen top-0 left-0 transition-all ease-in-out duration-500" +
                    (open ? " opacity-100" : " opacity-0")
                }
            ></div>
        </nav>
    );
}
