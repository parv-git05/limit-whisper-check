
import React from "react";
import { Store, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MarketProps {
  id: string;
  name: string;
  location: string;
  date: string;
  crops: string[];
}

const MarketCard: React.FC<MarketProps> = ({ id, name, location, date, crops }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-leaf/10 hover:border-leaf">
      <div className="bg-leaf/10 h-3" />
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="bg-leaf/10 p-2 rounded-lg">
            <Store className="h-5 w-5 text-leaf" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">{name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Available Crops:</p>
          <div className="flex flex-wrap gap-1">
            {crops.map((crop) => (
              <span
                key={crop}
                className="px-2 py-1 bg-leaf/10 text-leaf text-xs rounded-full"
              >
                {crop}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50">
        <Button className="w-full bg-leaf hover:bg-leaf/90">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default MarketCard;
