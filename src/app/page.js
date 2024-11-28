'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="">
      <main className="flex flex-col">
        <button className="bg-orange-500 shadow-xl p-2 rounded-full hover:bg-orange-800" onClick={()=>router.push('/dashboard')}>Dashboard</button>
      </main>
    </div>
  );
}
