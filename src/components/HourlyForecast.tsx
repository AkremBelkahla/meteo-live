import React from 'react';
import { Clock } from 'lucide-react';
import { WeatherIcon } from './WeatherIcon';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { weatherConditions, getWeatherColor } from '../utils/weatherTranslations';

interface HourlyForecastProps {
  data: any;
  isLoading: boolean;
}

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
        <div className="flex gap-4 overflow-x-auto">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-none w-24">
              <div className="h-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!data?.forecast?.forecastday?.[0]?.hour) return null;

  const currentHour = new Date().getHours();
  const hourlyData = data.forecast.forecastday[0].hour.filter(
    (_: any, index: number) => index >= currentHour
  );

  return (
    <>
      <div className="flex items-center mb-4">
        <Clock className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Prévisions horaires</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {hourlyData.map((hour: any) => {
          const time = new Date(hour.time);
          const translatedCondition = weatherConditions[hour.condition.text] || hour.condition.text;
          const { icon: iconColor } = getWeatherColor(hour.condition.code);

          return (
            <div key={hour.time} className="flex-none text-center w-24">
              <p className="text-gray-600 mb-2">
                {format(time, 'HH:mm')}
              </p>
              <WeatherIcon code={hour.condition.code} className={`h-12 w-12 mx-auto mb-2 ${iconColor}`} />
              <p className="text-2xl font-bold text-gray-800 mb-1">{Math.round(hour.temp_c)}°C</p>
              <p className="text-sm text-gray-600 whitespace-nowrap">{translatedCondition}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};