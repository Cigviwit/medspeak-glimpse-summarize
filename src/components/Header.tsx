
import { useState, useEffect } from "react";
import { Mic } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-white/[0.02] border-b border-white/[0.05] shadow-2xl shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative p-2 md:p-3 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl border border-white/10 shadow-lg">
              <Mic className="h-5 w-5 md:h-7 md:w-7 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl md:rounded-2xl animate-glow-pulse" />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-white font-inter tracking-tight">
                MedSpeak{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  TL;DR
                </span>
              </h1>
              <p className="text-xs md:text-sm text-white/60 font-inter font-medium">
                Voice-powered medical summaries
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium text-white/70 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-3 py-1 md:px-6 md:py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg md:rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-xs md:text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
