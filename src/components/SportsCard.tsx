import React from 'react';
import { Trophy } from 'lucide-react';

interface SportsCardProps {
  data: any;
  isLoading: boolean;
}

export const SportsCard: React.FC<SportsCardProps> = ({ data, isLoading }) => {
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

  if (!data) return null;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
      <div className="flex items-center mb-6">
        <Trophy className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Événements Sportifs</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(data).map(([sport, events]: [string, any]) => (
          <div key={sport} className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold text-lg mb-3 capitalize">{sport}</h3>
            <ul className="space-y-2">
              {events.slice(0, 3).map((event: any, index: number) => (
                <li key={index} className="text-sm text-gray-600">
                  {event.match}
                  <p className="text-xs text-gray-500">{event.stadium}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};