import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Venues', path: '/venues' },
  ];

  // Logic to determine active state (Dark vs Light theme)
  // If we are on Home AND menu is closed -> Light Theme (White Text/Logo)
  // Otherwise -> Dark Theme (Black Text/Logo)
  const isLightTheme = isHome && !isMenuOpen;

  const textColorClass = isLightTheme ? 'text-white' : 'text-dark';
  const borderColorClass = isLightTheme ? 'border-white/20' : 'border-dark/20';
  const hoverColorClass = isLightTheme ? 'hover:bg-white hover:text-burgundy' : 'hover:bg-burgundy hover:text-white';
  
  // NAV BACKGROUND LOGIC: ALWAYS TRANSPARENT
  const navBackgroundClass = 'bg-transparent';

  return (
    <>
      <nav
        // MASTER GRID ALIGNMENT + GHOST UI
        // pointer-events-none ensures clicks pass through the empty space of the navbar
        className={`fixed top-0 left-0 right-0 z-50 py-6 md:py-10 ${navBackgroundClass} pointer-events-none transition-all duration-500`}
      >
        <div className="w-full max-w-[1920px] mx-auto flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32">
          
          {/* Logo Container - Pointer Events Auto to make it clickable */}
          <Link to="/" className="z-50 group flex items-center gap-4 pointer-events-auto">
            {/* Logo Icon Container - Crossfade Logic */}
            <div className="relative w-10 h-10 md:w-10 md:h-10">
               {/* Black Logo (Visible when NOT light theme) */}
               <img 
                 src="https://res.cloudinary.com/dkoshgzxo/image/upload/v1765256649/Zyvara_black_w8gsll.svg" 
                 alt="ZYVARA Logo Dark" 
                 className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isLightTheme ? 'opacity-0' : 'opacity-100'}`}
               />
               {/* White Logo (Visible when light theme) */}
               <img 
                 src="https://res.cloudinary.com/dkoshgzxo/image/upload/v1765256649/Zyvara_white_xypmkh.svg" 
                 alt="ZYVARA Logo White" 
                 className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isLightTheme ? 'opacity-100' : 'opacity-0'}`}
               />
            </div>

            {/* Brand Text - HIDDEN ON MOBILE for Cleaner Look */}
            <div className="hidden md:flex flex-col">
              <h1 className={`font-serif text-xl md:text-2xl tracking-[0.2em] font-bold transition-colors duration-500 ${textColorClass}`}>
                ZYVARA
              </h1>
            </div>
          </Link>

          {/* Desktop Menu - Pointer Events Auto */}
          <div className="hidden md:flex items-center space-x-12 pointer-events-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-xs tracking-widest-xl uppercase hover:opacity-70 transition-colors duration-300 group ${textColorClass}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-full h-[1px] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${location.pathname === link.path ? 'scale-x-100' : ''} ${isLightTheme ? 'bg-white' : 'bg-burgundy'}`}></span>
              </Link>
            ))}
            
            {/* Header Button - Distinctive Style */}
            <Link
              to="/venues"
              className={`px-8 py-3 border text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${textColorClass} ${borderColorClass} ${hoverColorClass}`}
            >
              Book Venue
            </Link>
          </div>

          {/* Mobile Menu Toggle - Pointer Events Auto */}
          {/* Only visible when menu is CLOSED (Card has its own close button) */}
          {!isMenuOpen && (
            <button
                onClick={() => setIsMenuOpen(true)}
                className={`md:hidden z-50 p-2 transition-colors duration-500 pointer-events-auto ${textColorClass}`}
            >
                <Menu size={28} strokeWidth={1.5} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Floating Card Menu (WOW Effect) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-6 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)} // Close when clicking outside
          >
            {/* The Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-sm bg-cream rounded-[2rem] shadow-2xl overflow-hidden relative p-8 flex flex-col items-center justify-center min-h-[50vh]"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking card
            >
                {/* Close Button - Floating inside card */}
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full border border-dark/10 flex items-center justify-center text-dark hover:bg-dark hover:text-white transition-all duration-300"
                >
                    <X size={18} strokeWidth={1.5} />
                </button>

                {/* Logo Mark Inside Menu */}
                <div className="mb-10 opacity-20">
                    <img 
                        src="https://res.cloudinary.com/dkoshgzxo/image/upload/v1765256649/Zyvara_black_w8gsll.svg" 
                        alt="Logo" 
                        className="w-12 h-12"
                    />
                </div>

                {/* Links Stack */}
                <div className="flex flex-col items-center gap-6 w-full">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + (index * 0.1) }}
                        >
                            <Link
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="font-serif text-3xl md:text-4xl text-dark italic hover:text-burgundy transition-all duration-300 font-light"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="w-12 h-[1px] bg-dark/10 my-10"></div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        to="/venues"
                        onClick={() => setIsMenuOpen(false)}
                        className="px-8 py-4 border border-dark/20 text-dark text-[10px] tracking-[0.25em] uppercase hover:bg-burgundy hover:text-white hover:border-burgundy transition-all duration-300 block"
                    >
                        Book Venue
                    </Link>
                </motion.div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;