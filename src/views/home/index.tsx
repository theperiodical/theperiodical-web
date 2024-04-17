import { Navbar } from "@/components/navbar"
import HeroSection from "@/sections/hero"
import MonthlyTopicsSection from "@/sections/monthly-topics"
import TimelyGistsSection from "@/sections/timely-gists"
import AboutUsSection from "@/sections/about-us"
import AuthorsListSection from "@/sections/authors-list"
import JoinTeamSection from "@/sections/join-team"
import Footer from "@/sections/footer"

export default function HomeView(){
    return(
        <div className="">
    <Navbar />
    <HeroSection />
    <TimelyGistsSection />
    <MonthlyTopicsSection />
    <AboutUsSection />
    <AuthorsListSection />
    <JoinTeamSection />
    <Footer />
        </div>
            
    )
}
