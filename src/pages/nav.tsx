import Image from "next/image"
import Link from "next/link"

export default function Nav({id}:{id:string}) {
	return (
		<nav id={id} className="w-screen flex items-center justify-between gap-8 p-4 px-10 h-1/3 bg-slate-900">
			<Link href={'#home'}><Image src={"/logo.png"} alt="Logo" width={48} height={48}></Image></Link >
			<ul className="p-0 m-0 text-gray-300 font-Poppins font-bold list-none flex gap-4">
				<li ><Link className="flex items-strech justify-center p-1 hover:text-pink-400 transition-all duration-500" href={'#about'}>About me</Link></li>
				<li><Link className="flex items-strech justify-center p-1 hover:text-pink-400 transition-all duration-500" href={'#portfolio'}>Portfolio</Link></li>
				<li><Link className="flex items-strech justify-center p-1 hover:text-pink-400 transition-all duration-500" href={'#contact'}>Contact</Link></li>
				<li><Link className="flex items-center justify-center p-1 hover:text-pink-400 transition-all duration-500" href={'#resume'}>Resume</Link></li>
			</ul>
		</nav >
	)
}