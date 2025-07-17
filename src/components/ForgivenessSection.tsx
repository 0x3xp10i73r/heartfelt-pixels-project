import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ForgivenessSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { toast } = useToast();

  const handleForgiveClick = () => {
    setIsClicked(true);
    toast({
      title: "💕 You're Amazing!",
      description: "Thank you for giving me another chance. I love you so much!",
      duration: 5000,
    });
  };

  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-4xl mx-auto text-center">
        {!isClicked ? (
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              Can You Forgive Me?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I know I don't deserve it, but I'm hoping with all my heart that you'll give me another chance
            </p>
            
            <Button 
              variant="forgive" 
              size="xl"
              onClick={handleForgiveClick}
              className="mx-auto"
            >
              <Heart className="w-6 h-6" />
              I Forgive You
              <Sparkles className="w-6 h-6" />
            </Button>
          </div>
        ) : (
          <Card className="p-12 shadow-glow bg-gradient-romantic border-0 animate-scale-in">
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-6">
                <Heart className="w-12 h-12 text-white animate-bounce" />
                <Sparkles className="w-12 h-12 text-white animate-bounce" style={{ animationDelay: '0.2s' }} />
                <Gift className="w-12 h-12 text-white animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
              
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                Thank You, My Love!
              </h3>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                You've just made me the happiest person in the world. I promise to spend every day 
                showing you how much you mean to me. Your forgiveness is the greatest gift I could ever receive.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4">
                  <Heart className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white/90 font-medium">I promise to listen better</p>
                </div>
                <div className="text-center p-4">
                  <Sparkles className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white/90 font-medium">I promise to be more thoughtful</p>
                </div>
                <div className="text-center p-4">
                  <Gift className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white/90 font-medium">I promise to cherish you always</p>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ForgivenessSection;