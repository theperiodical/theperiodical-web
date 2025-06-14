import { motion } from "framer-motion";
import { Users2, Sparkles, ArrowRight } from "lucide-react";

export default function JoinTeamSection(){    const container = {
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

    return(
        <section id="contact-us" className="relative py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#f8fafc_0%,#ffffff_40%,#f1f5f9_100%)]" />
                <div className="absolute h-[500px] w-[500px] -right-24 -bottom-24 bg-[radial-gradient(circle,#1a365d08_0%,#1a365d02_50%,transparent_100%)]" />
                <div className="absolute h-[500px] w-[500px] -left-24 -top-24 bg-[radial-gradient(circle,#4a556808_0%,#4a556802_50%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
                        {/* Decorative blur elements */}
                        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#1a365d]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#4a5568]/10 rounded-full blur-3xl" />
                        
                        {/* Content */}
                        <div className="relative space-y-8 text-center">
                            <motion.div variants={item} className="space-y-4">
                                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1a365d]/5 mx-auto">
                                    <Users2 className="w-5 h-5 text-[#1a365d]" />
                                    <span className="text-sm font-semibold text-[#1a365d]">JOIN OUR TEAM</span>
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                    Join our team to be a part of{" "}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a365d] to-[#4a5568]">
                                        our story
                                    </span>
                                </h2>
                                
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Join us as we collaborate, learn, and grow together on our writing adventures.
                                    Be part of a community that values creativity and innovation.
                                </p>
                            </motion.div>

                            <motion.div variants={item}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a365d] text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Join Now
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        <Sparkles className="w-4 h-4" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2d3748] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>
                            </motion.div>

                            {/* Stats or Features */}
                            <motion.div 
                                variants={item}
                                className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8"
                            >
                                {[
                                    { number: "150+", label: "Writers" },
                                    { number: "50K+", label: "Articles" },
                                    { number: "2M+", label: "Readers" }
                                ].map((stat, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="text-2xl font-bold text-[#1a365d]">{stat.number}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}