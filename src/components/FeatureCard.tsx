
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  link,
  className,
}) => {
  return (
    <Link 
      to={link} 
      className={cn(
        "group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 block h-full",
        className
      )}
    >
      <div 
        className="aspect-[4/3] bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sikkim-charcoal/90 via-sikkim-charcoal/30 to-transparent group-hover:from-sikkim-charcoal/70 transition-all duration-300"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold mb-2 group-hover:text-sikkim-gold transition-colors">{title}</h3>
        <p className="text-sm text-white/80 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <span className="inline-flex items-center text-sikkim-gold text-sm font-medium">
          Explore
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default FeatureCard;
