import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import MemoryGallery from "@/components/MemoryGallery";
import ForgivenessSection from "@/components/ForgivenessSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MessageSection />
      {/* <MemoryGallery /> */}
      <ForgivenessSection />
    </div>
  );
};

export default Index;
