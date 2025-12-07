
import { motion } from 'framer-motion';

const FadeIn = ({
    children,
    direction = 'up',
    delay = 0,
    className = "",
    once = true,
    viewport // Allow overriding viewport settings
}) => {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 }
    };

    const initial = {
        opacity: 0,
        ...directions[direction]
    };

    const animate = {
        opacity: 1,
        y: 0,
        x: 0
    };

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            viewport={viewport || { once: once, margin: "-50px" }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
