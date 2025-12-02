import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselData = [
    {
        id: 1,
        image: '/photos/501後_0.jpg',
        title: '標準智慧教室',
        description: '雙層推拉式黑板，兼容傳統板書與現代觸控教學。',
        tag: '軟硬體整合、智慧黑板'
    },
    {
        id: 2,
        image: '/photos/201c.4_0.jpg',
        title: '數位教學核心',
        description: '嵌入式智慧大屏，護眼 4K 顯示 與多媒體教學整合。',
        tag: '4K 護眼、高清顯示'
    },
    {
        id: 3,
        image: '/photos/739005_0_0.jpg',
        title: '大型教學空間',
        description: '雙螢幕同步顯示，確保長距離觀看清晰，提升大型教室互動性。',
        tag: '廣播推播、多媒體播放'
    },
    {
        id: 4,
        image: '/photos/739004_0_0.jpg',
        title: '企業資訊推播',
        description: '辦公室或會議室壁掛應用，可作為即時公告與訊息中心。',
        tag: '集中管理、多群組推播'
    },
    {
        id: 5,
        image: '/photos/357804_0_0.jpg',
        title: '戶外/集會應用',
        description: '移動式腳架與外接 20W 環繞音效，滿足非固定場地需求。',
        tag: '20W 揚聲器、跨網段管理'
    },
    {
        id: 6,
        image: '/photos/739007_0_0.jpg',
        title: '專業培訓場景',
        description: '互動式教學演示，展示紅外線光波 40 點高精準觸控技術。',
        tag: '40 點觸控'
    },
    {
        id: 7,
        image: '/photos/370632_0_0.jpg',
        title: '施工調試現場',
        description: '確保設備平穩，電源線及信號線依照環境整線固定，符合學校需求。',
        tag: '施工服務、現場復原'
    },
    {
        id: 8,
        image: '/photos/S__21225493_0.jpg',
        title: '超大尺寸應用',
        description: '支援 75"、86" 系列，具備 Android 14.0 系統 及多項教學軟體。',
        tag: 'Android 14.0、多功能白板'
    },
    {
        id: 9,
        image: '/photos/739006_0_0.jpg',
        title: '快速移動部署',
        description: '適用於機動性高的教室或補習班，可快速開機使用電子白板等功能。',
        tag: '快速部署、書寫白板'
    },
    {
        id: 10,
        image: '/photos/S__21225494_0.jpg',
        title: '直覺式操作',
        description: '簡單友善的介面設計，支援長按觸控指令和兩指呼叫浮球，方便老師快速上手。',
        tag: '使用者介面、操作體驗'
    }
];

const EducationCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-play every 5 seconds
        return () => clearInterval(interval);
    }, []);

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
