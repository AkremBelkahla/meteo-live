import React from 'react';
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  Cloudy,
} from 'lucide-react';

interface WeatherIconProps {
  code: number;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ code, className = "h-16 w-16" }) => {
  const getIcon = () => {
    // Codes basés sur la documentation de WeatherAPI
    if (code === 1000) return <Sun className={className} />;
    if (code >= 1003 && code <= 1009) return <Cloudy className={className} />;
    if (code >= 1150 && code <= 1201) return <CloudDrizzle className={className} />;
    if (code >= 1210 && code <= 1225) return <CloudSnow className={className} />;
    if (code >= 1273 && code <= 1282) return <CloudLightning className={className} />;
    if (code >= 1180 && code <= 1195) return <CloudRain className={className} />;
    return <Cloud className={className} />;
  };

  return getIcon();
};