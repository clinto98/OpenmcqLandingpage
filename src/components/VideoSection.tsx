import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative aspect-video bg-hero rounded-3xl overflow-hidden group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop"
            alt="Learning environment"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-hero fill-hero ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
