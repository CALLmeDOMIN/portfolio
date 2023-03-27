import { type NextPage } from "next";
import Head from "next/head";
import Nav from "./nav";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandReact,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNextjs,
  IconArrowNarrowRight,
  IconBrandGithub,
  IconBrandVercel,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dominik Sieroń</title>
        <meta name="description" content="Portfolio. Dominik Sieroń" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="bg-slate-900">
        <div className="font-Poppins">
          <Nav id="home" />
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
            <section className="flex flex-col justify-center min-h-screen max-w-5xl mx-auto my-0">
              <h2 className="text-3xl text-gray-300 font-extralight">
                Hi, my name is
              </h2>
              <h1 className="-ml-1 text-7xl text-[#ff6ec7] font-semibold">
                Dominik Sieroń.
              </h1>
              <p className="w-5/6 text-gray-300 text-xl pl-2 pb-2 mt-4">
                I am software engineer with a passion for{" "}
                <span className="text-pink-400">web development</span>.
                Currently studying Computer Science in Engineering at{" "}
                <span className="text-pink-400">
                  AGH University of Science and Technology
                </span>
                .
              </p>
              <button className="sm:w-1/3 min-w-min mt-8 py-4 px-8 bg-transparent text-xl font-semibold text-pink-400 border border-pink-400 rounded-xl transition-all duration-500 hover:bg-pink-400/20">
                Check out my CV!
              </button>
            </section>
            <section
              id="about"
              className="min-h-[600px] max-w-5xl mx-auto my-0 md:pr-10 py-28"
            >
              <h2 className="text-5xl font-bold mb-4 text-gray-300">
                About me
              </h2>
              <div className="md:w-5/6 text-justify">
                <p className=" md:text-xl font-light transition-all duration-500 hover:border-white border-l pl-2 border-pink-400 text-gray-300 mb-4">
                  I graduated from{" "}
                  <span className="text-pink-400">
                    {" "}
                    VI Liceum Ogólnokształcące im. Jana Kochanowskiego{" "}
                  </span>{" "}
                  in Radom, Poland and now I am a student at AGH University of
                  Science and Technology. My field of study (
                  <span className="text-pink-400">
                    Computer Science in Engineering
                  </span>
                  ) helps me to develop my technical skills and gain knowledge.
                </p>
                <p className="transition-all duration-500 hover:border-white md:text-xl font-light border-l pl-2 border-pink-400 text-gray-300 mb-4">
                  I am also interested in web development and I am currently
                  learning <span className="text-pink-400">J</span>s,{" "}
                  <span className="text-pink-400">T</span>s,{" "}
                  <span className="text-pink-400">R</span>eact,{" "}
                  <span className="text-pink-400">N</span>ext.js,{" "}
                  <span className="text-pink-400">t</span>ailwindcss and other
                  technologies.
                </p>
                <p className="transition-all duration-500 hover:border-white md:text-xl font-light border-l border-pink-400 pl-2 text-gray-300 mb-4">
                  In addition to my technical skills, I possess excellent
                  problem-solving abilities, strong communication skills, and a
                  collaborative approach to teamwork. Please feel free to browse
                  my <span className="text-pink-400">portfolio</span> to see some
                  of my coding projects and learn more about me.
                </p>
                <div className="transition-all duration-500 hover:border-white flex justify-center md:justify-start space-x-2 text-white border-b border-l border-pink-400 p-4 md:w-1/2">
                  <IconBrandHtml5 />
                  <IconBrandCss3 />
                  <IconBrandJavascript />
                  <IconBrandTypescript />
                  <IconBrandTailwind />
                  <IconBrandReact />
                  <IconBrandNextjs />
                </div>
              </div>
            </section>
            <section
              id="portfolio"
              className="min-h-screen my-0 mx-auto max-w-[1600px] py-28"
            >
              <div>
                <h2 className="text-5xl font-bold text-gray-300">Projects</h2>
                <h2 className="flex items-center text-3xl font-semibold py-4 text-gray-300"> <IconArrowNarrowRight className="mx-2 text-pink-400" /> Frontend Mentor</h2>
                <div className="pr-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div className="text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/summarycomponent.png')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40">
                    <Link href={'https://github.com/CALLmeDOMIN/summary-component'} target="_blank"><IconBrandGithub /></Link>
                    <Link href={'https://summarycomponent-dominiksieron.vercel.app'} target="_blank"><IconBrandVercel /></Link>
                    <IconBrandHtml5 className="ml-auto" />
                    <IconBrandTailwind />
                  </div>
                  <div className=" text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/previewcard.png')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40">
                    <Link href={'https://github.com/CALLmeDOMIN/preview-card'} target="_blank"><IconBrandGithub /></Link>
                    <Link href={'https://previewcard-dominiksieron.vercel.app'} target="_blank"><IconBrandVercel /></Link>
                    <IconBrandReact className="ml-auto" />
                    <IconBrandTailwind />
                  </div>
                  <div className=" text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/qrcode.png')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40">
                    <Link href={'https://github.com/CALLmeDOMIN/qrcode'} target="_blank"><IconBrandGithub /></Link>
                    <Link href={'https://qrcode-dominiksieron.vercel.app/'} target="_blank"><IconBrandVercel /></Link>
                    <IconBrandHtml5 className="ml-auto" />
                    <IconBrandTailwind />
                  </div>
                </div>
                <Link className="m-4 text-pink-400" href={''}>More</Link>
              </div>
            </section>
            <section id="contact" className="flex flex-col space-y-4 min-h-[800px] py-28 mx-auto my-0 max-w-5xl  md:pr-10 text-gray-300 w-full">
              <h2 className="text-5xl">Contact me</h2>
              <p className="text-2xl border-l pl-2 border-pink-400 hover:border-white transition-all duration-500">You can write to me through <span className="text-pink-400">mail/discord</span>. I will always try to respond.</p>
              <div className="flex justify-center space-x-4">
                <Link href={'mailto:dominiksieron13@gmail.com'} className="p-4 hover:bg-pink-400/40 rounded-md text-pink-400 border border-pink-400 transition-all duration-500">
                  Mail me!</Link>
                <Link href={'https://discord.com/users/320254777160368139'} target="_blank" className="p-4 hover:bg-pink-400/40 rounded-md text-pink-400 border border-pink-400 transition-all duration-500">
                  Discord</Link>
              </div>
            </section>
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
