import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: 'yellow' | 'pink' | 'cream';
}

const NeonButton: React.FC<NeonButtonProps> = ({ children, onClick, className = '', href, variant = 'yellow' }) => {
  const bgMap = {
    yellow: 'bg-groovy-yellow',
    pink: 'bg-groovy-pink text-groovy-cream',
    cream: 'bg-groovy-cream',
  };
  const styles = `inline-flex items-center justify-center px-8 py-3 font-groovy uppercase tracking-widest text-groovy-brown border-4 border-groovy-brown rounded-full sticker hover:translate-y-[-2px] active:translate-y-[1px] transition-transform ${bgMap[variant]}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${styles} ${className}`}>
      {children}
    </button>
  );
};

export default NeonButton;
