
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * TextReveal Component
 * 
 * Animates text character by character or word by word when it comes into view.
 * 
 * @param {string} text - The text to animate
 * @param {string} className - CSS classes for styling the text
 * @param {string} type - 'char' (default) or 'word' splitting
 * @param {number} delay - Initial delay before animation starts
 */
const TextReveal = ({ text, className = "", type = 'char', delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    if (type === 'word') {
        const words = text.split(" ");
        return (
            <motion.div
                ref={ref}
                style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={className}
            >
                {words.map((word, index) => (
                    <motion.span variants={child} key={index}>
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    }

    // Character split
    const letters = Array.from(text);
    return (
        <motion.div
            ref={ref}
            style={{ display: "inline-block", overflow: "hidden" }} // inline-block to keep sentences together
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} style={{ display: "inline-block", whiteSpace: "pre" }}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TextReveal;
