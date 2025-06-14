'use client'
import { Icon } from "@iconify/react"
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, ArrowRight } from "lucide-react";


export function Footer() {
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

    const socialIcons = [
        { icon: "mingcute:facebook-line", color: "#1877F2", label: "Facebook" },
        { icon: "uil:instagram", color: "#E4405F", label: "Instagram" },
        { icon: "ri:twitter-line", color: "#1DA1F2", label: "Twitter" },
        { icon: "mingcute:linkedin-line", color: "#0A66C2", label: "LinkedIn" }
    ];

    return (
        <footer id="subscribe" className="relative w-full bg-[#1a365d]/5">
            {/* Newsletter Section */}
            <div className="absolute inset-x-0 -top-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#1a365d] to-[#2d3748] shadow-xl overflow-hidden"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-white space-y-4 max-w-xl">
                                <h3 className="text-2xl md:text-3xl font-bold">Subscribe to our newsletter</h3>
                                <p className="text-white/80">Get the latest updates and news delivered to your inbox.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <div className="relative group flex-1 md:w-80">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a365d] rounded-full hover:bg-white/90 transition-all duration-300"
                                >
                                    <span>Subscribe</span>
                                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-8">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                >
                    {/* Brand Section */}
                    <motion.div variants={item} className="space-y-6">
                        <Link href="/" className="block">
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                <img src="/logo/logo.png" alt="logo" className="w-full h-full object-cover" />
                            </div>
                        </Link>
                        <p className="text-gray-600">
                            Join our community of writers and readers, where knowledge flows freely and creativity thrives.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={item} className="space-y-6">
                        <h4 className="text-lg font-semibold text-[#1a365d]">Quick Links</h4>
                        <nav className="flex flex-col space-y-3">
                            {['Home', 'Gists', 'About Us', 'Contact Us'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-gray-600 hover:text-[#1a365d] transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={item} className="space-y-6">
                        <h4 className="text-lg font-semibold text-[#1a365d]">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-gray-600">
                                <MapPin className="w-5 h-5 mt-1 text-[#1a365d]" />
                                <span>Finstreet 118, 2561 Fintown</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Mail className="w-5 h-5 text-[#1a365d]" />
                                <span>hello@finsweet.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Phone className="w-5 h-5 text-[#1a365d]" />
                                <span>020 7993 2905</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={item} className="space-y-6">
                        <h4 className="text-lg font-semibold text-[#1a365d]">Follow Us</h4>
                        <div className="flex items-center gap-4">
                            {socialIcons.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-full hover:bg-white/80 transition-colors duration-300"
                                >
                                    <Icon
                                        icon={social.icon}
                                        className="w-6 h-6"
                                        style={{ color: social.color }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    className="mt-16 pt-8 border-t border-gray-200"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                        <p>© 2025 The Periodical. All rights reserved.</p>
                        <div className="flex items-center gap-8">
                            <Link href="#" className="hover:text-[#1a365d] transition-colors duration-300">Privacy Policy</Link>
                            <Link href="#" className="hover:text-[#1a365d] transition-colors duration-300">Terms of Service</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}