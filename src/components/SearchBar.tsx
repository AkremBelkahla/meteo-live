import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useSearchCities } from '../hooks/useWeather';

interface SearchBarProps {
  onCitySelect: (city: string) => void;
  defaultCity?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onCitySelect, defaultCity }) => {
  const [query, setQuery] = useState(defaultCity || '');
  const [isOpen, setIsOpen] = useState(false);
  const { data: cities, isLoading } = useSearchCities(query);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultCity) {
      onCitySelect(defaultCity);
    }
  }, [defaultCity, onCitySelect]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleCitySelect = (city: string) => {
    onCitySelect(city);
    setQuery(city);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-xl" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Rechercher une ville..."
          className="w-full px-6 py-4 pl-12 pr-4 text-gray-700 bg-white border rounded-xl focus:outline-none focus:border-blue-500 text-lg shadow-lg"
        />
        <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
      </div>

      {isOpen && query.length > 2 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-xl">
          {isLoading ? (
            <div className="px-6 py-4 text-gray-500">Chargement...</div>
          ) : cities?.length ? (
            <ul className="max-h-80 overflow-auto rounded-xl">
              {cities.map((city: any) => (
                <li
                  key={`${city.id}-${city.name}`}
                  className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                  onClick={() => handleCitySelect(`${city.name}, ${city.country}`)}
                >
                  {city.name}, {city.country}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-6 py-4 text-gray-500">Aucune ville trouvée</div>
          )}
        </div>
      )}
    </div>
  );
};