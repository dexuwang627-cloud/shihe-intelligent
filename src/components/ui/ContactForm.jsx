import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// TODO: Replace these with your actual EmailJS credentials
// You can get these from https://dashboard.emailjs.com/admin
const SERVICE_ID = "service_486b1wq";
const TEMPLATE_ID = "template_jwt8q6u";
const PUBLIC_KEY = "0_3tN7zE5jZmvRXb-";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                PUBLIC_KEY
            );

            if (result.text === 'OK') {
                alert('✅ 諮詢已成功送出！感謝您的聯繫。');
                form.current.reset();
            } else {
                throw new Error(result.text);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert(`❌ 發送失敗: ${error.text || error.message || '未知錯誤'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
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
                        name="contact_person" // Changed to snake_case for common EmailJS templates
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
                    name="inquiry_type" // Changed to snake_case
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
