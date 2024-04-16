import { Navbar } from "@/components/navbar"
import HeroSection from "@/sections/hero"
import MonthlyTopics from "@/sections/monthly-topics"
import TimelyGistsSection from "@/sections/timely-gists"

export default function HomeView(){
    return(
        <div className="">
    <Navbar />
    <HeroSection />
    <TimelyGistsSection />
    <MonthlyTopics />
        </div>
            
    )
}
