import {
  IconArrowNarrowRight,
  IconCode,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandVercel,
} from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section
        ref={ref}
        id="portfolio"
        className={`my-0 mx-auto py-48 opacity-0 -translate-x-full transition-all duration-[1250ms] ${
          inView ? "opacity-100 translate-x-0 blur-none" : ""
        }`}
      >
        <div className="flex">
          <IconCode className="w-12 h-12 text-gray-300 mr-2" />
          <h2 className="text-5xl font-bold mb-4 text-gray-300">Projects</h2>
        </div>
        <h2 className="pl-4 flex items-center text-3xl font-semibold py-4 text-gray-300">
          {" "}
          <IconArrowNarrowRight className="mx-2 text-pink-400" /> mytriproutes
        </h2>
        <div className="px-8">
          <p className="text-gray-300">
            As part of a small team of three, I was responsible for frontend
            development and design in the mytriproutes project. I utilized
            various tools and technologies, including React, Typescript, and
            SCSS, and later migrated the project to Tailwindcss. Our team had
            specific business and technical goals in mind throughout the
            project, with a focus on providing users with an intuitive interface
            and ensuring high website performance. We successfully created an
            intuitive user interface, and the website functions quickly and
            smoothly. Overall, MyTripRoutes benefits users by making it easier
            for them to plan and share their trips, and store their photos and
            routes in a user-friendly way. A preview of the project is available
            at the link below (website may be during maintenance sometimes).
          </p>
          <Link
            target="_blank"
            className="text-pink-400"
            href={"https://mytriproutes.com"}
          >
            Look up
          </Link>
        </div>
        <h2 className="pl-4 flex items-center text-3xl font-semibold py-4 text-gray-300">
          {" "}
          <IconArrowNarrowRight className="mx-2 text-pink-400" /> Frontend
          Mentor
        </h2>
        <div className="pr-16 pl-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 transition-all duration-1000 odd:delay-300 even:delay-700">
          <div className=" text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/tipcalc.jpg')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40">
            <Link
              href={"https://github.com/CALLmeDOMIN/tip-calculator"}
              target="_blank"
            >
              <IconBrandGithub />
            </Link>
            <Link
              href={"https://tip-calculator-dominiksieron.vercel.app/"}
              target="_blank"
            >
              <IconBrandVercel />
            </Link>
            <IconBrandReact className="ml-auto" />
            <IconBrandTailwind />
          </div>
          <div
            className={`text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/summarycomponent.png')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40 delay-300`}
          >
            <Link
              href={"https://github.com/CALLmeDOMIN/summary-component"}
              target="_blank"
            >
              <IconBrandGithub />
            </Link>
            <Link
              href={"https://summarycomponent-dominiksieron.vercel.app"}
              target="_blank"
            >
              <IconBrandVercel />
            </Link>
            <IconBrandHtml5 className="ml-auto" />
            <IconBrandTailwind />
          </div>
          <div className=" text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/previewcard.png')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40 delay-1000">
            <Link
              href={"https://github.com/CALLmeDOMIN/preview-card"}
              target="_blank"
            >
              <IconBrandGithub />
            </Link>
            <Link
              href={"https://previewcard-dominiksieron.vercel.app"}
              target="_blank"
            >
              <IconBrandVercel />
            </Link>
            <IconBrandReact className="ml-auto" />
            <IconBrandTailwind />
          </div>
          <div className=" text-pink-400 flex items-end p-1 aspect-video rounded-xl bg-[url('/qrcode.png')] bg-blend-color-burn bg-center bg-cover bg-no-repeat shadow-md shadow-white/40">
            <Link
              href={"https://github.com/CALLmeDOMIN/qrcode"}
              target="_blank"
            >
              <IconBrandGithub />
            </Link>
            <Link
              href={"https://qrcode-dominiksieron.vercel.app/"}
              target="_blank"
            >
              <IconBrandVercel />
            </Link>
            <IconBrandHtml5 className="ml-auto" />
            <IconBrandTailwind />
          </div>
        </div>
        {/* <Link className="m-4 text-pink-400" href={''}>More</Link> */}
      </section>
    </>
  );
}
