
import { Mic } from "lucide-react";

const Header = () => {
  return (
    <header className="relative w-full backdrop-blur-xl bg-card/20 border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl border border-primary/20 shadow-lg">
              <Mic className="h-7 w-7 text-primary" />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl animate-glow-pulse" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground font-space">
                MedSpeak <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">TL;DR</span>
              </h1>
              <p className="text-sm text-muted-foreground font-inter">
                Voice-powered medical summaries
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-orange-400 text-primary-foreground rounded-xl font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
