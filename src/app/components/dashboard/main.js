import { useRouter } from "next/navigation";

export default function DashboardButton() {
    const router = useRouter();

    return (
    <div>
        <button className="bg-green-500 shadow-xl p-2 rounded-full hover:bg-orange-800" onClick={()=>router.push('/dashboard')}>Dashboard</button>
    </div>
    )
};