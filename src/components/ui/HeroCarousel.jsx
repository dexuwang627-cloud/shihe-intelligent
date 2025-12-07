import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';

const carouselData = [
    {
        subtitle: "智慧農業 | 科技種植",
        title: "AI 精準環控與澆灌，提升作物產量 20%",
        link: "/project-detail?id=smartfarm",
        linkText: "查看智慧農業案例",
        image: "/photos/carousel-1.jpg"
    },
    {
        subtitle: "淨零轉型 | 節能優化",
        title: "AI 智慧節能系統，降低營運成本 30% 以上",
        link: "/services#service-mep",
        linkText: "探索節能方案",
        image: "/photos/carousel-2.jpg"
    },
    {
        subtitle: "能源數據 | 數位核心",
        title: "獨家 EMS 系統，精準預測需量，杜絕超約罰款",
        link: "/services#service-ems",
        linkText: "了解 EMS 技術",
        image: "/photos/carousel-3.jpg"
    }
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

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
                        style={{
                            backgroundImage: `url('${data.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
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
                        aria-label={`Go to slide ${index + 1}`}
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
                            預約免費諮詢
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;
