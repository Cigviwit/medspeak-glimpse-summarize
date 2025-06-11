
import { Mic } from "lucide-react";

const Header = () => {
  return (
    <header className="relative w-full backdrop-blur-xl bg-white/[0.02] border-b border-white/[0.05] sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative p-3 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-white/10 shadow-lg">
              <Mic className="h-7 w-7 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl animate-glow-pulse" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white font-inter tracking-tight">
                MedSpeak{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  TL;DR
                </span>
              </h1>
              <p className="text-sm text-white/60 font-inter font-medium">
                Voice-powered medical summaries
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
