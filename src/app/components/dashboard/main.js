import { useRouter } from "next/navigation";

export default function DashboardButton() {
    const router = useRouter();

    return (
        <button className="bg-gray-300 dark:bg-[#2c2c2e] shadow-lg p-2 rounded-full hover:bg-orange-800" onClick={()=>router.push('/dashboard')}>Dashboard</button>
    )
};