import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ANIMATIONS, TESTIMONIALS } from '../constants';
import { Quote, ArrowRight, ArrowLeft, Star, Dot } from 'lucide-react';

const About: React.FC = () => {
  const [count, setCount] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax for mobile image
  const yRange = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityRange = useTransform(scrollY, [0, 400], [1, 0.5]);

  // CountUp Effect
  useEffect(() => {
    let start = 0;
    const end = 500;
    const timer = setInterval(() => {
      start += 10;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={ANIMATIONS.pageTransition}
      className="h-full w-full bg-cream relative md:overflow-hidden"
    >
      {/* ==========================================
          BACKGROUND LAYER (Mobile Parallax / Desktop Fixed)
      ========================================== */}
      <div className="fixed top-0 left-0 w-full md:w-1/2 h-[55vh] md:h-full z-0 overflow-hidden bg-dark">
        <motion.div 
            style={{ y: yRange, opacity: opacityRange }}
            className="w-full h-full relative"
        >
            <img 
              src="https://res.cloudinary.com/dkoshgzxo/image/upload/v1765170643/gal_04_mj18y8.webp" 
              alt="About ZYVARA" 
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.1] scale-110"
            />
            {/* Gradient Overlay for Text Readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-dark/80 md:to-black/40"></div>
            
            {/* Mobile Title overlay on Image (Magazine Style) */}
            <div className="absolute bottom-20 left-6 md:hidden text-white z-10">
                <span className="block text-[10px] uppercase tracking-[0.4em] mb-2 opacity-80">The Brand</span>
                <h1 className="font-serif text-5xl leading-none">Inner <br/><span className="italic font-light">Sanctum.</span></h1>
            </div>
        </motion.div>
      </div>

      {/* ==========================================
          FOREGROUND CONTENT LAYER (Scrollable Sheet)
      ========================================== */}
      <div className="relative z-10 w-full h-full md:flex md:justify-end overflow-y-auto md:overflow-hidden">
        
        {/* Desktop Left Spacer (Transparent to show image) */}
        <div className="hidden md:block md:w-1/2 h-full pointer-events-none"></div>

        {/* Right Column / Mobile Bottom Sheet */}
        <div className="w-full md:w-1/2 min-h-screen flex flex-col mt-[45vh] md:mt-0">
            
            {/* Card Container */}
            <div className="bg-cream rounded-t-[2.5rem] md:rounded-none shadow-[0_-20px_60px_rgba(0,0,0,0.3)] md:shadow-none min-h-screen relative overflow-hidden">
                
                {/* Mobile Handle */}
                <div className="w-full flex justify-center py-4 md:hidden opacity-30">
                    <div className="w-12 h-1 bg-dark rounded-full"></div>
                </div>

                {/* SCROLLABLE CONTENT */}
                <div className="flex flex-col md:h-full md:overflow-y-auto">
                    
                    {/* SECTION 01: HERITAGE */}
                    <div className="px-8 md:px-20 lg:px-24 pt-12 md:pt-32 pb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="hidden md:flex items-center gap-4 mb-8">
                                <span className="text-burgundy font-display text-2xl">01</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-400">Heritage</span>
                            </div>

                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark leading-[1] mb-8 relative">
                                <span className="relative z-10">Curating memories since <span className="italic text-burgundy">2018.</span></span>
                                {/* Decorative Watermark */}
                                <span className="absolute -top-12 -left-6 text-[8rem] text-dark/5 font-display z-0 pointer-events-none select-none">18</span>
                            </h2>
                            
                            <p className="text-gray-600 font-light leading-loose text-sm md:text-base text-justify max-w-lg mb-12">
                                ZYVARA was born from a singular vision: to transform architectural gems into the backdrop for life’s defining moments. We operate not as a directory, but as a private collection of spaces.
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-8 border-t border-dark/10 pt-8">
                                <div>
                                    <span className="font-display text-4xl md:text-5xl text-dark block leading-none">{count}+</span>
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-2 block flex items-center gap-1">
                                        <Dot size={16} className="text-burgundy -ml-1" /> Events
                                    </span>
                                </div>
                                <div className="border-l border-dark/10 pl-8">
                                    <span className="font-display text-4xl md:text-5xl text-dark block leading-none">50+</span>
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-2 block flex items-center gap-1">
                                        <Dot size={16} className="text-burgundy -ml-1" /> Venues
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* SECTION 02: ETHOS (Interlude) */}
                    <div className="bg-white/50 px-8 md:px-20 lg:px-24 py-20 border-y border-dark/5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                             <div className="flex items-center gap-4 mb-8">
                                <span className="text-burgundy font-display text-2xl">02</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-400">Ethos</span>
                            </div>

                             <div className="flex flex-col gap-6">
                                {[
                                    { t: 'Exclusivity', d: 'Hidden jewels accessible to few.' },
                                    { t: 'Privacy', d: 'Your moment, completely protected.' },
                                    { t: 'Service', d: 'White-glove standards.' }
                                ].map((item, i) => (
                                    <div key={i} className="group relative pl-6 transition-all duration-300">
                                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-dark/20 group-hover:bg-burgundy transition-colors"></div>
                                        <h3 className="font-serif text-2xl text-dark mb-1 group-hover:text-burgundy transition-colors">{item.t}</h3>
                                        <p className="text-xs text-gray-400 font-light uppercase tracking-wide">{item.d}</p>
                                    </div>
                                ))}
                             </div>
                        </motion.div>
                    </div>

                    {/* SECTION 03: REVIEWS (The WOW Dark Contrast Section) */}
                    <div className="bg-burgundy text-white px-8 md:px-20 lg:px-24 py-24 relative overflow-hidden">
                        {/* Abstract Decor */}
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Quote size={200} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10"
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <span className="text-copper font-display text-2xl">03</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/60">Voices</span>
                            </div>

                            <div className="min-h-[200px] flex flex-col justify-between">
                                <div>
                                    <div className="flex gap-1 mb-6 text-copper">
                                        {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                                    </div>
                                    <motion.p 
                                        key={testimonialIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="font-serif text-2xl md:text-3xl italic text-white leading-relaxed mb-8"
                                    >
                                        "{TESTIMONIALS[testimonialIndex].text}"
                                    </motion.p>
                                </div>
                                
                                <div className="flex items-end justify-between border-t border-white/10 pt-8">
                                    <div>
                                        <motion.span 
                                            key={`auth-${testimonialIndex}`}
                                            initial={{ opacity: 0 }} 
                                            animate={{ opacity: 1 }}
                                            className="block text-xs uppercase tracking-widest font-bold text-white"
                                        >
                                            {TESTIMONIALS[testimonialIndex].author}
                                        </motion.span>
                                        <motion.span 
                                            key={`type-${testimonialIndex}`}
                                            initial={{ opacity: 0 }} 
                                            animate={{ opacity: 1 }}
                                            className="block text-[9px] uppercase tracking-widest text-white/50 mt-1"
                                        >
                                            {TESTIMONIALS[testimonialIndex].type}
                                        </motion.span>
                                    </div>

                                    {/* Glass Controls */}
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={prevTestimonial}
                                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-burgundy transition-all duration-300"
                                        >
                                            <ArrowLeft size={16} />
                                        </button>
                                        <button 
                                            onClick={nextTestimonial}
                                            className="w-10 h-10 rounded-full bg-white text-burgundy flex items-center justify-center hover:bg-copper hover:text-white transition-all duration-300"
                                        >
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* FOOTER CREDITS (Inside Scroll) */}
                    <div className="bg-dark text-white/40 text-[9px] uppercase tracking-[0.2em] py-8 text-center">
                        © 2026 Zyvara Inc.
                    </div>

                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;