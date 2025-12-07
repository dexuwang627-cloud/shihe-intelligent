import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is a hash (e.g. #about), try to scroll to it
        if (hash) {
            // Small timeout to ensure DOM elements are rendered/transitions finished
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // 100ms delay to mitigate stutter/race condition
            return () => clearTimeout(timer);
        } else {
            // No hash, standard scroll to top
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
