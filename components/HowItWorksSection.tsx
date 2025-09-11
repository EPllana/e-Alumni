import React, { useRef } from 'react';
// Fix: Import Variants type from framer-motion to resolve typing issues with animation variants.
import { motion, useInView, Variants } from 'framer-motion';

const Step: React.FC<{ number: string; title: string; description: string; direction: 'left' | 'right' }> = ({ number, title, description, direction }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // Fix: Explicitly type variants with Variants to prevent type inference errors.
    const variants: Variants = {
        hidden: { 
            opacity: 0, 
            x: direction === 'left' ? -100 : 100 
        },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { type: 'spring', stiffness: 50, delay: 0.2 }
        }
    };

    return (
        <motion.div 
            ref={ref}
            className="flex items-start space-x-6"
            variants={variants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-3xl font-bold rounded-full shadow-lg">
                {number}
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </motion.div>
    );
};

const HowItWorksSection: React.FC = () => {
    return (
        <section id="how-it-works" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white">Si Funksionon?</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Ndiqni këta hapa të thjeshtë për t'u bërë pjesë e komunitetit tonë.</p>
                </div>
                <div className="max-w-4xl mx-auto space-y-12">
                   <Step 
                       number="1"
                       title="Regjistrohu dhe Verifiko"
                       description="Krijoni llogarinë tuaj në pak minuta dhe verifikoni email-in për të siguruar profilin tuaj."
                       direction="left"
                   />
                   <Step 
                       number="2"
                       title="Plotëso Profilin"
                       description="Ndani aftësitë, përvojat tuaja profesionale dhe interesat për të krijuar lidhje kuptimplota."
                       direction="right"
                   />
                   <Step 
                       number="3"
                       title="Lidhu dhe Merr Pjesë"
                       description="Eksploroni rrjetin, lidhuni me alumni të tjerë dhe merrni pjesë në ngjarje ekskluzive."
                       direction="left"
                   />
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;