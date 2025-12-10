import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { VENUES, ANIMATIONS } from '../constants';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';

const Venues: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // LOGIC: Scroll Tracking based on start alignment (Left Edge)
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    // 1. Progress Bar Logic
    const maxScroll = scrollWidth - clientWidth;
    const currentProgress = (scrollLeft / maxScroll) * 100;
    setProgress(Math.min(100, Math.max(0, currentProgress)));

    // 2. Active Index Detection
    // On mobile we might want center detection, but left-edge consistency is fine given the visual cue
    const cardWidth = container.children[0]?.getBoundingClientRect().width || 0;
    const gap = 32; // md:gap-8 approx
    
    if (cardWidth > 0) {
        // Adjust offset logic slightly for better accuracy
        const estimatedIndex = Math.round(scrollLeft / (cardWidth + gap));
        const safeIndex = Math.min(VENUES.length - 1, Math.max(0, estimatedIndex));
        setCurrentIndex(safeIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Find the specific card element
    const card = container.children[index] as HTMLElement;
    if (card) {
        // Scroll logic: Center on mobile, Left align on Desktop
        const isMobile = window.innerWidth < 768;
        
        if (isMobile) {
            // Center alignment math
            const scrollLeft = card.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        } else {
            // Desktop: Scroll specifically to the card's LEFT position (minus container padding)
            const paddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft);
            container.scrollTo({
                left: card.offsetLeft - paddingLeft,
                behavior: 'smooth'
            });
        }
    }
  };

  const nextVenue = () => {
    if (currentIndex < VENUES.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const prevVenue = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const activeVenue = VENUES[currentIndex];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={ANIMATIONS.pageTransition}
      className="h-full w-full bg-cream relative flex flex-col overflow-hidden"
    >
      {/* 1. AMBIENT TYPOGRAPHY (Background Parallax) */}
      <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 overflow-hidden pointer-events-none z-0 opacity-[0.03]">
         <motion.div
            animate={{ x: -progress * 5 }} // Parallax effect based on scroll
            transition={{ ease: "linear", duration: 0 }}
            className="whitespace-nowrap"
         >
            <h1 className="text-[25vw] font-serif text-burgundy leading-none tracking-tighter">
                COLLECTION 2026
            </h1>
         </motion.div>
      </div>

      {/* 2. THE INFINITE FILM STRIP (Slider) */}
      <div className="flex-grow flex items-center w-full max-w-[1920px] mx-auto relative z-10">
          
          <div 
            ref={containerRef}
            // MASTER GRID PADDING: Left padding aligns first card. Right padding allows flow.
            className="w-full flex items-center gap-6 md:gap-12 px-6 md:px-20 lg:px-32 overflow-x-auto overflow-y-hidden h-[55vh] md:h-[60vh] snap-x snap-mandatory no-scrollbar py-8"
          >
            {VENUES.map((venue, index) => {
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={venue.id}
                  className="snap-center md:snap-start shrink-0 w-[85vw] md:w-[28vw] lg:w-[24vw] h-full relative group cursor-pointer"
                  onClick={() => scrollToIndex(index)}
                >
                    {/* Card Container */}
                    <Link to={`/venues/${venue.slug}`} className="block w-full h-full relative overflow-hidden bg-gray-200">
                        
                        {/* Image with slow zoom on hover */}
                        <img 
                            src={venue.images.hero} 
                            alt={venue.name} 
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                        />
                        
                        {/* Overlay Gradient (Subtle) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"></div>

                        {/* Content inside Card (Always visible now) */}
                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="font-serif text-3xl md:text-4xl mb-2 leading-none">{venue.name}</h3>
                            
                            <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <span className="text-[10px] tracking-widest uppercase flex items-center gap-2">
                                    <MapPin size={12} className="text-copper" /> {venue.location.district}
                                </span>
                                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Active Indicator (Top Right) - Optional subtle marker */}
                        {isActive && (
                            <div className="absolute top-4 right-4 w-2 h-2 bg-copper rounded-full shadow-[0_0_10px_rgba(184,115,51,0.8)]"></div>
                        )}
                    </Link>
                </div>
              );
            })}
            
            {/* End Spacer to allow last card to scroll into clear view if needed */}
            <div className="w-[10vw] shrink-0"></div>
          </div>
      </div>

      {/* 3. CONTROL DECK (Bottom - High Tech) */}
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-20 lg:px-32 pb-8 z-20 relative">
          
          <div className="border-t border-burgundy/10 pt-6 flex flex-col gap-6">
              
              {/* Active Venue Detail Row */}
              <div className="flex justify-between items-end">
                  
                  {/* Left: Numbers & Context */}
                  <div className="flex flex-col">
                      <div className="flex items-baseline gap-2 mb-1">
                          <span className="font-display text-6xl text-burgundy leading-none">
                            0{currentIndex + 1}
                          </span>
                          <span className="text-gray-300 font-light text-2xl">/ 0{VENUES.length}</span>
                      </div>
                      <div className="h-1 w-12 bg-burgundy mb-2"></div>
                      <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                        {activeVenue?.tagline}
                      </span>
                  </div>

                  {/* Right: Navigation Controls */}
                  <div className="flex items-center gap-4">
                      {/* Progress Line Mini */}
                      <div className="hidden md:block w-32 h-[1px] bg-dark/10 relative mr-4">
                        <motion.div 
                            className="absolute top-0 left-0 h-full bg-burgundy"
                            animate={{ width: `${((currentIndex + 1) / VENUES.length) * 100}%` }}
                        />
                      </div>

                      <button 
                        onClick={prevVenue}
                        disabled={currentIndex === 0}
                        className={`w-12 h-12 border border-dark/10 flex items-center justify-center transition-all duration-300 hover:bg-dark hover:text-white ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button 
                        onClick={nextVenue}
                        disabled={currentIndex === VENUES.length - 1}
                        className={`w-12 h-12 border border-dark/10 flex items-center justify-center transition-all duration-300 hover:bg-burgundy hover:text-white hover:border-burgundy ${currentIndex === VENUES.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
                      >
                        <ChevronRight size={18} />
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </motion.div>
  );
};

export default Venues;