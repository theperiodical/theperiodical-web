"use client";

import { Loader } from "@/components/loader";
import HeroSection from "@/sections/home/hero";
import MonthlyTopicsSection from "@/sections/home/monthly-topics";
import TimelyGistsSection from "@/sections/home/timely-gists";
import AboutUsSection from "@/sections/home/about-us";
import AuthorsListSection from "@/sections/home/authors-list";
import JoinTeamSection from "@/sections/home/join-team";
import { useGetGists } from "@/services/gist.service";
import { useGetTopics } from "@/services/topic.service";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HomeView() {
  // states
  const [initialLoading, setInitialLoading] = useState(true);

  // hooks
  const { gists, gistsLoading, gistsError } = useGetGists();
  const { topics, topicsLoading, topicsError } = useGetTopics();

  // effects
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!gistsLoading && !topicsLoading) {
        setInitialLoading(false);
      }
    }, 500); // Add small delay for smoother transition

    return () => clearTimeout(timer);
  }, [gistsLoading, topicsLoading]);

  return (
    <>
      <AnimatePresence>
        {initialLoading && <Loader />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: initialLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={initialLoading ? "invisible" : ""}
      >
        {gists?.[0] && <HeroSection heroGist={gists?.[0]} />}
        {gists && <TimelyGistsSection gists={gists || []} />}
        {topics && <MonthlyTopicsSection topics={topics || []} />}
        <AboutUsSection />
        <AuthorsListSection />
        <JoinTeamSection />
      </motion.div>
    </>
  );
}
