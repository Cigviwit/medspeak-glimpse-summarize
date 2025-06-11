
import { Mic } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Mic className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                MedSpeak <span className="text-primary">TL;DR</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Voice-powered medical summaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
