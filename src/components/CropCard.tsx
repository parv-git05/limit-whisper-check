
import React from "react";
import { Wheat, BarChart3, CalendarDays, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CropProps {
  id: string;
  name: string;
  season: string;
  price: number;
  marketTrend: "up" | "down" | "stable";
  description: string;
}

const CropCard: React.FC<CropProps> = ({ id, name, season, price, marketTrend, description }) => {
  const trendColors = {
    up: "text-green-500",
    down: "text-red-500",
    stable: "text-amber-500"
  };

  const trendIcons = {
    up: <BarChart3 className={`h-5 w-5 ${trendColors[marketTrend]}`} />,
    down: <BarChart3 className={`h-5 w-5 ${trendColors[marketTrend]}`} />,
    stable: <BarChart3 className={`h-5 w-5 ${trendColors[marketTrend]}`} />
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-wheat/20 hover:border-wheat">
      <div className="bg-wheat/20 h-3" />
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-wheat/20 p-2 rounded-lg">
              <Wheat className="h-5 w-5 text-wheat" />
            </div>
            <h3 className="font-semibold text-lg">{name}</h3>
          </div>
          <div className="flex items-center gap-1.5">
            {trendIcons[marketTrend]}
            <span className={`text-sm font-medium ${trendColors[marketTrend]}`}>
              {marketTrend === "up" ? "Rising" : marketTrend === "down" ? "Falling" : "Stable"}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>Season</span>
            </div>
            <p className="text-sm font-medium">{season}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <IndianRupee className="h-3.5 w-3.5" />
              <span>Price</span>
            </div>
            <p className="text-sm font-medium">₹{price}/quintal</p>
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CropCard;
