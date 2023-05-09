import {
  IconBrandReact,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandSass,
  IconBrandPython,
  IconBrandCpp,
  IconBrandGit,
  IconUser,
  IconSql
} from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
    trackVisibility: true,
    delay: 100,
  });

  return (
    <>
      <section
        ref={ref}
        id="about"
        className={`min-h-[600px] max-w-5xl mx-auto my-0 md:pr-10 py-28 opacity-0 -translate-x-full transition-all duration-[1250ms] ${
          inView ? "opacity-100 translate-x-0 blur-none" : "opacity-0"
        }`}
      >
        <div className="flex"> 
          <IconUser className="w-12 h-12 text-gray-300 mr-2"/>
          <h2 className="text-5xl font-bold mb-4 text-gray-300">About me</h2>
        </div>
        <div className="md:w-5/6 text-justify">
          <p className=" md:text-xl font-light transition-all duration-500 hover:border-white border-l pl-2 border-pink-400 text-gray-300 mb-4">
            I graduated from{" "}
            <span className="text-pink-400">
              {" "}
              VI Liceum Ogólnokształcące im. Jana Kochanowskiego{" "}
            </span>{" "}
            in Radom, Poland and now I am a student at AGH University of Science
            and Technology. My field of study (
            <span className="text-pink-400">
              Computer Science in Engineering
            </span>
            ) helps me to develop my technical skills and gain knowledge.
          </p>
          <p className="transition-all duration-500 hover:border-white md:text-xl font-light border-l pl-2 border-pink-400 text-gray-300 mb-4">
            I am also interested in web development and I am currently learning{" "}
            <span className="text-pink-400">J</span>s,{" "}
            <span className="text-pink-400">T</span>s,{" "}
            <span className="text-pink-400">R</span>eact,{" "}
            <span className="text-pink-400">N</span>ext.js,{" "}
            <span className="text-pink-400">t</span>ailwindcss and other
            technologies.
          </p>
          <p className="transition-all duration-500 hover:border-white md:text-xl font-light border-l border-pink-400 pl-2 text-gray-300 mb-4">
            In addition to my technical skills, I possess excellent
            problem-solving abilities, strong communication skills, and a
            collaborative approach to teamwork. Please feel free to browse my{" "}
            <span className="text-pink-400">portfolio</span> to see some of my
            coding projects and learn more about me.
          </p>
          <div className="transition-all duration-500 hover:border-white flex justify-center md:justify-start space-x-2 text-white border-b border-l border-pink-400 p-4 md:w-1/2">
            <IconBrandHtml5 />
            <IconBrandCss3 />
            <IconBrandTailwind />
            <IconBrandSass />
            <IconBrandJavascript />
            <IconBrandTypescript />
            <IconBrandReact />
            <IconBrandNextjs />
            <IconSql />
            <IconBrandPython />
            <IconBrandCpp />
            <IconBrandGit />
          </div>
        </div>
      </section>
    </>
  );
}
