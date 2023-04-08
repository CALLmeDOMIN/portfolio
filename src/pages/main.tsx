import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Main() {
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
		trackVisibility: true,
		delay: 100,
	})

	return (
		<>
			<section ref={ref} id="home" className={`flex flex-col justify-center min-h-screen max-w-5xl mx-auto my-0 transition-all duration-[1250ms] ${inView ? 'opacity-100 blur-none' : 'opacity-0'}`}>
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
				<Link
					href={"/CV_1-2.pdf"}
					target="_blank"
				>
					<button className="sm:w-1/3 min-w-min mt-8 py-4 px-8 bg-transparent text-xl font-semibold text-pink-400 border border-pink-400 rounded-xl transition-all duration-500 hover:bg-pink-400/20">
						Check out my CV!
					</button>
				</Link>
			</section>

		</>
	);
}