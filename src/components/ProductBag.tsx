import React from 'react';

interface ProductBagProps {
  type: 'standard' | 'flexi' | 'ultra' | 'stonefix' | 'exterior' | 'vb3003';
  className?: string;
}

export default function ProductBag({ type, className = 'w-44 h-56' }: ProductBagProps) {
  const configs = {
    standard: {
      color: '#1e60c8',
      lightColor: '#2b7fff',
      darkColor: '#10459a',
      title: 'STANDARD',
      subtitle: 'TILE ADHESIVE',
    },
    flexi: {
      color: '#289d38',
      lightColor: '#34c759',
      darkColor: '#1d7328',
      title: 'FLEXI',
      subtitle: 'TILE ADHESIVE',
    },
    ultra: {
      color: '#9a3412',
      lightColor: '#c2410c',
      darkColor: '#7c2d12',
      title: 'VB-2004',
      subtitle: 'TILE ON TILE',
    },
    vb3003: {
      color: '#ea580c',
      lightColor: '#f97316',
      darkColor: '#c2410c',
      title: 'VB-3003',
      subtitle: 'LARGE FORMAT',
    },
    stonefix: {
      color: '#dc2626',
      lightColor: '#ef4444',
      darkColor: '#991b1b',
      title: 'STONE FIX',
      subtitle: 'TILE ADHESIVE',
    },
    exterior: {
      color: '#7e22ce',
      lightColor: '#9333ea',
      darkColor: '#581c87',
      title: 'EXTERIOR',
      subtitle: 'TILE ADHESIVE',
    },
  };

  const config = configs[type];

  return (
    <div className={`relative ${className} flex items-center justify-center select-none group`}>
      <svg
        viewBox="0 0 240 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Subtle sack gradients */}
          <linearGradient id={`bagGrad-${type}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e5e5e5" />
            <stop offset="12%" stopColor="#fdfdfd" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="88%" stopColor="#f4f4f4" />
            <stop offset="100%" stopColor="#dedede" />
          </linearGradient>

          {/* Color wave gradient */}
          <linearGradient id={`waveGrad-${type}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={config.lightColor} />
            <stop offset="40%" stopColor={config.color} />
            <stop offset="100%" stopColor={config.darkColor} />
          </linearGradient>
        </defs>

        {/* Top stitch border */}
        <path
          d="M 32 30 Q 120 20 208 30 L 214 44 Q 120 34 26 44 Z"
          fill="#dcdcdc"
          stroke="#b8b8b8"
          strokeWidth="1"
        />
        {/* Top crimped pattern */}
        <line x1="40" y1="35" x2="200" y2="35" stroke="#999" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* Main Sack Body */}
        <path
          d="M 28 42
             Q 120 32 212 42
             Q 224 160 216 295
             Q 120 306 24 295
             Q 16 160 28 42 Z"
          fill={`url(#bagGrad-${type})`}
          stroke="#cfcfcf"
          strokeWidth="1.5"
        />

        {/* 3D Side Shadows */}
        <path
          d="M 28 42 Q 16 160 24 295 Q 40 297 45 296 Q 32 160 40 42 Z"
          fill="#000000"
          fillOpacity="0.04"
        />
        <path
          d="M 212 42 Q 224 160 216 295 Q 200 297 195 296 Q 208 160 200 42 Z"
          fill="#000000"
          fillOpacity="0.05"
        />

        {/* Authentic High-Res Vajra Bond Circular Logo */}
        <image
          href="/images/logo.png"
          x="87"
          y="56"
          width="66"
          height="66"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Product Name Title in Sack Center */}
        <text
          x="120"
          y="152"
          textAnchor="middle"
          fontSize="17"
          fontWeight="900"
          fill="#111111"
          letterSpacing="0.8"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {config.title}
        </text>

        <text
          x="120"
          y="168"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="bold"
          fill="#333333"
          letterSpacing="1.2"
        >
          {config.subtitle}
        </text>

        {/* Distinctive Curved Color Wave Banner (Blue, Green, Orange, Red, Purple) */}
        <path
          d="M 23 200
             C 70 185, 170 215, 217 195
             L 216 295
             Q 120 306 24 295
             Z"
          fill={`url(#waveGrad-${type})`}
        />

        {/* Dynamic Highlight arc on wave */}
        <path
          d="M 23 200
             C 70 185, 170 215, 217 195
             C 170 203, 70 193, 23 208
             Z"
          fill="#ffffff"
          fillOpacity="0.25"
        />

        {/* 3 Circular Feature Icons in colored band */}
        <g transform="translate(68, 245)">
          <circle r="12" fill="#ffffff" fillOpacity="0.18" stroke="#ffffff" strokeWidth="1" />
          <path d="M -5 0 L -2 3 L 5 -3" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g transform="translate(120, 245)">
          <circle r="12" fill="#ffffff" fillOpacity="0.18" stroke="#ffffff" strokeWidth="1" />
          {/* Water drop icon */}
          <path d="M 0 -5 C -3 0 -4 3 -4 5 C -4 7.2 -2.2 9 0 9 C 2.2 9 4 7.2 4 5 C 4 3 3 0 0 -5 Z" fill="#ffffff" />
        </g>

        <g transform="translate(172, 245)">
          <circle r="12" fill="#ffffff" fillOpacity="0.18" stroke="#ffffff" strokeWidth="1" />
          {/* Strength shield */}
          <path d="M -4 -4 L 4 -4 L 4 1 C 4 5 0 7 0 7 C 0 7 -4 5 -4 1 Z" fill="#ffffff" />
        </g>

        {/* Weight & IS mark in bottom corners */}
        <text
          x="42"
          y="282"
          fontSize="8"
          fontWeight="bold"
          fill="#ffffff"
          letterSpacing="0.5"
        >
          20 kg
        </text>
        <text
          x="198"
          y="282"
          textAnchor="end"
          fontSize="7.5"
          fontWeight="600"
          fill="#ffffff"
          opacity="0.9"
        >
          IS: 15477
        </text>
      </svg>
    </div>
  );
}
