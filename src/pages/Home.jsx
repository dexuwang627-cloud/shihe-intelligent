import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, CheckCircle2, Sun, Zap, Sprout, Cpu, BarChart3, ArrowRight, Battery, Shield, Leaf, Award, Users, Globe, Wind } from 'lucide-react';
import { motion } from 'framer-motion';
import React, { lazy, Suspense } from 'react';
import HeroCarousel from '../components/ui/HeroCarousel';
import ContactForm from '../components/ui/ContactForm';
import SEO from '../components/common/SEO';
import FadeIn from '../components/common/FadeIn';
// import TechScene from '../components/three/TechScene';
import TextReveal from '../components/common/TextReveal';
import ParallaxSection from '../components/common/ParallaxSection';
import CountUp from '../components/common/CountUp';
import LazyLoad from '../components/common/LazyLoad';

import { useTranslation, Trans } from 'react-i18next';

const TechScene = lazy(() => import('../components/three/TechScene'));

const Home = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div id="page-home" className="page-section">
            <SEO
                title={t('home.seo.title')}
                description={t('home.seo.description')}
            />

            {/* Hidden H1 for SEO structure, as the visual hero title is in the carousel */}
            <h1 className="sr-only">{t('home.hero.hidden_title')}</h1>
            <HeroCarousel />

            <section id="about" className="py-20 relative overflow-hidden">
                {/* Subtle Mesh Gradient Background */}
                <div className="absolute inset-0 bg-white z-0"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50/40 rounded-full blur-3xl -z-0 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl -z-0 opacity-60"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right">
                            <div className="relative mb-8">
                                <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-xl relative">
                                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                        <Building2 className="w-16 h-16" />
                                    </div>
                                    <img
                                        src="/photos/award1.webp"
                                        alt="Award"
                                        className="absolute inset-0 w-full h-full object-cover object-top"
                                        loading="lazy"
                                        width="800"
                                        height="450"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                            <ShieldCheck className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">{t('home.about.exp_label')}</p>
                                            <p className="text-2xl font-bold text-slate-800">
                                                <CountUp to={17} suffix={`+ ${t('home.about.exp_years')}`} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl shadow-sm">
                                <p className="text-green-800 font-bold text-lg mb-1">{t('home.about.award_title')}</p>
                                <p className="text-green-700">{t('home.about.award_desc')}</p>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2}>
                            <div>
                                <TextReveal text={t('home.about.reveal_text')} className="text-green-600 font-bold tracking-wide uppercase mb-2 block" />
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6" dangerouslySetInnerHTML={{ __html: t('home.about.title') }}></h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {t('home.about.p1')}
                                </p>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {t('home.about.p2')}
                                </p>
                                <motion.ul
                                    className="space-y-4 mb-8"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                >
                                    {(t('home.about.list', { returnObjects: true }) || []).map((item, index) => (
                                        <motion.li key={index} className="flex items-start gap-3" variants={itemVariants}>
                                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1 w-5 h-5" />
                                            <span className="text-slate-700">{item}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-8">{t('home.about.tech_title')}</h3>
                                <motion.ul
                                    className="space-y-4"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                >
                                    {(t('home.about.tech_list', { returnObjects: true }) || []).map((item, index) => {
                                        const Icon = index === 0 ? ShieldCheck : index === 1 ? CheckCircle2 : Building2;
                                        return (
                                            <motion.li key={index} className="flex items-start gap-3" variants={itemVariants}>
                                                <Icon className="text-green-500 flex-shrink-0 mt-1 w-5 h-5" />
                                                <span className="text-slate-700">{item}</span>
                                            </motion.li>
                                        );
                                    })}
                                </motion.ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section id="services" className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <FadeIn direction="right" className="md:w-1/2">
                            <TextReveal text={t('home.services.reveal_text')} className="text-green-600 font-bold tracking-wide uppercase mb-2 block" />
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t('home.services.title')}</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                {t('home.services.description')}
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                        <Sun className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800">{t('home.services.items.green')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800">{t('home.services.items.mep')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800">{t('home.services.items.ems')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                                        <Sprout className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800">{t('home.services.items.smart')}</span>
                                </div>
                            </div>

                            <Link to="/services" className="inline-flex items-center gap-2 btn-shiny text-white px-8 py-4 rounded-full font-bold shadow-lg">
                                {t('home.services.cta')} <ArrowRight className="w-5 h-5" />
                            </Link>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2} className="md:w-1/2 relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop"
                                    alt="Services"
                                    className="w-full h-full object-cover"
                                    width="800"
                                    height="800"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video bg-orange-500 rounded-2xl -z-0"></div>
                            <div className="absolute -top-6 -right-6 w-2/3 aspect-video bg-green-500 rounded-2xl -z-0"></div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                            <div>
                                <TextReveal text={t('home.projects.reveal_text')} className="text-green-600 font-bold tracking-wide uppercase mb-2 block" />
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('home.projects.title')}</h2>
                            </div>
                            <Link to="/projects" className="text-orange-500 font-medium hover:text-orange-600 flex items-center gap-1 transition-colors">
                                {t('home.projects.cta_more')} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FadeIn delay={0.1}>
                            <Link to="/project-detail?id=yanghwa" className="group cursor-pointer">
                                <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
                                    <img src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2670&auto=format&fit=crop" alt="Yanghwa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="800" height="600" loading="lazy" />
                                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">{t('home.projects.cases.yanghwa.tag')}</div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{t('home.projects.cases.yanghwa.title')}</h3>
                                <p className="text-slate-600 text-sm">{t('home.projects.cases.yanghwa.desc')}</p>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <Link to="/project-detail?id=taipeidome" className="group cursor-pointer">
                                <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
                                    <img src="/photos/egg.jpg" alt="Taipei Dome" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="800" height="600" loading="lazy" />
                                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">{t('home.projects.cases.taipeidome.tag')}</div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{t('home.projects.cases.taipeidome.title')}</h3>
                                <p className="text-slate-600 text-sm">{t('home.projects.cases.taipeidome.desc')}</p>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <Link to="/project-detail?id=smartfarm" className="group cursor-pointer">
                                <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
                                    <img src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2532&auto=format&fit=crop" alt="Smart Farm" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="800" height="600" loading="lazy" />
                                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">{t('home.projects.cases.smartfarm.tag')}</div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{t('home.projects.cases.smartfarm.title')}</h3>
                                <p className="text-slate-600 text-sm">{t('home.projects.cases.smartfarm.desc')}</p>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden pt-32">
                {/* Wave Divider */}
                <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-[calc(100%_+_1.3px)] fill-white">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
                {/* 3D Background */}
                <div className="absolute inset-0 z-0">
                    <LazyLoad>
                        <Suspense fallback={<div className="w-full h-full bg-slate-900" />}>
                            <TechScene className="w-full h-full opacity-60" />
                        </Suspense>
                    </LazyLoad>
                </div>

                {/* Background Image Overlay - kept low opacity as a texture */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-0 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right">
                            <div className="text-green-400 font-bold tracking-wide uppercase mb-2 text-lg">{t('home.why_us.subtitle')}</div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('home.why_us.title') }}></h2>
                            <motion.div
                                className="space-y-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {(t('home.why_us.reasons', { returnObjects: true }) || []).map((reason, index) => {
                                    const Icon = index === 0 ? Battery : index === 1 ? BarChart3 : ShieldCheck;
                                    return (
                                        <motion.div key={index} className="flex gap-4" variants={itemVariants}>
                                            <div className="bg-white/10 p-3 rounded-lg h-fit shadow-lg shadow-green-500/10 backdrop-blur-sm border border-white/10">
                                                <Icon className="text-orange-400 w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 text-white">{reason.title}</h3>
                                                <p className="text-slate-300 text-sm" dangerouslySetInnerHTML={{ __html: reason.desc }}></p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2} className="relative">
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl skew-y-1 scale-[1.02] transform transition-transform hover:scale-[1.03]"></div>
                            <div className="relative bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                                <h2 className="text-2xl font-bold mb-6 text-center">{t('home.why_us.form_title')}</h2>
                                <ContactForm />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
