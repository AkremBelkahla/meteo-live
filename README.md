# Météo Live

A real-time weather application built with React and Vite.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)]()

## Features

- City search with autocomplete
- Display of current weather conditions
- Responsive and modern interface
- Error handling and loading states
- Request caching with React Query

## Technologies Used

- React 18+
- Vite
- TailwindCSS
- Axios
- React Query
- WeatherAPI.com

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create an account on [WeatherAPI.com](https://www.weatherapi.com)
4. Get your API key
5. Create a `.env` file at the root of the project and add your API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key
   ```

## Development

To start the development server:

```bash
npm run dev
```

## Production

To build the application for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/      # React components
├── hooks/          # Custom hooks
├── utils/          # Utilities and API configuration
└── App.tsx         # Main component
```

## API Documentation

The application uses the WeatherAPI.com API with the following endpoints:

- `/current.json` : Current weather data
- `/search.json` : City search

For more information, see the [official WeatherAPI documentation](https://www.weatherapi.com/docs/).

## User Guide

1. Launch the application
2. Use the search bar to find a city
3. Select a city from the autocomplete list
4. Weather data will be displayed automatically

## Contribution

Contributions are welcome! Feel free to open an issue or a pull request.
