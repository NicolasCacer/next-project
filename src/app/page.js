'use client'
import { useRouter } from "next/navigation";
import DashboardButton from "./components/dashboard/main";

export default function Home() {
  const router = useRouter();

  return (
    <div className="">
      <main className="flex flex-col">
        <DashboardButton />
      </main>
    </div>
  );
}
