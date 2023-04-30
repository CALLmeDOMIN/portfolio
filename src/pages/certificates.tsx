import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { IconCertificate } from "@tabler/icons-react";

export default function Certificates() {
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
    trackVisibility: true,
    delay: 100,
  });

  return (
    <>
      <section
        id="certificates"
        ref={ref}
        className={`min-h-[600px] max-w-5xl mx-auto my-0 md:pr-10 py-28 opacity-0 -translate-x-full transition-all duration-[1250ms] ${
          inView ? "opacity-100 translate-x-0 blur-none" : "opacity-0"
        }`}
      >
        <div className="flex">
          <IconCertificate className="w-12 h-12 text-gray-300 mr-2" />
          <h2 className="text-5xl font-bold mb-4 text-gray-300">Certificates</h2>
        </div>
        <div className="md:w-5/6 text-justify pl-2 border-l border-pink-400 hover:border-white">
          <p className=" md:text-xl font-light transition-all duration-500 text-gray-300 mb-4">
            JavaScript Algorithms and Data Structures by freeCodeCamp.org
          </p>
		  <p className=" md:text-md font-light transition-all duration-500 text-gray-300 mb-4 pl-4">
			Developer Certification, representing approximately 300 hours of coursework.
		  </p>
          <Link
            target="_blank"
            className="text-pink-400 pl-4"
            href={
              "https://www.freecodecamp.org/certification/CALLmeDOMIN/javascript-algorithms-and-data-structures"
            }
          >
            Look up
          </Link>
        </div>
      </section>
    </>
  );
}
