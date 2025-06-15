import { fDate } from "@/utils/format-time";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export default function TimelyGistsSection({ gists }: { gists: any }) {
  const router = useRouter();
  const latestGist = gists ? gists[0] : null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="gists"
      className="relative py-24 bg-gradient-to-b from-background via-muted/50 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-muted/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-5 gap-8"
        >
          {/* Featured Gist */}
          {latestGist && (
            <motion.div 
              variants={item}
              className="lg:col-span-3 space-y-8"
            >              <div className="space-y-4">
                <motion.h2 
                  variants={item}
                  className="text-3xl font-bold inline-flex items-center gap-2"
                >
                  <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                    Weekly Gist
                  </span>
                </motion.h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    {fDate(latestGist.from)} - {fDate(latestGist.to)}
                  </span>
                </div>
              </div>

              <motion.div 
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/Images/gist_1.png"
                    alt={latestGist.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                </div>
                <div className="flex flex-col p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {latestGist.title}
                  </h3>
                  <p className="text-muted-foreground/90 leading-relaxed">
                    {latestGist.description}
                  </p>
                  <Link href={`/gist/${latestGist.slug}`} className="w-fit">
                    <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
                      rounded-full overflow-hidden transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:scale-105 
                      active:scale-95 ring-2 ring-primary/10 hover:ring-primary/20"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}          {/* Previous Gists */}
          <div 
            className="lg:col-span-2 space-y-6"
          >            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
              >
                Previous Gists
              </motion.h2>
            </div>            <div className="flex flex-col space-y-4">
              {gists.slice(1, gists.length > 6 ? 6 : gists.length).map((item: any, index: number) => (
                <Link key={item.id} href={`/gist/${item.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group relative bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300
                      border border-border/40 hover:border-primary/20"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center
                        ring-2 ring-background shadow-sm group-hover:bg-primary/15 transition-colors">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {fDate(item.from)} - {fDate(item.to)}
                        </p>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground/50 transform translate-x-0 
                        group-hover:translate-x-2 group-hover:text-primary transition-all" />
                    </div>
                  </motion.div>
                </Link>              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
