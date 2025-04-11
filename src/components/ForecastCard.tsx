import React from 'react';
import { Calendar, Sun, Cloud, Umbrella } from 'lucide-react';
import { WeatherIcon } from './WeatherIcon';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ForecastCardProps {
  data: any;
  isLoading: boolean;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="animate-pulse bg-white p-8 rounded-2xl shadow-xl w-full">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
      <div className="flex items-center mb-6">
        <Calendar className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Prévisions 14 jours</h2>
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto">
        {data.forecast.forecastday.map((day: any) => (
          <div key={day.date} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <WeatherIcon code={day.day.condition.code} className="h-10 w-10 text-blue-500" />
              <div className="ml-4">
                <p className="font-semibold">
                  {format(new Date(day.date), "EEEE d MMMM", { locale: fr })}
                </p>
                <p className="text-sm text-gray-500">{day.day.condition.text}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">{day.day.avgtemp_c}°C</p>
              <p className="text-sm text-gray-500">
                {day.day.daily_chance_of_rain}% de pluie
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};