import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EducationCarousel = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselData = t('smart_education.carousel.slides', { returnObjects: true }).map((slide, index) => ({
        ...slide,
        id: index + 1,
        // We need to map the image paths manually or ensure they are present in the translation if you want them dynamic. 
        // For now, I will assume images are static and map them by index.
        image: [
            '/photos/501後_0.jpg',
            '/photos/201c.4_0.jpg',
            '/photos/739005_0_0.jpg',
            '/photos/739004_0_0.jpg',
            '/photos/357804_0_0.jpg',
            '/photos/739007_0_0.jpg',
            '/photos/370632_0_0.jpg',
            '/photos/S__21225493_0.jpg',
            '/photos/739006_0_0.jpg',
            '/photos/S__21225494_0.jpg'
        ][index]
    }));

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-play every 5 seconds
        return () => clearInterval(interval);
    }, [carouselData.length]);

    return (
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl bg-slate-900 group">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselData.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0 relative aspect-video">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-contain bg-black"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 md:p-8 text-white">
                            <div className="max-w-3xl">
                                <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                                    {slide.tag}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                                <p className="text-slate-200 text-sm md:text-base">{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 right-4 flex gap-2">
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-green-500 w-6' : 'bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default EducationCarousel;
