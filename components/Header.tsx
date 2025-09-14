import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Ballina' },
    { href: '#features', label: 'Shërbimet' },
    { href: '#contact', label: 'Kontakti' },
  ];

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <motion.header 
      id="home" 
      className="bg-black/30 backdrop-blur-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
           <span className="text-2xl font-bold text-white">E-Alumni</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
              {link.label}
            </a>
          ))}
           <a href="#how-it-works" onClick={(e) => handleScrollTo(e, '#how-it-works')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Hyr/Regjistrohu</a>
        </nav>
        <div className="hidden md:block">
           <motion.button 
    onClick={() => window.location.href = "https://e-alumni.vercel.app"} 
    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg shadow-cyan-500/30"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
>
    Regjistrohu
</motion.button>

        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 px-6 pb-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <a href="#how-it-works" onClick={(e) => handleScrollTo(e, '#how-it-works')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Login/Register</a>
          <motion.button 
    onClick={() => window.location.href = "https://e-alumni.vercel.app"} 
    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg shadow-cyan-500/30 mt-4"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
>
    Regjistrohu
</motion.button>

          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;