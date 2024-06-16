import React, { useState } from 'react';

const SearchComponent = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    fetchWeather(city);
    setCity('');
  };

  return (
    <div className="mb-5">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="py-2 md:px-4 px-2 text-black border placeholder-slate-600 border-gray-400 rounded mr-2"
      />
      <button onClick={handleSearch} className="py-2 px-3  bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded">Search</button>
    </div>
  );
};

export default SearchComponent;
