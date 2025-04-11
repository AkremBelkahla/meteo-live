import React from 'react';
import { Waves, Compass, Moon } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface MarineCardProps {
  data: any;
  isLoading: boolean;
}

export const MarineCard: React.FC<MarineCardProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="animate-pulse bg-white p-8 rounded-2xl shadow-xl w-full">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!data?.forecast?.forecastday?.[0]?.astro || !data?.current) return null;

  const today = data.forecast.forecastday[0];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
      <div className="flex items-center mb-6">
        <Waves className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Données Marines</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center mb-2">
            <Moon className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="font-semibold">Marées et Phases Lunaires</h3>
          </div>
          <p className="text-sm text-gray-600">Lever de lune: {today.astro.moonrise}</p>
          <p className="text-sm text-gray-600">Coucher de lune: {today.astro.moonset}</p>
          <p className="text-sm text-gray-600">Phase: {today.astro.moon_phase}</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center mb-2">
            <Compass className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="font-semibold">Conditions Maritimes</h3>
          </div>
          <p className="text-sm text-gray-600">
            Direction du vent: {data.current?.wind_dir}
          </p>
          <p className="text-sm text-gray-600">
            Pression: {data.current?.pressure_mb} mb
          </p>
        </div>
      </div>
    </div>
  );
};