
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Link
                to={service.link}
                className={`block h-full relative rounded-2xl bg-white p-8 border border-slate-200 shadow-sm transition-all duration-300 group overflow-hidden`}
                style={{
                    transform: "translateZ(0)", // Hardware acceleration
                }}
            >
                {/* Gradient Background on Hover */}
                <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} -z-10`}
                />

                {/* Content */}
                <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                    <div className="mb-6 inline-block p-3 rounded-xl bg-slate-50 group-hover:bg-white/20 transition-colors duration-300 shadow-sm">
                        {React.cloneElement(service.icon, {
                            className: `w-8 h-8 ${service.iconColor} group-hover:text-white transition-colors duration-300`
                        })}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">
                        {service.title}
                    </h3>

                    <p className="text-slate-600 mb-8 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {service.description}
                    </p>

                    <div className={`flex items-center gap-2 font-bold ${service.btnColor} group-hover:text-white transition-colors duration-300`}>
                        了解更多
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
