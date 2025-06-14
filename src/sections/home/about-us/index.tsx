import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Target, ArrowRight, Sparkles, Globe2 } from "lucide-react";

export default function AboutUsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about-us" className="relative py-24 overflow-hidden">      {/* Unique Background - Circular Gradient Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f5f5f5_0%,transparent_50%)] opacity-70" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1a365d]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4a5568]/10 rounded-full blur-3xl" />
      </div>

      {/* Decorative Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1a365d] via-[#4a5568] to-[#2d3748]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* About Us Section */}
          <motion.div
            variants={item}
            className="space-y-6"
          >            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a365d]/10">
              <Users className="w-5 h-5 text-[#1a365d]" />
              <span className="text-sm font-semibold text-[#1a365d]">ABOUT US</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                We are a community of content writers who{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a365d] to-[#2d3748]">
                  share their learnings
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Step into our vibrant community of writers, where knowledge flows freely and creativity thrives. 
                Join us as we collaborate, learn, and grow together on our writing adventures!
              </p>
              
              <motion.a
                href="#join-team"
                className="group inline-flex items-center gap-2 text-[#1a365d] hover:text-[#2d3748] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="font-medium">Read more</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>

          {/* Our Mission Section */}
          <motion.div
            variants={item}
            className="relative"
          >            <div className="absolute -inset-4 bg-gradient-to-r from-[#1a365d]/5 to-[#4a5568]/5 rounded-2xl blur-lg" />
            <div className="relative space-y-6 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4a5568]/10">
                <Target className="w-5 h-5 text-[#4a5568]" />
                <span className="text-sm font-semibold text-[#4a5568]">OUR MISSION</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                  Creating valuable content for{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4a5568] to-[#1a365d]">
                    enlightenment
                  </span>{" "}
                  around the world
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to craft insightful content that encapsulates global news, 
                  offering concise summaries and in-depth analysis for discerning readers. 
                  We aim to inform, enlighten, and engage our audience with the latest 
                  developments from around the world.
                </p>
              </div>              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-[#1a365d]" />
                    <span className="text-2xl font-bold text-[#1a365d]">150+</span>
                  </div>
                  <p className="text-sm text-gray-600">Global Writers</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#4a5568]" />
                    <span className="text-2xl font-bold text-[#4a5568]">2M+</span>
                  </div>
                  <p className="text-sm text-gray-600">Monthly Readers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}