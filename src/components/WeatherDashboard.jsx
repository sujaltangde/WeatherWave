import React, { useState, useEffect } from 'react';
import SearchComponent from './SearchComponent';
import WeatherDisplayComponent from './WeatherDisplayComponent';
import FavoriteComponent from './FavoriteComponent';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [units, setUnits] = useState('metric');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      localStorage.setItem('lastCity', city);
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`);
      setWeatherData(weatherResponse.data);
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`);
      setForecastData(forecastResponse.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };



  const fetchFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:3001/favorites');
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };
  useEffect(() => {
    
    fetchFavorites();

    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      fetchWeather(lastCity);
    }
  }, [units]);

  const handleAddFavorite = async (city) => {
    try {
      await axios.post('http://localhost:3001/favorites', { city });
      fetchFavorites()
      setFavorites([...favorites, { city }]);
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const handleRemoveFavorite = async (city) => {
    try {
      const cityToRemove = favorites.find(fav => fav.city === city);

      console.log(cityToRemove)
      if (cityToRemove) {
        await axios.delete(`http://localhost:3001/favorites/${cityToRemove.id}`);
        setFavorites(favorites.filter(fav => fav.city !== city));
      }
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };
  

  const handleToggleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="text-white min-h-screen mx-auto p-4 min-h-sc bg-blue-950">
      <div className='py-8'>
      <p className='text-4xl font-bold '>🌤️WeatherWave</p>
      </div>
      <SearchComponent fetchWeather={fetchWeather} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        weatherData && forecastData && <WeatherDisplayComponent weatherData={weatherData} forecastData={forecastData} units={units} />
      )}
      <FavoriteComponent fetchWeather={fetchWeather} fetchFavorites={fetchFavorites} favorites={favorites} onRemoveFavorite={handleRemoveFavorite} onAddFavorite={handleAddFavorite}  />
      <button onClick={handleToggleUnits} className="mt-4 py-2 px-4  bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded">
        Change unit to {units === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
};

export default WeatherDashboard;
