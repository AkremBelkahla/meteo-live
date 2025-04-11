import React from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';
import { getWeatherColor } from '../utils/weatherTranslations';

interface WeatherBackgroundProps {
  code: number;
}

export const WeatherBackground: React.FC<WeatherBackgroundProps> = ({ code }) => {
  const { icon: iconColor } = getWeatherColor(code);
  
  const getBackgroundElements = () => {
    const elements = [];
    const count = 3; // Moins d'éléments pour un effet plus subtil

    for (let i = 0; i < count; i++) {
      const Icon = getIconByCode(code);
      elements.push(
        <div
          key={i}
          className={`absolute opacity-5 ${iconColor}`}
          style={{
            animation: `float ${30 + i * 10}s linear infinite`, // Animation plus lente
            top: `${20 + i * 25}%`,
            left: `-200px`,
            transform: `scale(${2 + i * 1})`, // Icônes plus grandes
          }}
        >
          <Icon size={192} /> {/* Taille augmentée */}
        </div>
      );
    }
    return elements;
  };

  const getIconByCode = (code: number) => {
    if (code === 1000) return Sun;
    if (code >= 1003 && code <= 1009) return Cloud;
    if (code >= 1150 && code <= 1201) return CloudRain;
    if (code >= 1210 && code <= 1225) return CloudSnow;
    if (code >= 1273 && code <= 1282) return CloudLightning;
    return Cloud;
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {getBackgroundElements()}
    </div>
  );
};