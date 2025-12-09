import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroCarousel = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const carouselData = [
        {
            subtitle: t('home.carousel.0.subtitle'),
            title: t('home.carousel.0.title'),
            link: "/project-detail?id=smartfarm",
            linkText: t('home.carousel.0.linkText'),
            image: "/photos/carousel-1.jpg"
        },
        {
            subtitle: t('home.carousel.1.subtitle'),
            title: t('home.carousel.1.title'),
            link: "/services#service-mep",
            linkText: t('home.carousel.1.linkText'),
            image: "/photos/carousel-2.jpg"
        },
        {
            subtitle: t('home.carousel.2.subtitle'),
            title: t('home.carousel.2.title'),
            link: "/services#service-ems",
            linkText: t('home.carousel.2.linkText'),
            image: "/photos/carousel-3.jpg"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselData.length);
            setIsAnimating(false);
        }, 400); // Wait for fade out
    };

    const handleDotClick = (index) => {
        if (index === currentIndex) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(false);
        }, 400);
    };

    const currentData = carouselData[currentIndex];

    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Images */}
            <div className="absolute inset-0">
                {carouselData.map((data, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img
                            src={data.image}
                            alt={data.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            fetchPriority={index === 0 ? "high" : "auto"}
                            loading={index === 0 ? "eager" : "lazy"}
                            width="1920"
                            height="1080"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 bg-slate-900/70"></div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50 w-2'
                            }`}
                        aria-label={`Switch to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 pt-[100px] text-center md:text-left md:pt-40">
                <div className={`max-w-4xl mx-auto carousel-content-wrapper ${isAnimating ? 'text-fade-out' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-6 backdrop-blur-sm">
                        <Leaf className="w-4 h-4" />
                        <span>{currentData.subtitle}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {currentData.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to={currentData.link}
                            className="px-8 py-4 btn-shiny text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            {currentData.linkText} <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                        >
                            {t('home.hero.cta_consult')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;
