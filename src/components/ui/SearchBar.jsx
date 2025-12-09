import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, TrendingUp, History } from 'lucide-react';

const SEARCH_DATA = [
    { keyword: '太陽能', url: '/services/green-energy', category: '綠能光儲' },
    { keyword: '儲能系統', url: '/services/green-energy', category: '綠能光儲' },
    { keyword: '微電網', url: '/services/green-energy', category: '綠能光儲' },
    { keyword: '風光互補', url: '/services/green-energy', category: '綠能光儲' },
    { keyword: '機電工程', url: '/services/mep-engineering', category: '機電節能' },
    { keyword: '空調節能', url: '/services/mep-engineering', category: '機電節能' },
    { keyword: '儲冰系統', url: '/services/mep-engineering', category: '機電節能' },
    { keyword: '廢熱回收', url: '/services/mep-engineering', category: '機電節能' },
    { keyword: 'EMS', url: '/services/ems', category: '能源管理' },
    { keyword: '能源管理', url: '/services/ems', category: '能源管理' },
    { keyword: '需量預測', url: '/services/ems', category: '能源管理' },
    { keyword: '碳盤查', url: '/services/consulting', category: '顧問服務' },
    { keyword: '碳足跡', url: '/services/consulting', category: '顧問服務' },
    { keyword: '政府補助', url: '/services/consulting', category: '顧問服務' },
    { keyword: '智慧農業', url: '/services/smart-agriculture', category: '智慧應用' },
    { keyword: '智慧溫室', url: '/services/smart-agriculture', category: '智慧應用' },
    { keyword: '長照監測', url: '/services/smart-agriculture', category: '智慧應用' },
    { keyword: '智慧教育', url: '/services/smart-education', category: '智慧校園' },
    { keyword: '智慧黑板', url: '/services/smart-education', category: '智慧校園' },
    { keyword: '互動教學', url: '/services/smart-education', category: '智慧校園' },
    { keyword: '鑫浩瀚', url: '/services/mep-engineering', category: '機電工程' },
    { keyword: '鑫浩瀚企業', url: '/services/mep-engineering', category: '機電工程' },
    { keyword: '工程', url: '/services/mep-engineering', category: '機電工程' },
];

const POPULAR_SEARCHES = [
    { keyword: '太陽能', url: '/services/green-energy', category: '熱門' },
    { keyword: '政府補助', url: '/services/consulting', category: '熱門' },
    { keyword: 'EMS', url: '/services/ems', category: '熱門' },
    { keyword: '智慧農業', url: '/services/smart-agriculture', category: '熱門' },
];

const SearchBar = ({ className = "" }) => {
    const [query, setQuery] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsExpanded(false);
                setQuery('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (query.trim() === '') {
            setSuggestions(POPULAR_SEARCHES);
            return;
        }

        const filtered = SEARCH_DATA.filter(item =>
            item.keyword.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered.slice(0, 6));
    }, [query]);

    const handleSelect = (url) => {
        navigate(url);
        setIsExpanded(false);
        setQuery('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (suggestions.length > 0) {
            handleSelect(suggestions[0].url);
        }
    };

    const toggleSearch = () => {
        setIsExpanded(true);
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    return (
        <div ref={wrapperRef} className={`relative transition-all duration-300 ease-in-out ${isExpanded ? 'w-64 md:w-80' : 'w-10'} ${className}`}>
            {/* Collapsed State (Icon) */}
            <button
                type="button"
                className={`absolute right-0 top-0 h-10 w-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-800 transition-all ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                onClick={toggleSearch}
                aria-label="開啟搜尋"
            >
                <Search className="w-5 h-5 text-slate-200 hover:text-orange-400 transition-colors" />
            </button>

            {/* Expanded State (Input) */}
            <form
                onSubmit={handleSubmit}
                className={`relative transition-all duration-300 ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
            >
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="搜尋服務..."
                    className="w-full bg-slate-800 text-white placeholder-slate-400 border border-slate-600 rounded-full py-2 pl-10 pr-10 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-sm shadow-lg"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <button
                    type="button"
                    onClick={() => { setQuery(''); setIsExpanded(false); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                    aria-label="清除搜尋並關閉"
                >
                    <X className="w-3 h-3" />
                </button>
            </form>

            {/* Suggestions Dropdown */}
            {isExpanded && (
                <div className="absolute top-full left-0 w-full mt-3 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-2">
                        <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            {query ? <Search className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                            {query ? '搜尋結果' : '熱門搜尋'}
                        </div>
                        {suggestions.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelect(item.url)}
                                className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center justify-between group transition-colors border-b border-slate-50 last:border-0"
                            >
                                <span className="text-slate-700 font-medium group-hover:text-green-600 flex items-center gap-2">
                                    {!query && <History className="w-3 h-3 text-slate-300" />}
                                    {item.keyword}
                                </span>
                                {item.category !== '熱門' && (
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 group-hover:bg-green-100 group-hover:text-green-600">
                                        {item.category}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
