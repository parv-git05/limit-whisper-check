
import React from "react";
import { Link } from "react-router-dom";
import { 
  Home, Store, Users, Wheat, FileText, MessageSquare,
  CloudRain, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { themeColors } from "@/lib/theme";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarItems = [
  { name: "Home", icon: Home, path: "/dashboard" },
  { name: "Markets", icon: Store, path: "/markets" },
  { name: "Dealers", icon: Users, path: "/dealers" },
  { name: "Crops", icon: Wheat, path: "/crops" },
  { name: "Policies", icon: FileText, path: "/policies" },
  { name: "Suggestions", icon: MessageSquare, path: "/suggestions" },
  { name: "Weather", icon: CloudRain, path: "/weather" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      
      <aside 
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-soil/95 text-ivory transform transition-transform duration-300 ease-in-out shadow-xl md:shadow-none md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:z-0`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <div className="font-semibold text-lg text-wheat">Kisan Direct</div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white md:hidden"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="p-2">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-white/10 transition-colors text-sm font-medium"
                  onClick={onClose}
                >
                  <item.icon className="h-5 w-5 text-wheat" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
