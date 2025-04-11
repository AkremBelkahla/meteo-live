export const weatherConditions: Record<string, string> = {
  "Sunny": "Ensoleillé",
  "Clear": "Dégagé",
  "Partly cloudy": "Partiellement nuageux",
  "Cloudy": "Nuageux",
  "Overcast": "Couvert",
  "Mist": "Brume",
  "Patchy rain possible": "Risque de pluie éparse",
  "Patchy snow possible": "Risque de neige éparse",
  "Patchy sleet possible": "Risque de grésil épars",
  "Patchy freezing drizzle possible": "Risque de bruine verglaçante éparse",
  "Thundery outbreaks possible": "Risque d'orages",
  "Blowing snow": "Poudrerie",
  "Blizzard": "Blizzard",
  "Fog": "Brouillard",
  "Freezing fog": "Brouillard givrant",
  "Patchy light drizzle": "Bruine légère éparse",
  "Light drizzle": "Bruine légère",
  "Freezing drizzle": "Bruine verglaçante",
  "Heavy freezing drizzle": "Forte bruine verglaçante",
  "Patchy light rain": "Pluie légère éparse",
  "Light rain": "Pluie légère",
  "Moderate rain at times": "Pluie modérée par moments",
  "Moderate rain": "Pluie modérée",
  "Heavy rain at times": "Forte pluie par moments",
  "Heavy rain": "Forte pluie",
  "Light freezing rain": "Pluie verglaçante légère",
  "Moderate or heavy freezing rain": "Pluie verglaçante modérée à forte",
  "Light sleet": "Grésil léger",
  "Moderate or heavy sleet": "Grésil modéré à fort",
  "Patchy light snow": "Neige légère éparse",
  "Light snow": "Neige légère",
  "Patchy moderate snow": "Neige modérée éparse",
  "Moderate snow": "Neige modérée",
  "Patchy heavy snow": "Forte neige éparse",
  "Heavy snow": "Forte neige",
  "Ice pellets": "Granules de glace",
  "Light rain shower": "Averses de pluie légères",
  "Moderate or heavy rain shower": "Averses de pluie modérées à fortes",
  "Torrential rain shower": "Averses torrentielles",
  "Light sleet showers": "Averses de grésil légères",
  "Moderate or heavy sleet showers": "Averses de grésil modérées à fortes",
  "Light snow showers": "Averses de neige légères",
  "Moderate or heavy snow showers": "Averses de neige modérées à fortes",
  "Light showers of ice pellets": "Averses légères de granules de glace",
  "Moderate or heavy showers of ice pellets": "Averses modérées à fortes de granules de glace",
  "Patchy light rain with thunder": "Pluie légère et tonnerre épars",
  "Moderate or heavy rain with thunder": "Pluie modérée à forte avec tonnerre",
  "Patchy light snow with thunder": "Neige légère et tonnerre épars",
  "Moderate or heavy snow with thunder": "Neige modérée à forte avec tonnerre"
};

export const getWeatherColor = (code: number): { bg: string, icon: string } => {
  // Ensoleillé ou Dégagé
  if (code === 1000) {
    return { bg: 'from-orange-200 to-yellow-100', icon: 'text-orange-500' };
  }
  // Partiellement nuageux
  if (code >= 1003 && code <= 1006) {
    return { bg: 'from-blue-100 to-gray-100', icon: 'text-gray-400' };
  }
  // Nuageux/Couvert
  if (code >= 1009 && code <= 1030) {
    return { bg: 'from-gray-300 to-gray-100', icon: 'text-gray-500' };
  }
  // Pluie
  if (code >= 1063 && code <= 1201) {
    return { bg: 'from-blue-300 to-gray-200', icon: 'text-blue-500' };
  }
  // Neige
  if (code >= 1210 && code <= 1237) {
    return { bg: 'from-blue-50 to-gray-50', icon: 'text-blue-200' };
  }
  // Orage
  if (code >= 1273) {
    return { bg: 'from-gray-600 to-gray-400', icon: 'text-yellow-300' };
  }
  return { bg: 'from-blue-200 to-blue-100', icon: 'text-blue-500' };
};