import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Nav({ id }: { id: string }) {
	const [open, setOpen] = useState(false)


	return (
		<nav id={id} className="w-screen flex fixed top-0  items-center justify-between gap-8 p-8 md:px-10 shadow-xl opacity-90 bg-slate-900">
			<Link className="opacity-100" href={'#home'}><Image src={"/logo.png"} alt="Logo" width={48} height={48}></Image></Link >
			<div onClick={() => setOpen(!open)} className="transition-all duration-500 md:hidden h-full z-20 aspect-square text-3xl text-pink-400 cursor-pointer">
				<i className={open ? 'icon-cancel' : 'icon-menu'} />
			</div>
			<ul className={`pt-12 md:p-0 py-10 mt-0 text-gray-300
			 font-Poppins font-bold list-none flex flex-col md:flex-row md:static z-10
			 md:z-auto fixed shadow-2xl md:shadow-none w-3/4 h-screen md:w-auto
			 md:h-auto top-0 gap-10 md:gap-4 bg-inherit md:bg-transparent right-0
			 opacity-0 md:opacity-100 transition-all ease-in duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}>
				<li ><Link onClick={() => setOpen(false)} className="flex items-strech justify-center p-1 hover:text-pink-400 transition-all duration-500" href={'#about'}>About me</Link></li>
				<li><Link onClick={() => setOpen(false)} className="flex items-strech justify-center p-1 hover:text-pink-400 transition-all duration-500" href={'#portfolio'}>Portfolio</Link></li>
				<li><Link onClick={() => setOpen(false)} className="flex items-strech justify-center p-1 hover:text-pink-400 transition-all duration-500" href={'#contact'}>Contact</Link></li>
				<li><Link onClick={() => setOpen(false)} className="flex items-center justify-center p-1 hover:text-pink-400 transition-all duration-500" href={'#resume'}>Resume</Link></li>
			</ul>
			<div className={`opacity-0 md:hidden backdrop-blur-sm 
			md:backdrop-blur-none bg-transparent fixed z-[5] w-screen h-screen 
			top-0 transition-all ease-in duration-500 ${open ? 'opacity-100' : 'opacity-0'}
			`}></div>
		</nav >
	)
}