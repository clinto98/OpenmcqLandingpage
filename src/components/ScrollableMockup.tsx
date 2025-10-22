import { useRef } from "react";

interface ScrollableMockupProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const ScrollableMockup = ({ imageUrl, alt, className = "" }: ScrollableMockupProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative ${className}`}>
      {/* iPhone 16 Pro Max Frame with 3D effects */}
      <div className="relative w-[230px] h-[450px]  md:w-[250px] md:h-[550px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl border-[6px] border-gray-700 transform perspective-1000 rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-[-8deg] hover:rotate-x-[8deg] transition-all duration-500">
        {/* 3D depth effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-[3rem] transform translate-z-[-10px]"></div>
        
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 mt-2 md:w-32 h-8 bg-black rounded-full z-20 shadow-lg"></div>
        
        {/* Screen with scrollable content */}
        <div 
          ref={scrollRef}
          className="relative w-full h-full bg-white rounded-[2.5rem] overflow-y-scroll overflow-x-hidden scroll-smooth mobile-scrollbar mobile-scroll pt-6"
          style={{
            background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={imageUrl} 
            alt={alt}
            className="w-full h-auto block"
          />
        </div>
        
        {/* Side buttons */}
        <div className="absolute left-[-2px] top-20 w-1 h-8 bg-gray-600 rounded-r-sm"></div>
        <div className="absolute left-[-2px] top-32 w-1 h-8 bg-gray-600 rounded-r-sm"></div>
        <div className="absolute left-[-2px] top-44 w-1 h-8 bg-gray-600 rounded-r-sm"></div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default ScrollableMockup;
