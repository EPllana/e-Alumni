import React from 'react';
// Fix: Import Variants type from framer-motion to resolve typing issues with animation variants.
import { motion, Variants } from 'framer-motion';

const HeroSection: React.FC = () => {
    const handleRegisterClick = () => {
        const targetElement = document.getElementById('how-it-works');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    // Fix: Explicitly type itemVariants with Variants to prevent type inference errors.
    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <section 
            id="about" 
            className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden scroll-mt-20"
        >
            <div className="absolute inset-0 z-0">
                <motion.img
                    src="http://umib.net/wp-content/uploads/2023/03/UIBM-Wide.jpg"
                    alt="University alumni background"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <motion.div 
                className="relative container mx-auto px-6 text-center z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-4xl mx-auto">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
                        variants={itemVariants}
                    >
                        E-Alumni – Hap dyert e rrjetit tënd profesional
                    </motion.h1>
                    <motion.p 
                        className="text-lg md:text-xl text-gray-300 mb-10"
                        variants={itemVariants}
                    >
                        Një platformë digjitale që mundëson rrjetëzim, ndërveprim dhe zhvillim profesional mes alumni dhe universitetit.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                       <motion.button
    onClick={() => window.location.href = "https://e-alumni.vercel.app"}
    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-cyan-500/40"
    whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px rgba(78, 213, 245, 0.6)" }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
    Regjistrohu Tani
</motion.button>

                    </motion.div>
                </div>
                <motion.div className="mt-16" variants={itemVariants}>
                    <div className="relative mx-auto border-4 border-gray-700 rounded-xl shadow-2xl bg-black/20 backdrop-blur-md" style={{maxWidth: '1000px'}}>
                        <img 
                            src="http://umib.net/wp-content/uploads/2022/09/DSC06262-scaled.jpg" 
                            alt="E-Alumni Platform Showcase" 
                            className="rounded-lg opacity-80"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;