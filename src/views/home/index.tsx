import { Navbar } from "@/components/navbar"
import HeroSection from "@/sections/home/hero"
import MonthlyTopicsSection from "@/sections/home/monthly-topics"
import TimelyGistsSection from "@/sections/home/timely-gists"
import AboutUsSection from "@/sections/home/about-us"
import AuthorsListSection from "@/sections/home/authors-list"
import JoinTeamSection from "@/sections/home/join-team"
import {Footer} from "@/components/footer"

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
