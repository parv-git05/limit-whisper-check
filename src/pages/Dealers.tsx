
import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import DealerCard from "@/components/DealerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sample dealer data
const dealerData = [
  {
    id: "1",
    name: "Raj Patel",
    phone: "+91 98765 43210",
    email: "raj@example.com",
    company: "Agro Buyers Ltd.",
    interests: ["Wheat", "Rice", "Pulses"]
  },
  {
    id: "2",
    name: "Anita Sharma",
    phone: "+91 87654 32109",
    email: "anita@example.com",
    company: "Fresh Produce Co.",
    interests: ["Vegetables", "Fruits"]
  },
  {
    id: "3",
    name: "Vijay Mehta",
    phone: "+91 76543 21098",
    email: "vijay@example.com",
    company: "Organic Foods Inc.",
    interests: ["Organic Vegetables", "Organic Fruits", "Millets"]
  },
  {
    id: "4",
    name: "Meera Kapoor",
    phone: "+91 65432 10987",
    email: "meera@example.com",
    company: "Spice Traders",
    interests: ["Spices", "Herbs", "Tea"]
  },
  {
    id: "5",
    name: "Rajesh Singh",
    phone: "+91 54321 09876",
    email: "rajesh@example.com",
    company: "Grain Exporters",
    interests: ["Wheat", "Barley", "Corn"]
  },
  {
    id: "6",
    name: "Priya Verma",
    phone: "+91 43210 98765",
    email: "priya@example.com",
    company: "Fresh Market",
    interests: ["Vegetables", "Fruits", "Dairy"]
  }
];

const Dealers = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const username = "Rajesh Kumar"; // This would come from authentication context
  
  const handleLogout = () => {
    // Handle logout logic here
    window.location.href = "/login";
  };
  
  const filteredDealers = dealerData.filter(dealer => 
    dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dealer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dealer.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()))
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
                <h2 className="text-2xl font-bold">Agricultural Dealers</h2>
                <p className="text-muted-foreground">Connect with buyers interested in your produce</p>
              </div>
              
              <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-grow md:w-80">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search dealers..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="flex-shrink-0">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
            
            {/* Background element for visual appeal */}
            <div className="absolute top-0 left-0 w-1/4 h-48 bg-sky/5 rounded-br-full -z-10"></div>
            
            {filteredDealers.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No dealers found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDealers.map((dealer) => (
                  <DealerCard
                    key={dealer.id}
                    id={dealer.id}
                    name={dealer.name}
                    phone={dealer.phone}
                    email={dealer.email}
                    company={dealer.company}
                    interests={dealer.interests}
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

export default Dealers;
