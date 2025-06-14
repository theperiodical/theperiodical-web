"use client";

import { Loader } from "@/components/loader";
import GistSection from "@/sections/gist/gist-section";
import { useGetGists } from "@/services/gist.service";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function GistView({ slug }: { slug: string }) {
  const [initialLoading, setInitialLoading] = useState(true);
  const { gists, gistsLoading } = useGetGists(slug);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!gistsLoading) {
        setInitialLoading(false);
      }
    }, 500); // Add small delay for smoother transition

    return () => clearTimeout(timer);
  }, [gistsLoading]);

  return (
    <>
      <AnimatePresence>
        {initialLoading && <Loader />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: initialLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={initialLoading ? 'invisible' : ''}
      >
        <GistSection slug={slug} />
      </motion.div>
    </>
  );
}
