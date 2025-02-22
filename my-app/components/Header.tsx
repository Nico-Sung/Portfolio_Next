import Image from "next/image";
import { motion } from "framer-motion";
import handleScroll from "../utils/handleScroll";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 md:py-2 md:px-6 text-white bg-transparent backdrop-blur-md z-[9998]"
        >
            <div className="logo">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="md:w-20 md:h-20"
                />
            </div>
            <nav className="flex space-x-4 md:space-x-6 text-sm md:text-lg items-center">
                <a
                    href="#about-me"
                    onClick={(e) => handleScroll(e, "about-me")}
                    className="hover:text-gray-400 z-50"
                >
                    about me
                </a>
                <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-lg"></div>
                <a
                    href="#projects"
                    onClick={(e) => handleScroll(e, "projects")}
                    className="hover:text-gray-400 z-50"
                >
                    projects
                </a>
                <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-lg"></div>
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "contact")}
                    className="hover:text-gray-400 z-50"
                >
                    contact
                </a>
            </nav>
        </motion.header>
    );
}
