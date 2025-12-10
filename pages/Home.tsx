import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ANIMATIONS } from '../constants';

const Home: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={ANIMATIONS.pageTransition}
      className="h-full w-full relative overflow-hidden bg-dark"
    >
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 z-0">
        <motion.div
           initial={{ scale: 1.15 }}
           animate={{ scale: 1 }}
           transition={{ duration: 2.5, ease: "easeOut" }}
           className="w-full h-full"
        >
          {/* USER PROVIDED COVER IMAGE - HIGH PRIORITY LOADING */}
          <img
            src="https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765254424/hero_web_tztcze.png"
            // SMART CROP: object-[50%_30%] centers horizontally but focuses 30% from the top (faces)
            className="w-full h-full object-cover object-[50%_25%] md:object-center"
            alt="Hero ZYVARA"
            loading="eager"
            fetchPriority="high"
          />
          {/* Refined Overlay for maximum text readability and mood */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
      </div>

      {/* ARCHITECTURAL FRAME CONTAINER */}
      {/* MASTER GRID: max-w-[1920px] and px-6 md:px-20 lg:px-32 */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full max-w-[1920px] mx-auto px-6 md:px-20 lg:px-32 flex flex-col justify-between py-6 md:py-8">
            
            {/* Top Spacer (Occupied by Navbar) */}
            <div className="h-20 flex-shrink-0"></div>

            {/* CENTER SECTION: Content & Sidebar */}
            {/* FLEXBOX LAYOUT instead of Absolute to prevent sidebar from hitting edges */}
            <div className="flex-grow flex items-center relative pb-10 md:pb-0">
                
                {/* Left Sidebar (Vertical Context) - Now statically positioned inside the padding */}
                <div className="hidden md:flex flex-col justify-center items-center gap-16 text-white/50 text-[10px] tracking-[0.3em] uppercase w-8 border-r border-white/10 pr-8 mr-12 lg:mr-20 h-full max-h-[60vh]">
                    <span className="-rotate-90 whitespace-nowrap origin-center">Est. 2018</span>
                    <div className="h-full w-[1px] bg-white/10"></div>
                    <span className="-rotate-90 whitespace-nowrap origin-center">Lima, PE</span>
                </div>

                {/* Main Typographic Content */}
                <div className="w-full pointer-events-auto">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="flex items-center gap-4 mb-4 md:mb-6"
                    >
                      <div className="h-[1px] w-8 md:w-12 bg-white/50"></div>
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/90">Curated Spaces</span>
                    </motion.div>

                    <div className="relative mb-6 md:mb-8">
                      <div className="overflow-hidden">
                        <motion.h1
                          initial={{ y: '100%' }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                          className="font-serif text-[3.5rem] leading-[0.9] xs:text-6xl md:text-8xl lg:text-[7.5rem] text-white tracking-tight"
                        >
                          Wedding in
                        </motion.h1>
                      </div>
                      <div className="overflow-hidden">
                        <motion.h1
                          initial={{ y: '100%' }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                          className="font-serif text-[3.5rem] leading-[0.9] xs:text-6xl md:text-8xl lg:text-[7.5rem] text-white/80 italic"
                        >
                          the loft
                        </motion.h1>
                      </div>
                      <div className="overflow-hidden">
                        <motion.h1
                          initial={{ y: '100%' }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                          className="font-serif text-[3.5rem] leading-[0.9] xs:text-6xl md:text-8xl lg:text-[7.5rem] text-white"
                        >
                          for love
                        </motion.h1>
                      </div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="text-white/80 font-light text-xs md:text-base max-w-[280px] md:max-w-md leading-relaxed ml-1 border-l border-white/20 pl-4 md:pl-6"
                    >
                      The definitive collection of venues in Lima. <br/>
                      Where minimalist architecture meets timeless elegance.
                    </motion.p>
                </div>
            </div>

            {/* BOTTOM ROW: Footer Info & Floating CTA */}
            {/* Fixed stacking order on mobile to ensure no overlap */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-6 pointer-events-auto pb-safe">
                
                {/* Bottom Info & Credits - REFINED */}
                <div className="order-2 md:order-1 flex flex-col gap-2 text-[10px] tracking-[0.2em] uppercase text-white/60 mb-2 md:mb-0">
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 1.2 }}
                    >
                        © 2025 Zyvara by <span className="text-white font-medium border-b border-white/20 pb-0.5">Inspyrio</span>.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 0.6 }} 
                        transition={{ delay: 1.4 }}
                        className="text-[9px] hidden xs:block"
                    >
                        Todos los derechos reservados.
                    </motion.p>
                </div>

                {/* FLOATING CTA CARD */}
                {/* Optimized for mobile width to prevent cut-off */}
                <Link 
                  to="/venues" 
                  className="order-1 md:order-2 w-full md:w-auto md:min-w-[320px] group relative overflow-hidden bg-burgundy text-white px-6 py-5 md:px-10 md:py-8 flex items-center justify-between md:justify-start gap-4 md:gap-8 shadow-2xl transition-all duration-300 hover:bg-burgundy-dark hover:-translate-y-1 rounded-sm md:rounded-none"
                >
                  <div className="flex flex-col relative z-10">
                      <span className="text-[8px] md:text-[9px] uppercase tracking-widest opacity-80 mb-1">Start Journey</span>
                      <span className="font-serif text-xl md:text-2xl italic">Explore 2026</span>
                  </div>
                  
                  <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-burgundy transition-all duration-300">
                      <ArrowRight size={16} className="md:w-5 md:h-5" />
                  </div>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                </Link>

            </div>
        </div>
      </div>

      {/* Decorative Giant Number (Subtler) */}
      <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5 }}
           className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 -rotate-90 text-white/[0.03] text-[20rem] font-display pointer-events-none z-0 hidden md:block"
      >
          26
      </motion.div>

    </motion.div>
  );
};

export default Home;