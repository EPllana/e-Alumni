import React from 'react';
import { FaInstagram } from 'react-icons/fa';


const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transform transition-transform duration-300 hover:scale-125">
        {children}
    </a>
);

const ContactItem: React.FC<{ icon: React.ReactNode; text: string; href?: string }> = ({ icon, text, href }) => {
    const content = (
        <div className="flex items-start space-x-3">
            <span className="mt-1 flex-shrink-0 text-cyan-400">{icon}</span>
            <span className="text-gray-400">{text}</span>
        </div>
    );

    const Wrapper = href ? 'a' : 'div';
    const props = href ? { href, className: "hover:text-white transition-colors" } : {};

    return <Wrapper {...props}>{content}</Wrapper>;
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/20 border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    
                    {/* Column 1: About E-Alumni */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center space-x-2 mb-4">
                            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span className="text-2xl font-bold text-white">E-Alumni</span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Platforma juaj digjitale për të rilidhur të kaluarën me të ardhmen e universitetit.
                        </p>
                    </div>

                    {/* Column 2: Social Media */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold text-white mb-4">Rrjeti Ynë</h3>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <SocialIcon href="https://www.linkedin.com/school/uibm/">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="https://www.facebook.com/uibm02">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="https://www.instagram.com/uibm_net/">
                               <svg className="w-6 h-6 text-gray-400 hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.75 2h8.5C19.217 2 22 4.783 22 7.75v8.5C22 19.217 19.217 22 16.25 22h-8.5C4.783 22 2 19.217 2 16.25v-8.5C2 4.783 4.783 2 7.75 2zm4.25 5.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm4.5-.75a1 1 0 11-2 0 1 1 0 012 0z"/>
</svg>

                            </SocialIcon>
                        </div>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Na Kontaktoni</h3>
                        <div className="space-y-4">
                             <ContactItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>}
                                text="Universiteti “Isa Boletini”, Rr. Ukshin Kovaçica, 40000 Mitrovicë, Republika e Kosovës"
                            />
                             <ContactItem 
                                href="tel:+38328515516"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>}
                                text="+383 28 515 516"
                            />
                            <ContactItem 
                                href="mailto:info@umib.net"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>}
                                text="info@umib.net"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright only */}
                <div className="mt-10 pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-500">&copy; 2025 E-Alumni. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
