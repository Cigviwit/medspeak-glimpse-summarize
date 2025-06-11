
import Header from "@/components/Header";
import VoiceInterface from "@/components/VoiceInterface";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-6 py-16">
          <VoiceInterface />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
