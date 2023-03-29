import { IconArrowNarrowRight, IconBrandGithub, IconBrandHtml5, IconBrandReact, IconBrandTailwind, IconBrandVercel } from '@tabler/icons-react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function Projects() {
	const { ref, inView } = useInView({
		triggerOnce: true,
	})

	return (
		<>
			<section
				ref={ref}
				id="portfolio"
				className={`my-0 mx-auto max-w-[1600px] py-48 opacity-0 transition-all translate-x-full duration-[1250ms] ${inView ? 'opacity-100 blur-none -translate-x-0' : 'opacity-0'}`}
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
		</>
	)
}