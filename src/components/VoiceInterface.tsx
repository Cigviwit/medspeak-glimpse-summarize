
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
    <div className="relative w-full max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground font-space leading-tight">
            From medical text
            <br />
            <span className="bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              to clear insights
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Simplify complex medical knowledge with AI-powered summaries
          </p>
        </div>

        {/* Main Action Button */}
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={handleMicClick}
            className={`group relative p-8 md:p-12 rounded-full transition-all duration-500 transform hover:scale-105 ${
              isListening
                ? "bg-gradient-to-r from-red-500 to-pink-500 shadow-2xl shadow-red-500/50"
                : "bg-gradient-to-r from-primary to-orange-400 shadow-2xl shadow-primary/50 hover:shadow-primary/70"
            }`}
          >
            <Mic 
              className={`h-12 w-12 md:h-16 md:w-16 text-white transition-all duration-300 ${
                isListening ? "animate-pulse" : "group-hover:scale-110"
              }`} 
            />
            {isListening && (
              <>
                <div className="absolute inset-0 rounded-full border-4 border-red-300/50 animate-ping" />
                <div className="absolute inset-0 rounded-full border-2 border-red-200/30 animate-ping animation-delay-75" />
              </>
            )}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-space">
              {isListening ? "Listening..." : "Get started for free"}
            </h3>
            <p className="text-muted-foreground font-inter text-lg">
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
        <div className="grid gap-8 lg:grid-cols-2 mt-16">
          {/* Input Card */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-xl">
                  <Mic className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-space">
                  Voice Input
                </h3>
              </div>
              <div className="space-y-4">
                {isListening ? (
                  <div className="space-y-3">
                    <div className="h-4 bg-muted/30 rounded-lg shimmer-loading" />
                    <div className="h-4 bg-muted/30 rounded-lg shimmer-loading w-4/5" />
                    <div className="h-4 bg-muted/30 rounded-lg shimmer-loading w-3/5" />
                    <div className="flex gap-2 mt-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-typing-dots"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-typing-dots" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-typing-dots" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                ) : (
                  <p className="text-foreground/90 leading-relaxed font-inter">
                    {sampleText}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Output Card */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-xl">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-space">
                  AI Summary
                </h3>
              </div>
              <div className="space-y-4">
                {isListening ? (
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/20 rounded-lg shimmer-loading" />
                    <div className="h-4 bg-primary/20 rounded-lg shimmer-loading w-3/4" />
                    <div className="h-4 bg-primary/20 rounded-lg shimmer-loading w-1/2" />
                    <div className="flex justify-center mt-6">
                      <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full"></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-foreground/90 leading-relaxed font-inter text-lg font-medium">
                      {sampleSummary}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground bg-muted/20 rounded-xl p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>85% compression</span>
                      </div>
                      <span>2.3s processing</span>
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
