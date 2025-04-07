
import React, { useState } from "react";
import { Search, MapPin, Calendar, Cloud, Droplets, Wind, Leaf } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Weather = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [location, setLocation] = useState("Nashik, Maharashtra");
  const username = "Rajesh Kumar"; // This would come from authentication context
  
  const handleLogout = () => {
    // Handle logout logic here
    window.location.href = "/login";
  };
  
  // Sample weather forecast data
  const forecastData = [
    { day: "Today", temp: 28, condition: "Sunny", humidity: 65, wind: 12 },
    { day: "Tomorrow", temp: 27, condition: "Partly Cloudy", humidity: 70, wind: 10 },
    { day: "Wednesday", temp: 29, condition: "Sunny", humidity: 60, wind: 8 },
    { day: "Thursday", temp: 26, condition: "Cloudy", humidity: 75, wind: 15 },
    { day: "Friday", temp: 25, condition: "Rain", humidity: 80, wind: 20 }
  ];
  
  // Sample crop weather advice
  const cropAdvice = [
    { crop: "Wheat", advice: "Current conditions are favorable for wheat cultivation." },
    { crop: "Rice", advice: "Monitor water levels as light rain is expected later this week." },
    { crop: "Tomatoes", advice: "Consider providing shade as temperatures are expected to rise." },
    { crop: "Cotton", advice: "Favorable conditions for growth, maintain regular irrigation." }
  ];
  
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
                <h2 className="text-2xl font-bold">Weather Forecast</h2>
                <p className="text-muted-foreground">Plan your agricultural activities with accurate weather data</p>
              </div>
              
              <div className="relative w-full md:w-80">
                <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search location..."
                  className="pl-9"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            
            {/* Current Weather */}
            <Card className="mb-8 overflow-hidden border-sky/10 bg-gradient-to-r from-sky-50 to-blue-50">
              <div className="relative">
                {/* Weather background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1902&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                
                <CardContent className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2 flex items-center">
                        <MapPin className="h-5 w-5 mr-1" />
                        {location}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div>
                        <div className="flex items-center gap-2">
                          <Cloud className="h-7 w-7 text-sky" />
                          <span className="text-4xl font-bold">28°C</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Partly Cloudy</p>
                      </div>
                      
                      <div className="border-l border-border pl-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-sky" />
                          <span>Humidity: 65%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Wind className="h-4 w-4 text-sky" />
                          <span>Wind: 12 km/h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
            
            {/* 5-Day Forecast */}
            <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {forecastData.map((day, index) => (
                <Card key={index} className="border-sky/10 hover:border-sky transition-colors">
                  <CardContent className="p-4 text-center">
                    <p className="font-medium mb-2">{day.day}</p>
                    <div className="flex justify-center my-3">
                      {day.condition === "Sunny" && <Cloud className="h-10 w-10 text-amber-400" />}
                      {day.condition === "Partly Cloudy" && <Cloud className="h-10 w-10 text-gray-400" />}
                      {day.condition === "Cloudy" && <Cloud className="h-10 w-10 text-gray-500" />}
                      {day.condition === "Rain" && <Cloud className="h-10 w-10 text-blue-400" />}
                    </div>
                    <p className="text-xl font-bold mb-2">{day.temp}°C</p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>Humidity: {day.humidity}%</p>
                      <p>Wind: {day.wind} km/h</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Crop-specific Weather Advice */}
            <h3 className="text-xl font-semibold mb-4">Crop Weather Advisory</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cropAdvice.map((item, index) => (
                <Card key={index} className="border-leaf/10 hover:border-leaf transition-colors">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-lg mb-2 flex items-center">
                      <Leaf className="h-5 w-5 mr-2 text-leaf" />
                      {item.crop}
                    </h4>
                    <p className="text-muted-foreground">{item.advice}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">Weather data provided by Kisan Weather Service</p>
              <Button variant="outline" className="mt-2">
                Set Weather Alerts
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Weather;
