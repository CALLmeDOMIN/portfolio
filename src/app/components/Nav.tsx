"use client";

import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-background text-text fixed top-0 z-10 flex w-screen items-center justify-between gap-8 p-8 shadow-xl transition-all duration-500 ease-in-out md:px-10 md:opacity-90">
      <Link className="text-xl font-bold" href={"#home"}>
        <span className="align-top text-gray-400">src</span>
        <span className="text-accent text-3xl">/</span>
        Dominik
        <span className="text-accent">.</span>
        tsx
      </Link>
      <div
        onClick={() => setOpen(!open)}
        className="text-primary-button z-20 aspect-square h-full cursor-pointer text-3xl transition-all duration-500 md:hidden"
      >
        {open ? <IconX /> : <IconMenu2 />}
      </div>
      <ul
        className={
          "fixed top-0 z-10 mt-0 flex h-screen w-3/4 flex-col items-center justify-center gap-10 bg-inherit py-10 pt-12 font-bold shadow-2xl transition-all duration-500 ease-in md:static md:z-auto md:h-auto md:w-auto md:flex-row md:gap-4 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none " +
          (open ? "right-0" : "-right-full")
        }
      >
        <li>
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-accent transition-all duration-150"
            href={"#now"}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-accent transition-all duration-150"
            href={"#maintained"}
          >
            Shipped
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-accent transition-all duration-150"
            href={"#tools"}
          >
            Tools
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-accent transition-all duration-150"
            href={"#contact"}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            passHref
            onClick={() => setOpen(false)}
            className="hover:text-accent transition-all duration-150"
            href={"/CV.pdf"}
            target="_blank"
          >
            <button>
              Resume
              <IconArrowUpRight className="-mt-1 inline-block" size={16} />
            </button>
          </Link>
        </li>
      </ul>
      <div
        onClick={() => setOpen(false)}
        className={
          "fixed top-0 left-0 z-5 h-screen w-screen backdrop-blur-sm transition-all duration-500 ease-in-out md:hidden md:backdrop-blur-none " +
          (open ? "block opacity-100" : "hidden opacity-0")
        }
      ></div>
    </nav>
  );
};

export default Nav;
