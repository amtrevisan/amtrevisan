const PlantSeparator = () => {
  return (
    <div className="relative h-32 bg-secondary overflow-hidden">
      {/* Botanical pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%2344624A" stroke-width="2"%3E%3Cpath d="M50 20 Q 35 40 30 60 M50 20 Q 65 40 70 60 M50 20 L 50 70 M30 60 Q 40 65 50 60 M70 60 Q 60 65 50 60 M40 35 Q 45 40 50 35 M60 35 Q 55 40 50 35"/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '80px 80px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-x'
        }}></div>
      </div>
      
      {/* Center botanical accent */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="60" height="60" viewBox="0 0 100 100" className="text-accent/30">
          <g fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M50 20 Q 35 40 30 60 M50 20 Q 65 40 70 60 M50 20 L 50 70 M30 60 Q 40 65 50 60 M70 60 Q 60 65 50 60 M40 35 Q 45 40 50 35 M60 35 Q 55 40 50 35" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PlantSeparator;
