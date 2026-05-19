import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ children, onClick, className = '', href }) => {
  const styles = "relative inline-flex items-center justify-center px-10 py-4 font-retro font-bold uppercase tracking-widest text-groovy-bg bg-groovy-mustard rounded-full shadow-glow-mustard hover:scale-105 hover:bg-groovy-orange hover:shadow-glow-orange transition-all duration-300 focus:outline-none";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${styles} ${className}`}>
      {children}
    </button>
  );
};

export default NeonButton;
