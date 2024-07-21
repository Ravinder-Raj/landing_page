import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import Aos from 'aos'; // Import AOS

interface SmallCardProps {
    icon: string;
    title: string;
    description: string;
    iconSize?: string; // Add optional iconSize prop
  }

const SmallCard: React.FC<SmallCardProps> = ({ icon, title, description, iconSize = "60px" }) => {
    useEffect(() => {
        Aos.init({ duration: 800 }); // Initialize AOS
       
      }, []);
    
  return (
    <Card data-aos="fade-down" className="w-96 p-2 border-none text-black rounded-lg shadow-lg bg-navbar">
      <CardHeader className="flex items-center space-x-2">
        <div className="flex flex-col">
          <div className="flex">
            <CardTitle className="text-2xl font-medium flex ">
            <span className="material-symbols-outlined" style={{ fontSize: iconSize, lineHeight: iconSize, width: iconSize, height: iconSize }}>
          {icon}
        </span>
              <p className="mt-3">{title}</p>
            </CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-500">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default SmallCard;
