import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-12 border-t border-dark/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Quick Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="space-y-4">
            <label className="block text-xs uppercase tracking-widest text-gray-500">Number of guests</label>
            <input 
              type="text" 
              placeholder="Estimated count" 
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-burgundy transition-colors bg-transparent font-light"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-xs uppercase tracking-widest text-gray-500">Event Date</label>
            <input 
              type="date" 
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-burgundy transition-colors bg-transparent font-light text-gray-400"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-burgundy text-white py-4 text-xs uppercase tracking-widest hover:bg-burgundy-dark transition-all duration-300 transform hover:scale-[1.02]">
              Inquire Now
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-10">
          <div className="mb-6 md:mb-0 flex items-center gap-3">
             <img 
               src="https://res.cloudinary.com/dkoshgzxo/image/upload/v1765256649/Zyvara_black_w8gsll.svg" 
               alt="ZYVARA Logo" 
               className="w-8 h-8 object-contain"
             />
             <div>
               <h2 className="font-serif text-2xl font-bold tracking-widest text-dark">ZYVARA</h2>
               <p className="text-[10px] tracking-widest mt-0 text-gray-400">LIMA | PERÚ</p>
             </div>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#" className="text-dark hover:text-burgundy transition-colors hover:-translate-y-1 transform duration-300"><Instagram size={20} /></a>
            <a href="#" className="text-dark hover:text-burgundy transition-colors hover:-translate-y-1 transform duration-300"><Facebook size={20} /></a>
            <a href="#" className="text-dark hover:text-burgundy transition-colors hover:-translate-y-1 transform duration-300"><Twitter size={20} /></a>
          </div>

          <div className="text-xs text-gray-400 tracking-widest flex flex-col md:flex-row gap-4 text-center md:text-right">
            <span>© 2026 ZYVARA INC.</span>
            <a href="#" className="hover:text-dark transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-dark transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;