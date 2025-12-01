import { useState } from 'react';

const WORKER_ENDPOINT = "https://shihe-email.9g2mn5pjrf.workers.dev/";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(WORKER_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert('✅ 諮詢已成功送出！感謝您的聯繫。');
                form.reset();
            } else {
                alert(`❌ 錯誤：無法送出。伺服器狀態碼: ${response.status}`);
            }
        } catch (error) {
            alert('❌ 網路錯誤，無法連線至伺服器。請檢查 Worker 網址。');
            console.error('Fetch error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm text-slate-300 mb-1">公司名稱</label>
                <input
                    type="text"
                    name="company"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
                    placeholder="請輸入公司名稱"
                    required
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm text-slate-300 mb-1">聯絡人</label>
                    <input
                        type="text"
                        name="contactPerson"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
                        placeholder="王小明"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm text-slate-300 mb-1">電話</label>
                    <input
                        type="text"
                        name="phone"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
                        placeholder="0912-345-678"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm text-slate-300 mb-1">需求項目</label>
                <select
                    name="inquiryType"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500 [&>option]:text-slate-900"
                >
                    <option>太陽能/儲能建置</option>
                    <option>機電/空調節能</option>
                    <option>智慧系統整合</option>
                    <option>其他諮詢</option>
                </select>
            </div>

            <div>
                <label className="block text-sm text-slate-300 mb-1">詳細需求 (選填)</label>
                <textarea
                    name="details"
                    rows="3"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
                    placeholder="請簡述您的專案規模、預期目標或任何特殊要求。"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-all mt-4 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? '傳送中...' : '送出諮詢'}
            </button>
        </form>
    );
};

export default ContactForm;
