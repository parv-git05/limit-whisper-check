
import React from "react";
import { themeColors } from "@/lib/theme";

const AuthBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Fixed background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop')",
          filter: "brightness(0.85)"
        }}
      />
      
      {/* Overlay with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" 
      />
      
      {/* Animated floating elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-leaf/10 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-wheat/10 animate-pulse" 
        style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-sky/10 animate-pulse"
        style={{ animationDelay: "2s" }}></div>
      
      {/* Bottom grain-like texture */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-soil/30 to-transparent"></div>
    </div>
  );
};

export default AuthBackground;
