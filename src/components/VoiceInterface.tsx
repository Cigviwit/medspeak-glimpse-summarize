
import { useState } from "react";
import { Mic } from "lucide-react";

const VoiceInterface = () => {
  const [isListening, setIsListening] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const sampleText = "The pathophysiology of myocardial infarction involves the rupture or erosion of an atherosclerotic plaque, leading to thrombus formation and subsequent occlusion of a coronary artery. This results in myocardial ischemia and, if prolonged, myocardial necrosis. The extent of myocardial damage depends on the duration of occlusion, the presence of collateral circulation, and the metabolic demands of the affected myocardium.";

  const sampleSummary = "Heart attacks occur when blood clots block coronary arteries after plaque rupture, causing heart muscle death. Damage severity depends on blockage duration and backup blood supply.";

  const handleMicClick = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate starting to listen
      setTimeout(() => {
        setIsListening(false);
        setHasContent(true);
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Microphone Button */}
      <div className="flex flex-col items-center space-y-6">
        <button
          onClick={handleMicClick}
          className={`relative p-8 rounded-full transition-all duration-300 transform hover:scale-105 ${
            isListening
              ? "bg-red-500 animate-pulse-soft shadow-lg shadow-red-500/25"
              : "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
          }`}
        >
          <Mic 
            className={`h-12 w-12 text-white transition-transform duration-300 ${
              isListening ? "animate-float" : ""
            }`} 
          />
          {isListening && (
            <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping" />
          )}
        </button>
        
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            {isListening ? "Listening..." : "Tap to Speak"}
          </h2>
          <p className="text-muted-foreground">
            {isListening 
              ? "Speak your medical text now" 
              : "Dictate text from medical textbooks"
            }
          </p>
        </div>
      </div>

      {/* Content Areas */}
      {(hasContent || isListening) && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Dictated Text */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full" />
              Dictated Text
            </h3>
            <div className="space-y-3">
              {isListening ? (
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded shimmer-loading" />
                  <div className="h-4 bg-muted rounded shimmer-loading" style={{ animationDelay: "0.2s" }} />
                  <div className="h-4 bg-muted rounded shimmer-loading w-3/4" style={{ animationDelay: "0.4s" }} />
                </div>
              ) : (
                <p className="text-foreground leading-relaxed">
                  {sampleText}
                </p>
              )}
            </div>
          </div>

          {/* TL;DR Summary */}
          <div className="bg-gradient-to-br from-primary/5 to-medical-100/50 border border-primary/20 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse-soft" />
              TL;DR Summary
            </h3>
            <div className="space-y-3">
              {isListening ? (
                <div className="space-y-2">
                  <div className="h-4 bg-primary/10 rounded shimmer-loading" />
                  <div className="h-4 bg-primary/10 rounded shimmer-loading w-4/5" style={{ animationDelay: "0.3s" }} />
                  <div className="h-4 bg-primary/10 rounded shimmer-loading w-2/3" style={{ animationDelay: "0.6s" }} />
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed font-medium">
                    {sampleSummary}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>85% compression</span>
                    <span>2.3s processing</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceInterface;
