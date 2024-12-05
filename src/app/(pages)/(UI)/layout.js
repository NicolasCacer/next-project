'use client'
import NavBar from "@/app/components/navbar/navbar";
import { useRouter } from "next/navigation"

export default function UiLayout({children}){
    const router = useRouter();

    return(<div className="flex flex-col h-screen">
        <NavBar />
        <main className="flex-1">
            {children}
        </main>
    </div>)
};