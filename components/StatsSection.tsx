import React, { useState, useEffect, useRef } from 'react';
// Fix: Import Variants type from framer-motion to resolve typing issues with animation variants.
import { motion, useInView, Variants } from 'framer-motion';

const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const startTime = Date.now();
            
            const step = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const currentCount = Math.floor(progress * end);
                
                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                   setCount(end);
                }
            };
            requestAnimationFrame(step);
        }
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className="text-5xl font-extrabold text-white">
            {count}{suffix}
        </span>
    );
};

const StatsSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.4 }
        }
    };
    
    // Fix: Explicitly type itemVariants with Variants to prevent type inference errors.
    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { type: 'spring' } }
    };

    return (
        <motion.section 
            ref={ref}
            className="py-20 bg-transparent"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center items-center">
                    <motion.div variants={itemVariants}>
                        <blockquote className="text-xl italic text-gray-300">
                            "E-Alumni ka ndihmuar në rigjallërimin e lidhjeve mes alumnëve dhe krijimin e mundësive të reja profesionale"
                        </blockquote>
                        <p className="mt-4 font-semibold text-cyan-400">- Alumni aktiv</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8">
                         <div className="flex flex-col items-center justify-center">
                             <AnimatedCounter end={50} suffix="+" />
                             <p className="text-gray-400 mt-2">Alumni Aktivë / Javë</p>
                         </div>
                         <div className="flex flex-col items-center justify-center">
                             <AnimatedCounter end={100} suffix="+" />
                             <p className="text-gray-400 mt-2">Mesazhe / Ditë</p>
                         </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default StatsSection;