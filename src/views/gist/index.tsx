import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import GistSection from "@/sections/gist/gist-section";

export default function GistView(){
    return(
        <div>
        <Navbar />
        <GistSection />
        <Footer />
        </div>
    )
}