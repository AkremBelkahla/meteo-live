import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { HourlyForecast } from './components/HourlyForecast';
import { DailyForecast } from './components/DailyForecast';
import { WeatherBackground } from './components/WeatherBackground';
import { useWeather, useForecast } from './hooks/useWeather';
import { getWeatherColor } from './utils/weatherTranslations';

const queryClient = new QueryClient();

function WeatherApp() {
  const [selectedCity, setSelectedCity] = useState('Paris');
  const { data: weatherData, isLoading: weatherLoading, error: weatherError } = useWeather(selectedCity);
  const { data: forecastData, isLoading: forecastLoading } = useForecast(selectedCity);

  const weatherCode = weatherData?.current?.condition?.code;
  const { bg: bgColor } = getWeatherColor(weatherCode || 1000);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgColor} py-4 px-4 relative transition-colors duration-1000`}>
      {weatherCode && (
        <WeatherBackground code={weatherCode} />
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Météo en Temps Réel
            </h1>
            <SearchBar onCitySelect={setSelectedCity} defaultCity="Paris" />
          </div>
          
          {/* Ligne 1: Météo actuelle */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6">
            <WeatherCard
              data={weatherData}
              isLoading={weatherLoading}
              error={weatherError as Error}
            />
          </div>

          {/* Ligne 2: Prévisions horaires */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6">
            <HourlyForecast
              data={forecastData}
              isLoading={forecastLoading}
            />
          </div>

          {/* Ligne 3: Prévisions sur 14 jours */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6">
            <DailyForecast
              data={forecastData}
              isLoading={forecastLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherApp />
    </QueryClientProvider>
  );
}

export default App;