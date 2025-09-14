import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BriefcaseIcon ,ChatAlt2Icon} from '@heroicons/react/outline';



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
    // Rrjetëzim Profesional → ikonë rrjeti
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 4v16m8-8H4m13.656-5.656L6.344 18.344m0-12.688l11.312 11.312" />
      </svg>
    ),
    title: "Rrjetëzim Profesional",
    description: "Lidhu me ish-studentë dhe profesionistë të fushës për të krijuar lidhje të vlefshme.",
  },
  {
  icon: <BriefcaseIcon className="w-12 h-12 text-blue-500" />,
  title: "Mundësi të Reja",
  description: "Zbulo oferta pune, internship-e dhe projekte bashkëpunimi brenda komunitetit.",
},
 {
  icon: <ChatAlt2Icon className="w-12 h-12 text-green-500" />,
  title: "Ndërveprim dhe Mbështetje",
  description: "Ndaj përvoja, merr këshilla dhe mbështetje nga alumni të tjerë.",
},
  {
    // Komunikim në Kohë Reale → ikonë mesazhi / chat real-time
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v7a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    title: "Komunikim në Kohë Reale",
    description: "Bisedo dhe bashkëpuno direkt me anëtarët përmes mesazheve private.",
  }
];


    return (
        <section id="features" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white">Çfarë mund të ofrojë E-Alumni për ju?</h2>
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