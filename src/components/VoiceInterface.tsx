
import { useState } from "react";
import { Mic, Sparkles } from "lucide-react";

const VoiceInterface = () => {
  const [isListening, setIsListening] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const sampleText = "The pathophysiology of myocardial infarction involves the rupture or erosion of an atherosclerotic plaque, leading to thrombus formation and subsequent occlusion of a coronary artery. This results in myocardial ischemia and, if prolonged, myocardial necrosis. The extent of myocardial damage depends on the duration of occlusion, the presence of collateral circulation, and the metabolic demands of the affected myocardium.";

  const sampleSummary = "Heart attacks occur when blood clots block coronary arteries after plaque rupture, causing heart muscle death. Damage severity depends on blockage duration and backup blood supply.";

  const handleMicClick = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setHasContent(true);
      }, 3000);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto space-y-8 md:space-y-12 pt-20 md:pt-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 md:space-y-8 px-4">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-inter leading-tight tracking-tight">
            From medical text
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              to clear insights
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 font-inter max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Simplify complex medical knowledge with AI-powered summaries
          </p>
        </div>

        {/* Main Action Button */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          <button
            onClick={handleMicClick}
            className={`group relative p-6 md:p-8 lg:p-12 rounded-full transition-all duration-700 transform active:scale-95 ${
              isListening
                ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-2xl shadow-purple-500/50 animate-breathe"
                : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70"
            }`}
          >
            <Mic 
              className={`h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 text-white transition-all duration-300 ${
                isListening ? "animate-pulse" : "group-hover:scale-110"
              }`} 
            />
            {isListening && (
              <>
                <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping" />
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" style={{animationDelay: '0.5s'}} />
              </>
            )}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </button>
          
          <div className="text-center space-y-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white font-inter tracking-tight">
              {isListening ? "Listening..." : "Get started for free"}
            </h3>
            <p className="text-white/60 font-inter text-base md:text-lg font-medium">
              {isListening 
                ? "Speak your medical text now" 
                : "Tap the microphone and start speaking"
              }
            </p>
          </div>
        </div>
      </div>

      {/* Content Cards */}
      {(hasContent || isListening) && (
        <div className="grid gap-4 md:gap-6 lg:gap-8 lg:grid-cols-2 mt-8 md:mt-16 px-4">
          {/* Input Card */}
          <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-1.5 md:p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg md:rounded-xl border border-white/10">
                  <Mic className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white font-inter tracking-tight">
                  Voice Input
                </h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {isListening ? (
                  <div className="space-y-2 md:space-y-3">
                    <div className="h-3 md:h-4 bg-white/5 rounded-lg shimmer-loading" />
                    <div className="h-3 md:h-4 bg-white/5 rounded-lg shimmer-loading w-4/5" />
                    <div className="h-3 md:h-4 bg-white/5 rounded-lg shimmer-loading w-3/5" />
                    <div className="flex gap-2 mt-4">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-typing-dots"></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-typing-dots" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-typing-dots" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                ) : (
                  <p className="text-white/90 leading-relaxed font-inter text-sm md:text-base">
                    {sampleText}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Output Card */}
          <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 relative overflow-hidden group border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-1.5 md:p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg md:rounded-xl border border-white/10">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white font-inter tracking-tight">
                  AI Summary
                </h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {isListening ? (
                  <div className="space-y-2 md:space-y-3">
                    <div className="h-3 md:h-4 bg-purple-500/20 rounded-lg shimmer-loading" />
                    <div className="h-3 md:h-4 bg-purple-500/20 rounded-lg shimmer-loading w-3/4" />
                    <div className="h-3 md:h-4 bg-purple-500/20 rounded-lg shimmer-loading w-1/2" />
                    <div className="flex justify-center mt-4 md:mt-6">
                      <div className="animate-spin h-5 w-5 md:h-6 md:w-6 border-2 border-purple-400 border-t-transparent rounded-full"></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-white/90 leading-relaxed font-inter text-base md:text-lg font-medium">
                      {sampleSummary}
                    </p>
                    <div className="flex items-center justify-between text-xs md:text-sm text-white/60 bg-white/5 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full"></div>
                        <span className="font-medium">85% compression</span>
                      </div>
                      <span className="font-medium">2.3s processing</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceInterface;
