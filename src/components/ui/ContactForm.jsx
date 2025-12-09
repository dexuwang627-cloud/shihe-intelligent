import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

// TODO: Replace these with your actual EmailJS credentials
// You can get these from https://dashboard.emailjs.com/admin
const SERVICE_ID = "service_486b1wq";
const TEMPLATE_ID = "template_jwt8q6u";
const PUBLIC_KEY = "0_3tN7zE5jZmvRXb-";

const ContactForm = () => {
    const { t } = useTranslation();
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
                alert(t('contact_form.alerts.success'));
                form.current.reset();
            } else {
                throw new Error(result.text);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert(`${t('contact_form.alerts.error')}: ${error.text || error.message || 'Error'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm text-slate-300 mb-1">{t('contact_form.company.label')}</label>
                <input
                    type="text"
                    name="company"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
                    placeholder={t('contact_form.company.placeholder')}
                    required
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm text-slate-300 mb-1">{t('contact_form.contact_person.label')}</label>
                    <input
                        type="text"
                        name="contact_person" // Changed to snake_case for common EmailJS templates
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
                        placeholder={t('contact_form.contact_person.placeholder')}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm text-slate-300 mb-1">{t('contact_form.phone.label')}</label>
                    <input
                        type="text"
                        name="phone"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
                        placeholder={t('contact_form.phone.placeholder')}
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm text-slate-300 mb-1">{t('contact_form.inquiry_type.label')}</label>
                <select
                    name="inquiry_type" // Changed to snake_case
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500 [&>option]:text-slate-900"
                >
                    <option value="Solar/Storage">{t('contact_form.inquiry_type.options.solar_storage')}</option>
                    <option value="MEP/HVAC">{t('contact_form.inquiry_type.options.mep_hvac')}</option>
                    <option value="System Integration">{t('contact_form.inquiry_type.options.system_integration')}</option>
                    <option value="Other">{t('contact_form.inquiry_type.options.other')}</option>
                </select>
            </div>

            <div>
                <label className="block text-sm text-slate-300 mb-1">{t('contact_form.details.label')}</label>
                <textarea
                    name="details"
                    rows="3"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
                    placeholder={t('contact_form.details.placeholder')}
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-shiny text-white font-bold py-3 rounded-lg mt-4 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? t('contact_form.submit_btn.sending') : t('contact_form.submit_btn.default')}
            </button>
        </form>
    );
};

export default ContactForm;
