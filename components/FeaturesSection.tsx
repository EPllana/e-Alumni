import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <motion.div 
        className="bg-white/5 p-8 rounded-2xl shadow-lg ring-1 ring-white/10 backdrop-blur-lg"
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
        }}
        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 30px rgba(78, 213, 245, 0.2)" }}
    >
        <div className="text-cyan-400 mb-4">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const FeaturesSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const features = [
        {
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6m-3-4h.01"></path></svg>,
            title: "Postime dhe Njoftime",
            description: "Qëndroni të informuar me njoftimet më të fundit nga universiteti dhe ndani arritjet tuaja.",
        },
        {
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>,
            title: "Mesazhe në Kohë Reale",
            description: "Komunikoni direkt dhe në mënyrë të sigurt me kolegë dhe miq të vjetër përmes chat-it të integruar.",
        },
        {
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
            title: "Statistikë dhe Menaxhim",
            description: "Për administratorët, ofron statistika të detajuara dhe mjete të fuqishme menaxhimi.",
        },
        {
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
            title: "Rrjetëzim dhe Oferta Pune",
            description: "Zbuloni mundësi të reja karriere dhe zgjeroni rrjetin tuaj profesional me alumni të tjerë.",
        }
    ];

    return (
        <section id="features" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white">Funksionalitete Kryesore</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Eksploroni veçoritë që e bëjnë E-Alumni platformën ideale për komunitetin tuaj.</p>
                </div>
                <motion.div 
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;