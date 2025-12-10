import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Venue } from '../types';
import { Users, MapPin } from 'lucide-react';

interface VenueCardProps {
  venue: Venue;
}

const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className="group relative block w-full aspect-[3/4] overflow-hidden bg-gray-200 cursor-pointer"
    >
      <Link to={`/venues/${venue.slug}`} className="block w-full h-full">
        {/* Image */}
        <div className="w-full h-full overflow-hidden">
          <img
            src={venue.images.thumbnail}
            alt={venue.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="mb-2 overflow-hidden">
            <h3 className="font-serif text-3xl mb-1">{venue.name}</h3>
            <div className="h-[1px] w-12 bg-copper mb-4 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm font-light tracking-wide text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <span className="flex items-center gap-1">
              <Users size={14} /> {venue.capacity.max}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {venue.location.district}
            </span>
          </div>

          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
            <span className="inline-block border-b border-white pb-1 text-xs tracking-widest uppercase hover:text-copper hover:border-copper transition-colors">
              View Details
            </span>
          </div>
        </div>

        {venue.featured && (
          <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest uppercase text-white border border-white/20">
            Featured
          </div>
        )}
      </Link>
    </motion.div>
  );
};

export default VenueCard;