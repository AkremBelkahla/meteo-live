import React from 'react';
import { Droplets, Wind, MapPin, Thermometer, Gauge } from 'lucide-react';
import { WeatherIcon } from './WeatherIcon';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { weatherConditions, getWeatherColor } from '../utils/weatherTranslations';

interface WeatherCardProps {
  data: any;
  isLoading: boolean;
  error: Error | null;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 w-32 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-32 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600">
        Une erreur est survenue lors de la récupération des données météo.
      </div>
    );
  }

  if (!data) return null;

  const { location, current } = data;
  const localTime = new Date(location.localtime);
  const translatedCondition = weatherConditions[current.condition.text] || current.condition.text;
  const { icon: iconColor } = getWeatherColor(current.condition.code);
  const temperature = Math.round(current.temp_c); // Arrondir la température

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <MapPin className="h-6 w-6 text-blue-500 mr-2" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {location.name}, {location.country}
            </h2>
            <p className="text-gray-600">
              {format(localTime, "EEEE d MMMM yyyy, HH:mm", { locale: fr })}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <WeatherIcon code={current.condition.code} className={`h-24 w-24 ${iconColor}`} />
          <div className="ml-6">
            <div className="flex items-center">
              <Thermometer className="h-6 w-6 text-red-500 mr-2" />
              <p className="text-5xl font-bold text-gray-800">{temperature}°C</p>
            </div>
            <p className="text-xl text-gray-600 mt-2">{translatedCondition}</p>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex items-center bg-blue-50/50 backdrop-blur-sm px-6 py-4 rounded-xl">
            <Droplets className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Humidité</p>
              <p className="text-xl font-semibold">{current.humidity}%</p>
            </div>
          </div>

          <div className="flex items-center bg-blue-50/50 backdrop-blur-sm px-6 py-4 rounded-xl">
            <Wind className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Vent</p>
              <p className="text-xl font-semibold">{Math.round(current.wind_kph)} km/h</p>
            </div>
          </div>

          {current.air_quality && (
            <div className="flex items-center bg-green-50/50 backdrop-blur-sm px-6 py-4 rounded-xl">
              <Gauge className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Qualité de l'air</p>
                <p className="text-xl font-semibold text-green-600">
                  {current.air_quality['us-epa-index']}/10
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};