import { type NextPage } from "next";
import Head from "next/head";
import Nav from "./nav";
import Link from "next/link";
import Image from "next/image";
import { IconBrandReact, IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBrandTypescript, IconBrandTailwind, IconBrandNextjs } from '@tabler/icons-react'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Dominik Sieroń</title>
        <meta name="description" content="Portfolio. Dominik Sieroń" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* <body className={`${open ? 'overflow-y-hidden' : 'overflow-auto'}`}> */}
      <div className="bg-slate-900">
        <Nav id="home" />
        <div className="hidden fixed w-24 h-screen md:flex items-center left-auto right-5 text-white ">
          <ul className="w-full flex flex-col items-center space-y-4 after:block after:w-0.5 after:h-24 after:mx-auto after:my-4 after:bg-[#ff6ec7] before:block before:w-0.5 before:h-24 before:mx-auto before:my-4 before:bg-[#ff6ec7]">
            <li className="transition-all duration-300 hover:-translate-y-1"><Link target="_blank" className="w-6 h-6 p-1 hover:text-pink-400 hover:mb-5" href={'https://github.com/CALLmeDOMIN'}><i className="icon-github-circled text-3xl" /></Link></li>
            <li className="transition-all duration-300 hover:-translate-y-1"><Link target="_blank" className="w-6 h-6 p-1 hover:text-pink-400 hover:mb-5" href={'https://www.linkedin.com/in/dominik-siero%C5%84-42405a26b/'}><i className="icon-linkedin-squared text-3xl" /></Link></li>
            <li className="transition-all duration-300 hover:-translate-y-1"><Link target="_blank" className="w-6 h-6 p-1 hover:text-pink-400 hover:mb-5" href={''}>abc</Link></li>
          </ul>
        </div>
        <div className="font-Poppins">
          <main className="px-6 md:px-12 lg:px-24 xl:px-36 py-0 my-0 mx-auto max-w-[1600px]">
            <section className="flex flex-col justify-center min-h-screen max-w-5xl mx-auto my-0">
              <h2 className="text-3xl text-gray-300 font-extralight">Hi, my name is</h2>
              <h1 className="-ml-1 text-7xl text-[#ff6ec7] font-semibold">Dominik Sieroń.</h1>
              <p className="text-gray-300 text-xl mt-4 mx-4">
                Software engineer with a passion for <span className="text-pink-400">web development</span>. <br />
                I am currently studying Computer Science in Engineering at <br /><span className="text-pink-400">AGH University of Science and Technology</span>.
              </p>
              <button className="sm:w-1/3 min-w-min mt-8 py-4 px-8 bg-transparent text-xl font-semibold text-pink-400 border border-pink-400 rounded-xl transition-all duration-500 hover:bg-pink-400/20">Check out my CV!</button>
            </section>
            <section id="about" className="min-h-screen max-w-5xl mx-auto my-0 md:pr-10">
              <h2 className="text-5xl font-bold mb-4 text-gray-300">About me</h2>
              <p className=" md:text-xl font-light text-gray-300 mb-4">
                I graduated from <span className="text-pink-400"> VI Liceum Ogólnokształcące im. Jana Kochanowskiego </span> in Radom, Poland and now I am a student at AGH University of Science and Technology.
                <br />My field of study (<span className="text-pink-400">Computer Science in Engineering</span>) helps me to develop my technical skills and gain knowledge.
              </p>
              <p className=" md:text-xl font0light text-gray-300 mb-4">
                I am also interested in web development and I am currently learning <span className="text-pink-400">J</span>s, <span className="text-pink-400">T</span>s, <span className="text-pink-400">R</span>eact, <span className="text-pink-400">N</span>ext.js, <span className="text-pink-400">t</span>ailwindcss and other technologies.
              </p>
              <p className=" md:text-xl font0light text-gray-300 mb-4">
                In addition to my technical skills, I possess excellent problem-solving abilities, strong communication skills,
                and a collaborative approach to teamwork.
                Please feel free to browse my <span className="text-pink-400">portfolio</span> to see some of my coding projects and learn more about me.
              </p>
              <div className="flex justify-center md:justify-start space-x-2 text-white border-b border-pink-400 p-4 md:w-1/2">
                <IconBrandHtml5 />
                <IconBrandCss3 />
                <IconBrandJavascript />
                <IconBrandTypescript />
                <IconBrandTailwind />
                <IconBrandReact />
                <IconBrandNextjs />
              </div>
            </section>
            <section id="portfolio" className="min-h-screen my-0 mx-auto max-w-[1600px]">
              <h2 className="text-5xl font-bold text-gray-300">Projects</h2>
            </section>
          </main>
        </div>
      </div>
      {/* </body> */}
    </>
  );
};

export default Home;
