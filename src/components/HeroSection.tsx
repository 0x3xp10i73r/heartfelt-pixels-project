import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-romantic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Romantic background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-1/4 left-1/4 w-6 h-6 text-primary/30 animate-float" />
        <Heart className="absolute top-3/4 right-1/4 w-4 h-4 text-primary-glow/40 animate-float-delayed" />
        <Heart className="absolute bottom-1/3 left-1/3 w-5 h-5 text-accent/30 animate-float" />
        <Heart className="absolute top-1/2 right-1/3 w-3 h-3 text-primary/20 animate-float-delayed" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-glow-pulse" />
        </div>
        
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
          I'm Sorry,<br />
          <span className="text-primary">My Love</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          I know I messed up, and words can't express how sorry I am. 
          You mean everything to me, and I want to make this right.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#message" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium shadow-romantic hover:shadow-glow transform hover:scale-105 transition-all duration-300"
          >
            Read My Letter
            <Heart className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;