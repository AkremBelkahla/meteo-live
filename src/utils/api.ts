import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const getWeatherData = async (city: string) => {
  const response = await weatherApi.get('/current.json', {
    params: {
      q: city,
      aqi: 'yes',
    },
  });
  return response.data;
};

export const getForecastData = async (city: string) => {
  const response = await weatherApi.get('/forecast.json', {
    params: {
      q: city,
      days: 14,
      aqi: 'yes',
      alerts: 'yes',
    },
  });
  return response.data;
};

export const getMarineData = async (city: string) => {
  const response = await weatherApi.get('/marine.json', {
    params: {
      q: city,
      days: 7,
    },
  });
  return response.data;
};

export const getSportsData = async () => {
  const response = await weatherApi.get('/sports.json');
  return response.data;
};

export const searchCities = async (query: string) => {
  const response = await weatherApi.get('/search.json', {
    params: {
      q: query,
    },
  });
  return response.data;
};