import React from 'react';
import { Flower } from 'lucide-react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, title, subtitle }) => {
  return (
    <section id={id} className={`relative py-16 md:py-24 px-4 overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="font-groovy text-4xl md:text-6xl text-groovy-orange drop-shadow-[0_0_10px_rgba(255,107,53,0.6)] uppercase tracking-wider mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-cursive text-3xl md:text-5xl text-groovy-mustard transform -rotate-2">
                {subtitle}
              </p>
            )}
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="h-1 w-16 bg-groovy-orange rounded-full"></div>
              <Flower className="w-5 h-5 text-groovy-mustard animate-spin-slower" />
              <div className="h-1 w-16 bg-groovy-red rounded-full"></div>
              <Flower className="w-5 h-5 text-groovy-purple animate-spin-slower" />
              <div className="h-1 w-16 bg-groovy-mustard rounded-full"></div>
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
