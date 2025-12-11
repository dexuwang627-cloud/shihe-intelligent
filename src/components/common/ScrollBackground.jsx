import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollBackground = () => {
    const { scrollYProgress } = useScroll();

    // Opacity transforms for each layer
    // We stack layers on top of each other and fade them in/out
    // Base layer is always visible (Layer 0)

    // Layer 1: White -> Green Tint (Starts fading in at 0.1, fully visible at 0.25)
    const layer1Opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

    // Layer 2: Green Tint -> Orange Tint (Starts fading in at 0.35, fully visible at 0.5)
    const layer2Opacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

    // Layer 3: Orange Tint -> Light Slate (Starts fading in at 0.65, fully visible at 0.8)
    const layer3Opacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

    // Layer 4: Light Slate -> Slate 50 (Starts fading in at 0.85, fully visible at 0.95)
    const layer4Opacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

    const layers = [
        {
            // Base Layer: Slate 50 (Hero)
            bg: "linear-gradient(to bottom, #f8fafc, #f8fafc)",
            opacity: 1 // Always visible at the bottom of the stack
        },
        {
            // Layer 1: White -> Green Tint
            bg: "linear-gradient(to bottom, #ffffff, #f0fdf4)",
            opacity: layer1Opacity
        },
        {
            // Layer 2: Green Tint -> Orange Tint
            bg: "linear-gradient(to bottom, #f0fdf4, #fff7ed)",
            opacity: layer2Opacity
        },
        {
            // Layer 3: Orange Tint -> Light Slate
            bg: "linear-gradient(to bottom, #fff7ed, #f1f5f9)",
            opacity: layer3Opacity
        },
        {
            // Layer 4: Light Slate -> Slate 50
            bg: "linear-gradient(to bottom, #f1f5f9, #f8fafc)",
            opacity: layer4Opacity
        }
    ];

    return (
        <>
            {layers.map((layer, index) => (
                <motion.div
                    key={index}
                    className="fixed inset-0 z-0 pointer-events-none"
                    style={{
                        background: layer.bg,
                        opacity: layer.opacity
                    }}
                />
            ))}
        </>
    );
};

export default ScrollBackground;
