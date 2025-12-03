import { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  link: string;
}

interface LiquidGlassNavProps {
  items: NavItem[];
  activeSection?: string;
}

const LiquidGlassNav = ({ items, activeSection = 'Profile' }: LiquidGlassNavProps) => {
  const handleNavigate = (link: string) => {
    if (!link) return;
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        // Safari-compatible smooth scrolling with offset adjustment
        const offset = 100; // Adjust this value to control how much space from top
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800; // ms
        let start: number | null = null;

        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          const ease = easeInOutCubic(progress);
          
          window.scrollTo(0, startPosition + distance * ease);
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <>
      {/* SVG Filter for liquid glass displacement effect */}
      <svg style={{ display: 'none', position: 'absolute' }}>
        <defs>
          <filter id="liquidGlassFilter" colorInterpolationFilters="sRGB">
            <feTurbulence 
              type="fractalNoise"
              baseFrequency="0.008 0.008" 
              numOctaves="2" 
              result="turbulence"
              seed="5"
            >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                values="0.008 0.008;0.009 0.007;0.008 0.008"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic"
              in2="turbulence"    
              scale="-40" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>
      </svg>

      {/* Navigation Container - Fixed at top */}
      <div
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'fit-content',
          maxWidth: '90%',
          zIndex: 9999,
          willChange: 'transform',
        }}
      >
        {/* Liquid Glass Card */}
        <nav
          className="liquid-glass-card"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(1rem, 3vw, 2.5rem)',
            padding: 'clamp(1rem, 2vw, 1.25rem) clamp(1.5rem, 4vw, 3rem)',
            borderRadius: '28px',
            overflow: 'hidden',
            
            // Liquid glass effect - Safari compatible
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            
            // Drop shadow
            filter: 'drop-shadow(-6px -8px 32px rgba(0, 0, 0, 0.3))',
            
            // Very subtle background tint - almost invisible
            background: 'rgba(255, 255, 255, 0.01)',
          }}
        >
          {/* Inner glow/border effect - matches background */}
          <div
            style={{
              content: '""',
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              overflow: 'hidden',
              borderRadius: '28px',
              boxShadow: `
                inset 3px 3px 0px -3px rgba(76, 86, 76, 0.5),
                inset -2px -2px 0px -2px rgba(76, 86, 76, 0.25),
                inset 0 0 10px 1px rgba(76, 86, 76, 0.4)
              `,
              pointerEvents: 'none',
            }}
          />

          {/* Navigation Items */}
          {items.map((item) => {
            const isActive = activeSection.toLowerCase() === item.label.toLowerCase();
            
            return (
              <button
                key={item.label}
                onClick={() => handleNavigate(item.link)}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  background: isActive ? 'rgba(194, 168, 74, 0.15)' : 'transparent',
                  border: 'none',
                  color: isActive ? '#C2A84A' : 'white',
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                  fontWeight: isActive ? '600' : '500',
                  cursor: 'pointer',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '14px',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  textShadow: isActive 
                    ? '0 1px 4px rgba(194, 168, 74, 0.6)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.6)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  // Reset to initial state based on whether button is active
                  e.currentTarget.style.background = isActive ? 'rgba(194, 168, 74, 0.15)' : 'transparent';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default LiquidGlassNav;
