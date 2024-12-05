'use client'
import { useRouter } from "next/navigation"

export default function LoginLayout({children}){
    const router = useRouter();

    return(<div className="flex flex-col h-screen">
        <nav className="w-full bg-white text-gray-500 shadow-lg flex py-4 px-1">
            <button onClick={()=>router.push('/')} className="flex">
                <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="gray" 
                            className="w-6 h-6 text-black"
                        >
                            <path fillRule="evenodd" d="M15.3 19.3a1 1 0 01-1.42 0L7.3 12.7a1 1 0 010-1.42l6.58-6.58a1 1 0 011.42 1.42L9.42 12l5.88 5.88a1 1 0 010 1.42z" clipRule="evenodd" />
                </svg>
                Back
            </button>
        </nav>
        <main className="flex-1">
            {children}
        </main>
    </div>)
};