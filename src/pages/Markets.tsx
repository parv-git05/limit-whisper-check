
import React, { useState } from "react";
import { Search } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import MarketCard from "@/components/MarketCard";
import { Input } from "@/components/ui/input";

// Sample market data
const marketData = [
  {
    id: "1",
    name: "Nashik Farmers Market",
    location: "Nashik, Maharashtra",
    date: "April 15, 2025",
    crops: ["Onions", "Tomatoes", "Grapes"]
  },
  {
    id: "2",
    name: "Pune Agricultural Expo",
    location: "Pune, Maharashtra",
    date: "April 18, 2025",
    crops: ["Wheat", "Rice", "Sugarcane"]
  },
  {
    id: "3",
    name: "Delhi Organic Farmers Meet",
    location: "Delhi",
    date: "April 22, 2025",
    crops: ["Organic Vegetables", "Pulses", "Millets"]
  },
  {
    id: "4",
    name: "Bangalore Agri Trade Show",
    location: "Bangalore, Karnataka",
    date: "May 3, 2025",
    crops: ["Coffee", "Spices", "Rice"]
  },
  {
    id: "5",
    name: "Kolkata Rural Market",
    location: "Kolkata, West Bengal",
    date: "May 10, 2025",
    crops: ["Rice", "Jute", "Tea"]
  },
  {
    id: "6",
    name: "Lucknow Mandi Parishad",
    location: "Lucknow, Uttar Pradesh",
    date: "May 15, 2025",
    crops: ["Wheat", "Sugarcane", "Potatoes"]
  }
];

const Markets = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const username = "Rajesh Kumar"; // This would come from authentication context
  
  const handleLogout = () => {
    // Handle logout logic here
    window.location.href = "/login";
  };
  
  const filteredMarkets = marketData.filter(market => 
    market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    market.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    market.crops.some(crop => crop.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader 
        username={username}
        onLogout={handleLogout}
        onMenuToggle={() => setSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold">Agricultural Markets</h2>
                <p className="text-muted-foreground">Discover markets to sell your produce directly</p>
              </div>
              
              <div className="w-full md:w-80">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search markets by name, location or crop..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            {/* Background element for visual appeal */}
            <div className="absolute top-0 right-0 w-1/3 h-64 bg-leaf/5 rounded-bl-full -z-10"></div>
            
            {filteredMarkets.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No markets found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMarkets.map((market) => (
                  <MarketCard
                    key={market.id}
                    id={market.id}
                    name={market.name}
                    location={market.location}
                    date={market.date}
                    crops={market.crops}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Markets;
