import React from 'react';
import { Calendar } from 'lucide-react';
import { WeatherIcon } from './WeatherIcon';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { weatherConditions, getWeatherColor } from '../utils/weatherTranslations';

interface DailyForecastProps {
  data: any;
  isLoading: boolean;
}

export const DailyForecast: React.FC<DailyForecastProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!data?.forecast?.forecastday) return null;

  return (
    <>
      <div className="flex items-center mb-4">
        <Calendar className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Prévisions 14 jours</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.forecast.forecastday.map((day: any) => {
          const date = new Date(day.date);
          const translatedCondition = weatherConditions[day.day.condition.text] || day.day.condition.text;
          const { icon: iconColor } = getWeatherColor(day.day.condition.code);

          return (
            <div key={day.date} className="flex items-center bg-gray-50/50 backdrop-blur-sm p-4 rounded-xl">
              <WeatherIcon code={day.day.condition.code} className={`h-12 w-12 mr-4 ${iconColor}`} />
              <div>
                <p className="font-semibold text-gray-800">
                  {format(date, "EEEE d MMMM", { locale: fr })}
                </p>
                <p className="text-sm text-gray-600">{translatedCondition}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-red-500 font-semibold">{Math.round(day.day.maxtemp_c)}°</span>
                  <span className="text-blue-500 font-semibold">{Math.round(day.day.mintemp_c)}°</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};