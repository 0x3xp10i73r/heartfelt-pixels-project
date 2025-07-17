import { Card } from "@/components/ui/card";

const MessageSection = () => {
  return (
    <section id="message" className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            From My Heart to Yours
          </h2>
          <div className="w-24 h-1 bg-gradient-romantic mx-auto rounded-full"></div>
        </div>

        <Card className="p-8 md:p-12 shadow-soft bg-card/80 backdrop-blur-sm border-border/50 animate-scale-in">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-xl leading-relaxed mb-6 text-center font-medium text-primary">
              My Dearest,
            </p>
            
            <p className="mb-6 leading-relaxed text-lg">
              I've been thinking about what happened, and I can't stop replaying it in my mind. 
              I know I hurt you, and that's the last thing I ever wanted to do. You deserve so much better than my thoughtless words and actions.
            </p>

            <p className="mb-6 leading-relaxed text-lg">
              What we have is precious to me – more precious than I've ever been able to express. 
              You bring light into my world in ways you probably don't even realize. Your laugh, 
              your kindness, the way you see the good in everything... you make me want to be better.
            </p>

            <p className="mb-6 leading-relaxed text-lg">
              I know saying "I'm sorry" isn't enough to undo the hurt, but please know that it comes 
              from the deepest part of my heart. I'm committed to learning from this, to listening better, 
              and to being the partner you deserve.
            </p>

            <p className="text-xl text-center font-medium text-primary mt-8">
              I love you more than words can say, and I hope you'll give me the chance to show you that every day moving forward.
            </p>

            <p className="text-center mt-8 text-lg italic text-muted-foreground">
              Forever yours,<br />
              <span className="text-primary font-medium">Your Loving Partner</span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MessageSection;