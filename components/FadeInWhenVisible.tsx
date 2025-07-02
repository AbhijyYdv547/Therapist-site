"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    const { ref, inView } = useInView({ threshold: 0.1 }); // removed triggerOnce

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
