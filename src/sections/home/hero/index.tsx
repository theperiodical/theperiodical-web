import { paths } from "@/lib";
import Link from "next/link";
import Image from "next/image";
import { fDate } from "@/utils/format-time";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection({heroGist}:{heroGist: any}) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-muted/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/30 opacity-20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 max-w-xl"
          >
            {/* Post Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                POSTED ON {fDate(heroGist.to)}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground"
            >
              {heroGist.title}
            </motion.h1>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary/80 ring-2 ring-background shadow-lg" />
              <div>
                <p className="font-medium text-foreground">{heroGist.author.name}</p>
                <p className="text-sm text-muted-foreground">Content Writer</p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-lg text-muted-foreground/90 leading-relaxed"
            >
              {heroGist.description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link href={`${paths.gist}/${heroGist.slug}`}>
                <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden 
                  transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95
                  ring-2 ring-primary/10 hover:ring-primary/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full h-[500px] lg:h-[600px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-foreground/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
              <Image
                src="/Images/hero.webp"
                alt="Featured article hero image"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ objectFit: "cover" }}
                className="transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-pulse delay-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
