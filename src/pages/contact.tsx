import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function Contact() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		// threshold: 0.1,
	})

	return (
		<>
			<section ref={ref} id="contact" className={`flex flex-col space-y-4 min-h-[800px] py-28 mx-auto my-0 max-w-5xl  md:pr-10 text-gray-300 w-full opacity-0 -translate-x-full transition-all duration-[1250ms] odd:delay-300 even:delay-700 ${inView ? 'opacity-100 translate-x-0 blur-none' : ''}`}>

				<style jsx global>{`
					body{
						overflow-x: hidden;
					}
				`}</style>

				<h2 className="text-5xl">Contact me</h2>
				<p className="text-2xl border-l pl-2 border-pink-400 hover:border-white transition-all duration-500">You can write to me through <span className="text-pink-400">mail/discord</span>. I will always try to respond.</p>
				<div className="flex justify-center space-x-4">
					<Link href={'mailto:dominiksieron13@gmail.com'} className="p-4 hover:bg-pink-400/40 rounded-md text-pink-400 border border-pink-400 transition-all duration-500">
						Mail me!</Link>
					<Link href={'https://discord.com/users/320254777160368139'} target="_blank" className="p-4 hover:bg-pink-400/40 rounded-md text-pink-400 border border-pink-400 transition-all duration-500">
						Discord</Link>
				</div>
			</section>
		</>
	);
}