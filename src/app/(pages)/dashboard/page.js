'use client'
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div>
      <button className="bg-purple-500 shadow-xl p-2 rounded-full hover:bg-purple-800" onClick={()=>router.push('/')}>Go to Main menu</button>
      <button className="bg-red-500 shadow-xl p-2 rounded-full hover:bg-red-800" onClick={()=>router.push('/pokemon')}>Go to pokemon</button>
    </div>
  );
}
