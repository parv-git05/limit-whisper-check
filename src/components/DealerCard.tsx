
import React from "react";
import { User, Phone, Mail, Briefcase } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DealerProps {
  id: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  interests: string[];
}

const DealerCard: React.FC<DealerProps> = ({ id, name, phone, email, company, interests }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-sky/10 hover:border-sky">
      <div className="bg-sky/10 h-3" />
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="bg-sky/10 rounded-full p-2.5">
            <User className="h-5 w-5 text-sky" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">{name}</h3>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Briefcase className="h-3.5 w-3.5" />
              <span>{company}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{email}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Interested In:</p>
          <div className="flex flex-wrap gap-1">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-2 py-1 bg-sky/10 text-sky text-xs rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50">
        <Button className="w-full bg-sky hover:bg-sky/90">Contact Dealer</Button>
      </CardFooter>
    </Card>
  );
};

export default DealerCard;
