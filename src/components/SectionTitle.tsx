
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(centered ? "text-center" : "", className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-2 text-sikkim-charcoal relative inline-block",
        centered ? "after:left-1/2 after:-translate-x-1/2" : "after:left-0"
      )}>
        {title}
        <span className="block absolute -bottom-2 w-16 h-1 bg-sikkim-red"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-sikkim-mountain max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
