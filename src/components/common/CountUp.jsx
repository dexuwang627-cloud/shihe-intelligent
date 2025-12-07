import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const CountUp = ({ to, duration = 2, className = "", suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
    const displayValue = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(to);
        }
    }, [isInView, to, spring]);

    return (
        <span ref={ref} className={className}>
            <motion.span>{displayValue}</motion.span>{suffix}
        </span>
    );
};

export default CountUp;
