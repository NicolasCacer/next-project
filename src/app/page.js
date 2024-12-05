'use client'
import { useRouter } from "next/navigation";
import ModeToggle from './components/mode/mode';
import Logo from "./components/icons/IconLogo";
import MenuIcon from "./components/icons/menuIcon";

export default function Home() {
  const router = useRouter();

  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <header className="bg-white dark:bg-[#171717] shadow-md w-full flex justify-center items-center z-10">
        <nav className="flex justify-between items-center w-full">
          <section className="flex items-center">
            <Logo stroke={'currentColor'} />
            <p className="text-2xl">MyProjects</p>
          </section>
          <section className="flex items-center gap-3 px-4">
            <ModeToggle />
            <MenuIcon />
            <button onClick={()=>router.push('/sign-up')} className="bg-white hidden sm:block dark:bg-gray-800 border-2 border-black py-2 px-3 rounded-full dark:border-white">
              Sign up
            </button>
            <button onClick={()=>router.push('/login')} className="bg-gray-800 hidden sm:block text-white font-bold dark:bg-black border-2 border-gray-800 dark:border-white py-2 px-3 rounded-full">
              Login
            </button>
          </section>
        </nav>
      </header>
      <main className="bg-white dark:bg-gray-700 flex-1 w-full h-auto overflow-y-auto flex flex-col lg:flex-row  gap-3 p-3">
        <div className="bg-white border-2 dark:border-gray-400 dark:bg-gray-700 p-4 w-full h-full min-h-[300px] rounded-lg">left pane</div>
        <div className="bg-white border-2 dark:border-gray-400 dark:bg-gray-700 p-4 w-full h-full min-h-[300px] rounded-lg">middle pane</div>
        <div className="bg-white border-2 dark:border-gray-400 dark:bg-gray-700 p-4 w-full h-full min-h-[300px] rounded-lg">right pane</div>
      </main>
      <footer className="bg-white dark:bg-[#171717] w-full flex justify-between p-1 items-center border-t-2 border-inherit dark:border-none">
      <section className="flex gap-1 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className = "h-8 fill-current text-black dark:text-white" viewBox="0 0 100 100">
            <path d="M82.026 14H17.974A3.974 3.974 0 0 0 14 17.974v64.053A3.974 3.974 0 0 0 17.974 86h34.483V58.118h-9.383V47.252h9.383v-8.014c0-9.3 5.68-14.363 13.976-14.363c3.974 0 7.389.295 8.385.428v9.719l-5.754.003c-4.512 0-5.385 2.144-5.385 5.29v6.938h10.76l-1.401 10.866h-9.359V86h18.348A3.974 3.974 0 0 0 86 82.026V17.974A3.974 3.974 0 0 0 82.026 14" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className = "h-8 fill-current text-black dark:text-white" viewBox="0 0 100 100">
            <path d="M80.667 14H19.315C16.381 14 14 16.325 14 19.188v61.617C14 83.672 16.381 86 19.315 86h61.352C83.603 86 86 83.672 86 80.805V19.188C86 16.325 83.603 14 80.667 14M35.354 75.354H24.67V40.995h10.684zm-5.342-39.057a6.19 6.19 0 0 1-6.19-6.194a6.189 6.189 0 1 1 12.379 0a6.194 6.194 0 0 1-6.189 6.194M75.35 75.354H64.683V58.646c0-3.986-.078-9.111-5.551-9.111c-5.558 0-6.405 4.341-6.405 8.822v16.998H42.052v-34.36h10.245v4.692h.146c1.426-2.7 4.91-5.549 10.106-5.549c10.806 0 12.802 7.114 12.802 16.369v18.847z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className = "h-8 fill-current text-black dark:text-white" viewBox="0 0 512 512">
            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.6 17.6 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.6 18.6 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.2 208.2 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.6 18.6 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.4 19.4 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className = "h-8 fill-current text-black dark:text-white" viewBox="0 0 512 512">
            <path fillRule="evenodd" d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.6 220.6 0 0 0 29.78 111L32 480l118.25-30.87a223.6 223.6 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1M256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52m101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323 323 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48"></path>
          </svg>
        </section>
        <section className="flex gap-10 p-2">
          <p>
            &copy; Nico 2024
          </p>
        </section>
      </footer>
    </section>
  );
}
