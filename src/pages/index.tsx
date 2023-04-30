import { type NextPage } from "next";
import Head from "next/head";
import Nav from "./nav";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import About from "./about";
import Main from "./main";
import Projects from "./projects";
import Contact from "./contact";
import Certificates from "./certificates";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Dominik Sieroń</title>
        <meta name="description" content="Portfolio. Dominik Sieroń" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <style jsx global>{`
          body{
            overflow-x: hidden;
          }
        `}</style>
      <div className="bg-slate-900">
        <div className="font-Poppins scrollbar">
          <Nav />
          <div className="hidden fixed w-24 h-screen md:flex items-center left-auto right-0 md:right-5 text-white ">
            <ul className="w-full flex flex-col items-center space-y-4 after:block after:w-0.5 after:h-24 after:mx-auto after:my-4 after:bg-[#ff6ec7] before:block before:w-0.5 before:h-24 before:mx-auto before:my-4 before:bg-[#ff6ec7]">
              <li className="transition-all duration-300 hover:-translate-y-1">
                <Link
                  target="_blank"
                  className="w-6 h-6 p-1 hover:text-pink-400 hover:mb-5"
                  href={"https://github.com/CALLmeDOMIN"}
                >
                  <i className="icon-github-circled text-3xl" />
                </Link>
              </li>
              <li className="transition-all duration-300 hover:-translate-y-1">
                <Link
                  target="_blank"
                  className="w-6 h-6 p-1 hover:text-pink-400 hover:mb-5"
                  href={
                    "https://www.linkedin.com/in/dominik-siero%C5%84-42405a26b/"
                  }
                >
                  <i className="icon-linkedin-squared text-3xl" />
                </Link>
              </li>
              {/* <li className="transition-all duration-300 hover:-translate-y-1">
              <Link
                target="_blank"
                className="w-6 h-6 p-1 hover:text-pink-400 hover:mb-5"
                href={""}
              >
                abc
              </Link>
            </li> */}
            </ul>
          </div>
          <main className="px-6 md:px-12 lg:px-24 xl:px-36 py-0 my-0 mx-auto max-w-[1600px]">
            <Main />
            <About />
            <Projects />
            <Certificates />
            <Contact />
            <footer className="text-gray-300 flex flex-col space-y-2 items-center justify-center min-h-[100px] border-t border-pink-400">
              <div className="md:hidden flex space-x-4">
                <Link className="hover:text-pink-400 transition-all duration-500 hover:-translate-y-1" href={'https://github.com/CALLmeDOMIN'}> <IconBrandGithub /> </Link>
                <Link className="hover:text-pink-400 transition-all duration-500 hover:-translate-y-1" href={'https://www.linkedin.com/in/dominik-siero%C5%84-42405a26b'}> <IconBrandLinkedin /> </Link>
              </div>
              <h1 className="text-lg">Designed and developed by <span className="text-pink-400">Dominik Sieroń</span></h1>
            </footer>
          </main>
        </div>
      </div >
    </>
  );
};

export default Home;
