import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { VENUES, ANIMATIONS } from '../constants';
import { X, ArrowRight, Maximize2, Users, MapPin, Square, CheckCircle, Info } from 'lucide-react';

const VenueDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const venue = VENUES.find(v => v.slug === slug);
  const [isZoomed, setIsZoomed] = useState(false);

  // Prevent scrolling when zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isZoomed]);

  if (!venue) return <div>Not found</div>;

  const handleInquire = () => {
    const subject = `Inquiry: ${venue.name} - ZYVARA`;
    const body = `Hello ZYVARA Team,\n\nI am interested in booking ${venue.name} for an event.\n\nDetails:\nDate:\nGuests:\nType of Event:\n\nThank you.`;
    window.location.href = `mailto:concierge@zyvara.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Icons Mapping for Spec Grid
  const SpecIcon = ({ type }: { type: string }) => {
     switch(type) {
         case 'capacity': return <Users size={18} className="text-burgundy mb-2" />;
         case 'area': return <Square size={18} className="text-burgundy mb-2" />;
         case 'type': return <CheckCircle size={18} className="text-burgundy mb-2" />;
         case 'price': return <Info size={18} className="text-burgundy mb-2" />;
         default: return null;
     }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={ANIMATIONS.pageTransition}
      // MOBILE SCROLL FIX: overflow-y-auto on mobile, overflow-hidden on desktop
      className="h-full w-full bg-cream relative flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
    >
      
      {/* ==========================================
          LEFT COLUMN (Image)
          Mobile: Top Header (Scrolls with page)
          Desktop: Fixed Left Panel
      ========================================== */}
      <div className="w-full md:w-5/12 lg:w-1/2 flex-shrink-0 h-[45vh] md:h-full z-20 relative bg-dark">
          {!isZoomed ? (
            <motion.div 
               layoutId={`hero-container-${venue.id}`}
               className="w-full h-full cursor-pointer group relative overflow-hidden"
               onClick={() => setIsZoomed(true)}
            >
                {/* Cinematic Breathing Effect */}
                <motion.img 
                  layoutId={`hero-image-${venue.id}`}
                  src={venue.images.hero} 
                  alt={venue.name} 
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                      scale: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="w-full h-full object-cover"
                />
                
                {/* Desktop Overlay Hint */}
                <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 items-center justify-center">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileHover={{ opacity: 1 }}
                        className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                    >
                        <Maximize2 className="text-white" size={24} />
                    </motion.div>
                </div>

                {/* Mobile Zoom Button - ELEVATED to bottom-24 to completely clear the Content Card overlap */}
                <div className="absolute bottom-24 right-6 md:hidden z-30">
                     <button 
                        onClick={(e) => { e.stopPropagation(); setIsZoomed(true); }}
                        className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg active:scale-95 transition-transform"
                        aria-label="Zoom Image"
                     >
                        <Maximize2 className="text-white" size={16} />
                     </button>
                </div>
                
                {/* Gradient for mobile visual separation */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
            </motion.div>
          ) : (
            // Invisible Placeholder
            <div className="w-full h-full bg-transparent" />
          )}
      </div>


      {/* ==========================================
          FULLSCREEN OVERLAY (Zoomed View)
          Shared Layout Projection
      ========================================== */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
             layoutId={`hero-container-${venue.id}`}
             className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
             onClick={() => setIsZoomed(false)}
          >
             {/* The Image Itself */}
             <motion.img 
                layoutId={`hero-image-${venue.id}`}
                src={venue.images.hero} 
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
             />

             {/* Close Button */}
             <motion.button 
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 right-6 md:top-8 md:right-8 z-[101] w-12 h-12 md:w-14 md:h-14 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-black/40 border border-white/10 cursor-pointer"
             >
               <X size={24} />
             </motion.button>

             {/* Immersive Text */}
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 left-6 md:bottom-24 md:left-24 z-[101] text-white max-w-4xl pointer-events-none"
             >
                 <h1 className="font-serif text-4xl md:text-9xl mb-2 md:mb-6 drop-shadow-lg">{venue.name}</h1>
                 <p className="text-base md:text-2xl font-light opacity-80 tracking-wide drop-shadow-md">{venue.tagline}</p>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ==========================================
          RIGHT COLUMN (Content)
          Mobile: Long scrolling content below image
          Desktop: Independent scrollable column
      ========================================== */}
      <motion.div 
          animate={{ 
             opacity: isZoomed ? 0 : 1, 
             x: isZoomed ? '100%' : '0%',
             pointerEvents: isZoomed ? 'none' : 'auto'
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          // Z-INDEX FIX: Raised to z-30 to sit ABOVE the image (z-20) when overlapped with negative margin
          className="w-full md:w-7/12 lg:w-1/2 flex-grow flex flex-col relative z-30 -mt-10 md:mt-0"
      >
         
         <div className="min-h-full bg-cream rounded-t-[2.5rem] md:rounded-none shadow-[0_-10px_40px_rgba(0,0,0,0.15)] md:shadow-none flex flex-col relative">
             
             {/* Mobile Grab Handle Indicator */}
             <div className="md:hidden w-full flex justify-center pt-4 pb-2">
                 <div className="w-16 h-1 bg-gray-300 rounded-full opacity-60"></div>
             </div>

             {/* Content Area 
                 MOBILE: pb-[140px] (SAFE AREA) - Ensures content scrolls ABOVE the fixed footer
                 DESKTOP: overflow-y-auto to scroll internally
             */}
             <div className="flex-grow md:overflow-y-auto px-6 md:px-20 lg:px-32 py-6 md:py-16 md:pt-24 relative pb-[140px] md:pb-24">
                 
                 {/* Navigation */}
                 <div className="flex justify-between items-center mb-8 md:mb-10 pt-2 md:pt-0">
                    <Link to="/venues" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-burgundy transition-colors group flex items-center gap-2">
                       <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Collection
                    </Link>
                 </div>

                 {/* Header */}
                 <div className="mb-8 md:mb-12 border-b border-dark/5 pb-8 md:pb-12">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-dark mb-4 md:mb-6 leading-[0.9] -ml-1"
                    >
                        {venue.name}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 font-light text-lg md:text-xl italic"
                    >
                        {venue.tagline}
                    </motion.p>
                 </div>

                 {/* THE SPEC GRID */}
                 <div className="grid grid-cols-2 border border-dark/10 mb-8 md:mb-12">
                     <div className="p-4 md:p-6 border-r border-b border-dark/10 hover:bg-white transition-colors duration-300">
                         <SpecIcon type="capacity" />
                         <span className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 mb-1">Capacity</span>
                         <span className="font-serif text-xl md:text-2xl text-dark">{venue.capacity.max} Guests</span>
                     </div>
                     <div className="p-4 md:p-6 border-b border-dark/10 hover:bg-white transition-colors duration-300">
                         <SpecIcon type="area" />
                         <span className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 mb-1">Area</span>
                         <span className="font-serif text-xl md:text-2xl text-dark">{venue.area} m²</span>
                     </div>
                     <div className="p-4 md:p-6 border-r border-dark/10 hover:bg-white transition-colors duration-300">
                         <SpecIcon type="type" />
                         <span className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 mb-1">Type</span>
                         <span className="font-serif text-xl md:text-2xl text-dark capitalize truncate">{venue.type}</span>
                     </div>
                     <div className="p-4 md:p-6 hover:bg-white transition-colors duration-300">
                         <MapPin size={18} className="text-burgundy mb-2" />
                         <span className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 mb-1">Location</span>
                         <span className="font-serif text-xl md:text-2xl text-dark truncate">{venue.location.district}</span>
                     </div>
                 </div>

                 {/* Description & Nuances */}
                 <div className="grid grid-cols-1 gap-8 md:gap-12 mb-8">
                     <div>
                         <h3 className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 md:mb-6">Narrative</h3>
                         <p className="text-gray-600 font-light leading-loose text-base md:text-base text-justify">
                            {venue.description.full}
                         </p>
                     </div>
                     
                     <div>
                         <h3 className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 md:mb-6">Interior Nuances</h3>
                         <div className="flex flex-wrap gap-3 md:gap-4">
                            {venue.interior.highlights.map((h, i) => (
                                <span key={i} className="inline-flex items-center gap-2 text-sm md:text-xs text-dark border-b border-dark/10 pb-1">
                                    <span className="w-1 h-1 bg-burgundy rounded-full"></span> {h}
                                </span>
                            ))}
                         </div>
                     </div>
                 </div>
             </div>

             {/* STICKY FOOTER ACTION - Fixed to viewport bottom on mobile */}
             <div className="fixed md:absolute bottom-0 left-0 w-full bg-cream/95 backdrop-blur-md border-t border-dark/10 px-6 md:px-20 lg:px-32 py-4 md:py-6 flex items-center justify-between z-40 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                 <div className="flex flex-col">
                    <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-400 mb-0.5">Starting Investment</span>
                    <span className="font-serif text-xl md:text-3xl text-burgundy">S/ {venue.priceFrom.toLocaleString()}</span>
                 </div>
                 <button 
                    onClick={handleInquire}
                    className="bg-dark text-white px-6 md:px-12 py-3 md:py-4 text-[10px] md:text-xs tracking-[0.25em] uppercase hover:bg-burgundy transition-all duration-300 flex items-center gap-2 md:gap-4 group shadow-lg active:scale-95"
                 >
                    Inquire
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </button>
             </div>
         </div>

      </motion.div>
    </motion.div>
  );
};

export default VenueDetail;