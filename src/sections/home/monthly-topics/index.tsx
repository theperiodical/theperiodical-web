import { fDate } from "@/utils/format-time";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Calendar, Sparkles, BookOpen, ArrowRight, Clock, Hash, FileText } from "lucide-react";

export default function MonthlyTopicsSection({ topics }: { topics: any }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Get the latest 6 topics
  const latestTopics = topics?.slice(0, 6) || [];

  const gradientColors = [
    "from-blue-500/20 to-purple-500/20",
    "from-green-500/20 to-teal-500/20", 
    "from-orange-500/20 to-red-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-teal-500/20 to-cyan-500/20",
    "from-indigo-500/20 to-blue-500/20"
  ];

  return (
    latestTopics.length > 0 && (
      <section className="relative py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--border))_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Section Header */}
            <motion.div 
              variants={item}
              className="text-center space-y-6"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 ring-1 ring-primary/20">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
                    Latest Topics
                  </span>
                </h2>
                <div className="p-3 rounded-full bg-primary/10 ring-1 ring-primary/20">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Discover the most recent topics from our expert writers, covering diverse subjects that matter most in today&apos;s world
              </p>
            </motion.div>

            {/* Topics Grid */}
            <motion.div 
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >              {latestTopics.map((topic: any, index: number) => (
                <Link 
                  key={topic.id} 
                  href={`/gist/${topic.gist.slug}?topic=${topic.id}&mode=focus`}
                  className="block h-full"
                >
                  <motion.article
                    variants={item}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative h-full"
                  >
                    <div className={`relative h-full bg-gradient-to-br ${gradientColors[index % gradientColors.length]} 
                      rounded-2xl overflow-hidden border border-border/40 hover:border-primary/30 
                      transition-all duration-500`}>
                      
                      {/* Content Card */}
                      <div className="relative h-full bg-card/80 backdrop-blur-sm p-6 space-y-4 
                        hover:bg-card/90 transition-all duration-300">
                        
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-full bg-primary/10">
                              <Hash className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                              Topic {index + 1}
                            </span>
                          </div>
                          <FileText className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary/70 transition-colors" />
                        </div>

                        {/* Title */}
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary 
                            transition-colors line-clamp-3 leading-snug">
                            {topic.title}
                          </h3>
                        </div>

                        {/* Meta Information */}
                        <div className="space-y-3 pt-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span>{topic.gist.author.name}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{fDate(topic.created_at)}</span>
                          </div>
                        </div>

                        {/* Gist Reference */}
                        <div className="pt-3 border-t border-border/20 space-y-2">
                          <p className="text-xs text-muted-foreground/80">
                            From Gist:
                          </p>
                          <p className="text-sm font-medium text-foreground line-clamp-2">
                            {topic.gist.title}
                          </p>
                        </div>

                        {/* Action */}
                        <div className="pt-4">
                          <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 
                            transition-all duration-300 group-hover:translate-x-1">
                            <span className="text-sm font-medium">Read Topic</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 
                              group-hover:translate-x-1" />
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl 
                          group-hover:bg-primary/10 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/3 rounded-full blur-xl 
                          group-hover:bg-primary/8 transition-colors duration-500" />
                      </div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 
                        rounded-2xl transition-all duration-300" />                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>

            {/* View All Button */}
            <motion.div 
              variants={item}
              className="text-center pt-8"
            >
              <Link href="/topics">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary/10 hover:bg-primary/20 
                  text-primary rounded-full transition-all duration-300 hover:scale-105 active:scale-95 
                  ring-2 ring-primary/10 hover:ring-primary/20">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">View All Topics</span>
                  <ArrowRight className="w-5 h-5 transform transition-transform duration-300 
                    group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  );
}
