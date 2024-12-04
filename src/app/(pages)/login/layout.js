import NavBar from "@/app/components/navbar/navbar"
import Footer from "@/app/components/footer/footer"
export default function LoginLayout({children}){
    return(<div className="flex flex-col h-screen">
        <NavBar />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
    </div>)
};