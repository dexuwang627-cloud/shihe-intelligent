
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

/**
 * ParallaxSection Component
 * 
 * A wrapper around React Scroll Parallax Banner to create sections with depth.
 * 
 * @param {string} bgImage - URL of the background image
 * @param {number} strength - Parallax strength (speed of movement), default 20
 * @param {Array} scale - Scale range for the parallax effect, default [1, 1.2]
 * @param {ReactNode} children - Content to be displayed on top of the background
 * @param {string} className - Additional classes for the container
 * @param {string} height - Height of the section, default '600px'
 */
const ParallaxSection = ({
    bgImage,
    strength = 20,
    scale = [1, 1.2],
    children,
    className = "",
    height = "600px"
}) => {
    return (
        <div className={`relative ${className}`} style={{ height }}>
            <ParallaxBanner className="h-full w-full">
                <ParallaxBannerLayer
                    image={bgImage}
                    speed={-strength}
                    scale={scale}
                    className="absolute inset-0 object-cover"
                />
                <ParallaxBannerLayer>
                    <div className="absolute inset-0 flex items-center justify-center">
                        {children}
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </div>
    );
};

export default ParallaxSection;
