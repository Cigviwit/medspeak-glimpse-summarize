
import Header from "@/components/Header";
import VoiceInterface from "@/components/VoiceInterface";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-medical-50/30">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transform Medical Text into 
            <span className="text-primary"> Clear Summaries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simply speak any passage from medical textbooks and get instant, 
            AI-powered summaries that cut through complexity.
          </p>
        </div>

        <VoiceInterface />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
