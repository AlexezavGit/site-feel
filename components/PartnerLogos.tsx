
import React from 'react';

export type LogoVariant = 'openSociety' | 'geha' | 'usc' | 'solana' | 'highCastle' | 'feelAgain';

interface PartnerLogoProps {
  variant: string;
  className?: string;
}

const OpenSocietyLogo = () => (
  <svg viewBox="0 0 300 100" className="w-full h-full" fill="currentColor">
    {/* Abstract Fan/Circle Symbol */}
    <path d="M40 50 L10 20 A 40 40 0 0 1 70 20 Z" fillOpacity="0.8" />
    <path d="M40 50 L70 20 A 40 40 0 0 1 70 80 Z" fillOpacity="0.6" />
    <path d="M40 50 L70 80 A 40 40 0 0 1 10 80 Z" fillOpacity="0.4" />
    <path d="M40 50 L10 80 A 40 40 0 0 1 10 20 Z" fillOpacity="0.2" />
    
    {/* Text */}
    <text x="90" y="45" fontFamily="serif" fontSize="24" fontWeight="bold">OPEN SOCIETY</text>
    <text x="90" y="70" fontFamily="sans-serif" fontSize="14" fontWeight="light" letterSpacing="1">FOUNDATIONS</text>
  </svg>
);

const GehaLogo = () => (
  <svg viewBox="0 0 300 100" className="w-full h-full" fill="currentColor">
    {/* Clalit/Geha stylized symbol (Three curves) */}
    <path d="M30 70 Q 10 70 10 50 Q 10 30 30 30 L 50 30" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    <path d="M45 70 Q 25 70 25 50 Q 25 30 45 30 L 65 30" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
    
    {/* Text */}
    <text x="80" y="60" fontFamily="sans-serif" fontSize="36" fontWeight="900" letterSpacing="-1">GEHA</text>
    <text x="80" y="82" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#16a34a">MENTAL HEALTH CENTER</text>
  </svg>
);

const USCLogo = () => (
  <svg viewBox="0 0 300 100" className="w-full h-full" fill="currentColor">
    {/* Shield Shape */}
    <path d="M30 20 L60 20 L60 50 Q 60 80 45 90 Q 30 80 30 50 Z" fill="none" stroke="currentColor" strokeWidth="3" />
    <text x="36" y="55" fontSize="20" fontWeight="bold">USC</text>
    
    {/* Text */}
    <text x="80" y="45" fontFamily="serif" fontSize="24" fontWeight="bold">USC</text>
    <text x="135" y="45" fontFamily="sans-serif" fontSize="24" fontWeight="300">ICT</text>
    <text x="80" y="70" fontFamily="sans-serif" fontSize="10" fontWeight="medium" letterSpacing="0.5">Institute for Creative Technologies</text>
  </svg>
);

const SolanaHighCastleLogo = () => (
  <svg viewBox="0 0 300 100" className="w-full h-full" fill="currentColor">
    {/* Solana-ish angular bars */}
    <g transform="translate(10, 20) scale(0.6)">
        <path d="M10 10 L70 10 L60 25 L0 25 Z" fill="#9945FF" />
        <path d="M10 40 L70 40 L60 55 L0 55 Z" fill="#14F195" />
        <path d="M10 70 L70 70 L60 85 L0 85 Z" fill="#9945FF" />
    </g>
    
    {/* HighCastle Text */}
    <text x="65" y="45" fontFamily="sans-serif" fontSize="20" fontWeight="bold">HighCastle</text>
    <text x="65" y="68" fontFamily="sans-serif" fontSize="12" fill="#666">Infrastructure</text>
    <text x="175" y="45" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="#9945FF">Ledger</text>
  </svg>
);

export const PartnerLogo: React.FC<PartnerLogoProps> = ({ variant, className = "" }) => {
  const containerClass = `flex items-center justify-center ${className}`;
  
  switch (variant) {
    case 'open_society':
      return <div className={containerClass} title="Open Society Foundations"><OpenSocietyLogo /></div>;
    case 'geha':
      return <div className={containerClass} title="Geha Mental Health Center"><GehaLogo /></div>;
    case 'usc':
      return <div className={containerClass} title="USC Institute for Creative Technologies"><USCLogo /></div>;
    case 'solana':
      return <div className={containerClass} title="HighCastle / Ledger"><SolanaHighCastleLogo /></div>;
    default:
      return <div className={containerClass}>Logo</div>;
  }
};
