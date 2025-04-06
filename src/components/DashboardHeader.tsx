
import React from "react";
import { User, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { themeColors } from "@/lib/theme";

interface DashboardHeaderProps {
  username: string;
  onLogout: () => void;
  onMenuToggle: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  username, 
  onLogout,
  onMenuToggle
}) => {
  return (
    <header className="bg-gradient-to-r from-soil to-leaf/90 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Button 
              variant="ghost" 
              className="md:hidden text-white" 
              size="icon"
              onClick={onMenuToggle}
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                KISAN DIRECT MARKET
              </h1>
              <p className="text-sm md:text-base text-ivory/80">
                Empowering Farmers with Direct Market Access
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <User className="h-4 w-4" />
              <span className="text-sm font-medium">Welcome, {username}!</span>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20 gap-1"
              onClick={onLogout}
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden md:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
