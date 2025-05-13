
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Explore Sikkim",
  ctaLink = "/experiences",
}) => {
  return (
    <div 
      className="relative h-[90vh] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sikkim-charcoal/70 to-transparent"></div>
      
      <div className="sikkim-container relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {subtitle}
          </p>
          <Link
            to={ctaLink}
            className="inline-flex items-center gap-2 px-6 py-3 bg-sikkim-red text-white rounded-md hover:bg-sikkim-red/90 transition-colors"
          >
            {ctaText} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      
      {/* Prayer flag inspired decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
        <div className="flex-1 h-full bg-sikkim-red"></div>
        <div className="flex-1 h-full bg-sikkim-turquoise"></div>
        <div className="flex-1 h-full bg-sikkim-gold"></div>
        <div className="flex-1 h-full bg-sikkim-green"></div>
        <div className="flex-1 h-full bg-sikkim-blue"></div>
      </div>
    </div>
  );
};

export default HeroSection;
