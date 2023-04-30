import { IconAddressBook } from "@tabler/icons-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // threshold: 0.1,
  });

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className={`flex flex-col space-y-4 min-h-[800px] py-28 mx-auto my-0 max-w-5xl  md:pr-10 text-gray-300 w-full opacity-0 -translate-x-full transition-all duration-[1250ms] odd:delay-300 even:delay-700 ${
          inView ? "opacity-100 translate-x-0 blur-none" : ""
        }`}
      >
        <style jsx global>{`
          body {
            overflow-x: hidden;
          }
        `}</style>

        <div className="flex">
          <IconAddressBook className="w-12 h-12 text-gray-300 mr-2" />
          <h2 className="text-5xl font-bold mb-4 text-gray-300">Contact me</h2>
        </div>
        <div className=" pl-2 border-l border-pink-400 hover:border-white">
          <p className=" md:text-xl font-light transition-all duration-500 text-gray-300 mb-4">
            You can write to me through{" "}
            <span className="text-pink-400">mail/discord</span>. I will always
            try to respond.
          </p>
          <div className="flex flex-col pl-4 space-y-2">
            <Link
              href={"mailto:dominiksieron13@gmail.com"}
              className="text-pink-400"
            >
              Mail me!
            </Link>
            <Link
              href={"https://discord.com/users/320254777160368139"}
              target="_blank"
              className="text-pink-400"
            >
              Discord
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
