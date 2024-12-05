'use client'
import ModeToggle from "../mode/mode"
import { useRouter } from "next/navigation"
import IconLogo from "../icons/IconLogo";
import MenuIcon from "../icons/menuIcon";

export default function NavBar(){
  const router = useRouter();
    return(
    <nav className="flex justify-between items-center w-full">
      <section className="flex items-center">
        <IconLogo stroke={'currentColor'} />
        <p className="text-2xl">MyProjects</p>
      </section>
      <section className="flex items-center gap-3 px-4">
      <button className="hidden sm:flex justify-center items-center ">
        Projects
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M36 18L24 30L12 18"></path>
        </svg>
      </button>
        <ModeToggle />
        <MenuIcon />
        <button onClick={()=>router.push('/')} className="bg-white w-14 h-14 hidden sm:block dark:bg-gray-800 rounded-full dark:border-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 15 15">
            <path fill="currentColor" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 0 0-4.193 9.494A4.97 4.97 0 0 1 7.5 9.025a4.97 4.97 0 0 1 4.193 2.296A5.673 5.673 0 0 0 7.5 1.827m3.482 10.152A4.02 4.02 0 0 0 7.5 9.975a4.02 4.02 0 0 0-3.482 2.004A5.65 5.65 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194M5.15 6.505a2.35 2.35 0 1 1 4.7 0a2.35 2.35 0 0 1-4.7 0m2.35-1.4a1.4 1.4 0 1 0 0 2.8a1.4 1.4 0 0 0 0-2.8" clipRule="evenodd"></path>
          </svg>
        </button>
      </section>
    </nav>
    )
};