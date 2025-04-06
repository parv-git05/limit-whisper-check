
import React, { useState } from "react";
import { Calendar, CloudRain, CreditCard, FileText, Store, Wheat } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const username = "Rajesh Kumar"; // This would come from authentication context
  
  const handleLogout = () => {
    // Handle logout logic here
    window.location.href = "/login";
  };
  
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
            <h2 className="text-2xl font-bold mb-6">Welcome, {username}!</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Weather Summary */}
              <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CloudRain className="h-5 w-5 text-sky" />
                    Today's Weather
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">28°C</p>
                      <p className="text-sm text-muted-foreground">Partly Cloudy</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Humidity: 65%</p>
                      <p className="text-sm">Wind: 12 km/h</p>
                    </div>
                  </div>
                  <Button variant="link" className="text-sky p-0 h-auto mt-2">
                    Full forecast →
                  </Button>
                </CardContent>
              </Card>
              
              {/* Market Events */}
              <Card className="bg-gradient-to-br from-leaf-50/50 to-green-50/50 border-leaf/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Store className="h-5 w-5 text-leaf" />
                    Upcoming Markets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-leaf/10 text-leaf rounded-md p-1.5 text-sm font-medium">
                        15
                        <div className="text-xs">Apr</div>
                      </div>
                      <div>
                        <p className="font-medium">Nashik Farmers Market</p>
                        <p className="text-sm text-muted-foreground">10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-leaf/10 text-leaf rounded-md p-1.5 text-sm font-medium">
                        18
                        <div className="text-xs">Apr</div>
                      </div>
                      <div>
                        <p className="font-medium">Pune Agricultural Expo</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="link" className="text-leaf p-0 h-auto mt-2">
                    View all markets →
                  </Button>
                </CardContent>
              </Card>
              
              {/* Crop Prices */}
              <Card className="bg-gradient-to-br from-wheat-50/50 to-amber-50/50 border-wheat/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wheat className="h-5 w-5 text-wheat" />
                    Latest Crop Prices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Wheat</div>
                      <div className="font-semibold">₹2,100/quintal</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Rice</div>
                      <div className="font-semibold">₹1,950/quintal</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Soybean</div>
                      <div className="font-semibold">₹4,200/quintal</div>
                    </div>
                  </div>
                  <Button variant="link" className="text-amber-600 p-0 h-auto mt-2">
                    View all crops →
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Quick Links */}
              <Card className="col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Tools and shortcuts to help you</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <Button variant="outline" className="justify-start">
                    <Store className="mr-2 h-4 w-4" />
                    Find Dealers
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Market Calendar
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    View Government Policies
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Apply for Loan Schemes
                  </Button>
                </CardContent>
              </Card>
              
              {/* Recent Activity */}
              <Card className="col-span-1 lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest interactions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-muted w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                        <Store className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Market Inquiry</p>
                        <p className="text-sm text-muted-foreground">You inquired about the Pune Agricultural Market event.</p>
                        <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-muted w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                        <Wheat className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Crop Price Alert</p>
                        <p className="text-sm text-muted-foreground">Wheat prices increased by 3% in your region.</p>
                        <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-muted w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">New Policy Notification</p>
                        <p className="text-sm text-muted-foreground">Government announced new subsidy for organic farming.</p>
                        <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
