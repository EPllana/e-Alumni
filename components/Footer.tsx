import React from 'react';

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
                        <h3 className="text-lg font-semibold text-white mb-4">Na Ndiqni</h3>
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
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.333 7.834c-.183.05-.37.076-.56.076-1.58 0-2.86-1.28-2.86-2.86 0-.19.026-.376.076-.56.407-.037.822-.05 1.244-.05s.837.013 1.244.05c.05.184.076.37.076.56 0 1.58-1.28 2.86-2.86 2.86zm-1.166 2.533c-2.484 0-4.5 2.016-4.5 4.5s2.016 4.5 4.5 4.5 4.5-2.016 4.5-4.5-2.016-4.5-4.5-4.5zm0 7.333c-1.564 0-2.833-1.269-2.833-2.833s1.269-2.833 2.833-2.833 2.833 1.269 2.833 2.833-1.269 2.833-2.833 2.833z" clipRule="evenodd"/>
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
