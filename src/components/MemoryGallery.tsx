import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

const MemoryGallery = () => {
  const memories = [
    {
      image: memory1,
      caption: "Our first walk together"
    },
    {
      image: memory2,
      caption: "Coffee dates and conversations"
    },
    {
      image: memory3,
      caption: "The flowers I should bring you"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These moments remind me of how lucky I am to have you in my life
          </p>
          <div className="w-24 h-1 bg-gradient-romantic mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-romantic transition-all duration-500 transform hover:scale-105">
                <img
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg font-medium text-center">{memory.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;