
import React from "react";
import { Cloud, CloudRain, Sun, Thermometer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WeatherProps {
  location: string;
  temperature: number;
  condition: "sunny" | "cloudy" | "rainy" | "stormy";
  humidity: number;
  windSpeed: number;
  date: string;
}

const WeatherCard: React.FC<WeatherProps> = ({
  location,
  temperature,
  condition,
  humidity,
  windSpeed,
  date
}) => {
  const getWeatherIcon = () => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-12 w-12 text-amber-400" />;
      case "cloudy":
        return <Cloud className="h-12 w-12 text-gray-400" />;
      case "rainy":
        return <CloudRain className="h-12 w-12 text-blue-400" />;
      case "stormy":
        return <CloudRain className="h-12 w-12 text-indigo-500" />;
      default:
        return <Sun className="h-12 w-12 text-amber-400" />;
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-sky/10 hover:border-sky">
      <div className="bg-sky/10 h-3" />
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg">{location}</h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
          <div>{getWeatherIcon()}</div>
        </div>
        
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold">{temperature}°C</span>
          <span className="text-sm text-muted-foreground ml-2 capitalize">{condition}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Humidity</div>
            <div className="text-base font-medium">{humidity}%</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Wind Speed</div>
            <div className="text-base font-medium">{windSpeed} km/h</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
