import React from 'react';

const WeatherDisplayComponent = ({ weatherData, forecastData, units }) => {
  const unitSymbol = units === 'metric' ? '°C' : '°F';

  const getDailyForecast = (forecast) => {
    const dailyForecasts = [];
    const dates = new Set();

    for (let i = 0; i < forecast.length; i++) {
      const date = new Date(forecast[i].dt_txt).toLocaleDateString();

      if (!dates.has(date)) {
        dates.add(date);
        dailyForecasts.push(forecast[i]);
      }

      if (dailyForecasts.length === 5) break;
    }

    return dailyForecasts;
  };

  const dailyForecasts = getDailyForecast(forecastData.list);

  return (
    <div className="mb-4 p-4 bg-gray-900 text-white rounded">
      <h2 className="text-xl font-bold">{weatherData.name}</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>Temperature: {weatherData.main.temp}{unitSymbol}</p>
      <h3 className="text-lg font-semibold mt-4 mb-3">5-Day Forecast</h3>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-2">
        {dailyForecasts.map((item, index) => (
          <div key={index} className="p-4 md:flex-row bg-gray-700 text-white rounded shadow">
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <p>{item.weather[0].description}</p>
            <p>{item.main.temp}{unitSymbol}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplayComponent;
