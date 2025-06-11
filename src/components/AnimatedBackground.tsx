
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-transparent animate-gradient-shift" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
