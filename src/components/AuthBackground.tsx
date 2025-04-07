
import React, { useEffect } from "react";
import { themeColors } from "@/lib/theme";
import "../styles/authBackground.css";

const AuthBackground: React.FC = () => {
  useEffect(() => {
    // Create dynamic floating elements
    const createFloatingElements = () => {
      const container = document.querySelector(".floating-container");
      if (!container) return;

      for (let i = 0; i < 10; i++) {
        const element = document.createElement("div");
        element.className = "floating-element";
        
        // Random size between 30px and 80px
        const size = Math.random() * 50 + 30;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        
        // Random position
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        element.style.animationDuration = `${duration}s`;
        
        // Random delay
        const delay = Math.random() * 5;
        element.style.animationDelay = `${delay}s`;
        
        // Random opacity
        element.style.opacity = `${Math.random() * 0.2 + 0.1}`;
        
        container.appendChild(element);
      }
    };

    createFloatingElements();
    
    // Cleanup
    return () => {
      const container = document.querySelector(".floating-container");
      if (container) {
        const elements = container.querySelectorAll(".floating-element");
        elements.forEach(el => el.remove());
      }
    };
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Fixed background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80 farm-background" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop')",
        }}
      />
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      
      {/* Container for JavaScript-generated floating elements */}
      <div className="absolute inset-0 floating-container"></div>
      
      {/* Fixed animated elements with pure CSS */}
      <div className="leaf-1"></div>
      <div className="leaf-2"></div>
      <div className="seed-1"></div>
      <div className="seed-2"></div>
      
      {/* Bottom grain-like texture */}
      <div className="absolute bottom-0 left-0 right-0 h-32 soil-texture"></div>
      
      {/* Light rays */}
      <div className="light-rays"></div>
    </div>
  );
};

export default AuthBackground;
