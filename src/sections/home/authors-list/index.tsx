'use client'
import { ROLES_MAP } from "@/constants"
import { useGetUsers } from "@/services/user.service"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { Users, ExternalLink } from "lucide-react"

export default function AuthorsListSection() {
    const {
        users: authors,
    } = useGetUsers({
        shouldFetch: true,
        role: 'content_writer'
    })

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    const socialIcons = [
        { icon: "mingcute:facebook-line", color: "#1877F2", label: "Facebook" },
        { icon: "uil:instagram", color: "#E4405F", label: "Instagram" },
        { icon: "ri:twitter-line", color: "#1DA1F2", label: "Twitter" },
        { icon: "mingcute:linkedin-line", color: "#0A66C2", label: "LinkedIn" }
    ]

    return (        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,hsl(var(--background))_0%,hsl(var(--muted))_50%,hsl(var(--background))_100%)]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:14px_24px] opacity-30" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-12"
                >                    {/* Section Header */}
                    <motion.div variants={item} className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 ring-1 ring-primary/20">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="text-sm font-semibold text-primary">OUR AUTHORS</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
                                Meet Our Expert Writers
                            </span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our talented team of content creators brings diverse perspectives and deep expertise to every story
                        </p>
                    </motion.div>

                    {/* Authors Grid */}
                    <motion.div 
                        variants={container}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        {authors.map((author: any, index: number) => (                            <motion.div
                                key={author.id || index}
                                variants={item}
                                className="group relative"
                            >
                                <div className="relative flex flex-col items-center p-8 rounded-2xl bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/40 hover:border-primary/20">
                                    {/* Author Image */}
                                    <div className="relative mb-4">
                                        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-background shadow-lg">
                                            <img 
                                                src={"/Images/author_1.jpg"} 
                                                alt={author.name} 
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/0 to-primary/20 group-hover:to-primary/30 transition-all duration-300" />
                                    </div>

                                    {/* Author Info */}
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {author.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {ROLES_MAP[author.role as keyof typeof ROLES_MAP].label}
                                    </p>

                                    {/* Social Links */}
                                    <div className="flex items-center gap-3 mt-6">
                                        {socialIcons.map((social, idx) => (
                                            <motion.a
                                                key={idx}
                                                href="#"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-2 rounded-full bg-muted/50 hover:bg-card hover:shadow-md transition-all duration-300"
                                            >
                                                <Icon 
                                                    icon={social.icon} 
                                                    className="w-5 h-5"
                                                    style={{ color: social.color }}
                                                />
                                            </motion.a>
                                        ))}
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 rounded-2xl transition-all duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}