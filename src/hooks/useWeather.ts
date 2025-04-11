import { useQuery } from 'react-query';
import { getWeatherData, getForecastData, getMarineData, getSportsData, searchCities } from '../utils/api';

export const useWeather = (city: string) => {
  return useQuery(['weather', city], () => getWeatherData(city), {
    enabled: Boolean(city),
    staleTime: 300000, // 5 minutes
  });
};

export const useForecast = (city: string) => {
  return useQuery(['forecast', city], () => getForecastData(city), {
    enabled: Boolean(city),
    staleTime: 300000,
  });
};

export const useMarine = (city: string) => {
  return useQuery(['marine', city], () => getMarineData(city), {
    enabled: Boolean(city),
    staleTime: 300000,
  });
};

export const useSports = () => {
  return useQuery('sports', getSportsData, {
    staleTime: 3600000, // 1 hour
  });
};

export const useSearchCities = (query: string) => {
  return useQuery(['cities', query], () => searchCities(query), {
    enabled: query.length > 2,
    staleTime: 300000,
  });
};