
import React from 'react';

interface LogoProps {
  className?: string;
  forceTheme?: 'dark' | 'light';
}

const FeelAgainLogo: React.FC<LogoProps> = ({ className, forceTheme }) => {
  // If forceTheme is 'dark', we use white. If 'light', dark blue.
  // Otherwise, use Tailwind classes.
  const frontFill = forceTheme === 'dark' ? '#FFFFFF' : forceTheme === 'light' ? '#0F2B46' : undefined;
  const frontClass = forceTheme ? undefined : "fill-[#0F2B46] dark:fill-[#FFFFFF]";
  
  const fade1Fill = forceTheme === 'dark' ? 'rgba(255,255,255,0.55)' : forceTheme === 'light' ? 'rgba(15,43,70,0.55)' : undefined;
  const fade1Class = forceTheme ? undefined : "fill-[rgba(15,43,70,0.55)] dark:fill-[rgba(255,255,255,0.55)]";
  
  const fade2Fill = forceTheme === 'dark' ? 'rgba(255,255,255,0.3)' : forceTheme === 'light' ? 'rgba(15,43,70,0.3)' : undefined;
  const fade2Class = forceTheme ? undefined : "fill-[rgba(15,43,70,0.3)] dark:fill-[rgba(255,255,255,0.3)]";

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1024 1024" 
      className={className}
    >
      {/* F (frontmost) */}
      <path 
        d="M 285.71 226.54 L 285.71 797.46 L 345.54 797.46 L 345.54 541.41 L 532.39 541.41 L 532.39 484.11 L 345.54 484.11 L 345.54 283.84 L 547.33 283.84 L 547.33 226.54 Z" 
        className={frontClass}
        fill={frontFill}
      />
      {/* E1 (gold) */}
      <path 
        d="M 407.41 226.54 L 407.41 797.46 L 467.24 797.46 L 467.24 541.41 L 654.09 541.41 L 654.09 484.11 L 467.24 484.11 L 467.24 283.84 L 669.03 283.84 L 669.03 226.54 Z" 
        fill="#D4A017"
      />
      {/* E2 (faded) */}
      <path 
        d="M 529.11 226.54 L 529.11 797.46 L 588.94 797.46 L 588.94 541.41 L 775.79 541.41 L 775.79 484.11 L 588.94 484.11 L 588.94 283.84 L 790.73 283.84 L 790.73 226.54 Z" 
        className={fade1Class}
        fill={fade1Fill}
      />
      {/* L (backmost) */}
      <path 
        d="M 650.81 226.54 L 650.81 797.46 L 710.64 797.46 L 710.64 283.84 L 790.73 283.84 L 790.73 226.54 Z" 
        className={fade2Class}
        fill={fade2Fill}
      />
      {/* "Again" subtitle */}
      <text 
        x="512" 
        y="950" 
        textAnchor="middle" 
        fill="#D4A017" 
        fontFamily="'Space Grotesk', sans-serif" 
        fontSize="100" 
        fontWeight="700" 
        letterSpacing="8"
      >
        Again
      </text>
    </svg>
  );
};

export default FeelAgainLogo;
