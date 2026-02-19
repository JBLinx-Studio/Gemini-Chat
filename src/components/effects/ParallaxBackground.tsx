import React from 'react';

const ParallaxBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Solid base background */}
      <div className="absolute inset-0 bg-zinc-950"></div>

      {/* Subtle ambient glow - no animations for performance */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/10 to-amber-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/8 to-teal-500/5 blur-3xl rounded-full"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 146, 60, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}></div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
