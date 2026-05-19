import React from 'react';
import { Flower, Sun } from 'lucide-react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  variant?: 'cream' | 'orange';
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, title, subtitle, variant = 'cream' }) => {
  const bgClass = variant === 'cream' ? 'daisy-cream' : 'daisy-orange';
  const titleClass = variant === 'cream' ? 'text-3d-yellow' : 'text-3d-cream';
  const subtitleColor = variant === 'cream' ? 'text-groovy-pink' : 'text-groovy-yellow';

  return (
    <section id={id} className={`relative py-16 md:py-24 px-4 overflow-hidden ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className={`font-groovy text-4xl md:text-6xl ${titleClass} uppercase tracking-wider mb-3 inline-block`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`font-cursive text-3xl md:text-5xl ${subtitleColor} transform -rotate-2 mt-2 sticker-sm`}>
                {subtitle}
              </p>
            )}
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="h-1.5 w-12 bg-groovy-pink rounded-full"></div>
              <Flower className="w-6 h-6 text-groovy-mustard sticker-sm" fill="#F4A700" />
              <div className="h-1.5 w-12 bg-groovy-yellow rounded-full"></div>
              <Sun className="w-6 h-6 text-groovy-red sticker-sm" fill="#D7263D" />
              <div className="h-1.5 w-12 bg-groovy-turquoise rounded-full"></div>
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
