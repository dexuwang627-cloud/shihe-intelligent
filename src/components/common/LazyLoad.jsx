import { useState, useEffect, useRef } from 'react';

const LazyLoad = ({ children, threshold = 0.1, rootMargin = "100px" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return (
        <div ref={ref} className="w-full h-full">
            {isVisible ? children : null}
        </div>
    );
};

export default LazyLoad;
