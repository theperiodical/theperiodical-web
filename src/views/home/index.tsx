"use client";

import { Navbar } from "@/components/navbar";
import HeroSection from "@/sections/home/hero";
import MonthlyTopicsSection from "@/sections/home/monthly-topics";
import TimelyGistsSection from "@/sections/home/timely-gists";
import AboutUsSection from "@/sections/home/about-us";
import AuthorsListSection from "@/sections/home/authors-list";
import JoinTeamSection from "@/sections/home/join-team";
import { Footer } from "@/components/footer";
import { useGetGists } from "@/services/gist.service";
import { useGetTopics } from "@/services/topic.service";
import { Loader2 } from "lucide-react";

export default function HomeView() {
  const { gists, gistsLoading, gistsError, gistsValidating, gistsEmpty } =
    useGetGists();
  const { topics, topicsLoading, topicsError, topicsValidating, topicsEmpty } =
    useGetTopics();

  return (
    <div className="">
      {gistsLoading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <Loader2 className="mr-2 h-24 w-24 animate-spin" />
        </div>
      ) : (
        <>
          <Navbar />
          <HeroSection link="exploring-the-impact-and-implications-of-windfall-taxes-on-indias-petroleum-industry" />
          <TimelyGistsSection gists={gists} />
          <MonthlyTopicsSection topics={topics} />
          <AboutUsSection />
          <AuthorsListSection />
          <JoinTeamSection />
          <Footer />
        </>
      )}
    </div>
  );
}
