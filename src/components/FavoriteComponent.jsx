import React, { useState } from 'react';

const FavoriteComponent = ({ favorites, onRemoveFavorite, onAddFavorite, fetchWeather }) => {
  const [newFavorite, setNewFavorite] = useState('');

  const handleAddClick = () => {
    if (newFavorite.trim() !== '') {
      onAddFavorite(newFavorite.trim());
      setNewFavorite('');
    }
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Favorite Cities</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-3 gap-2">
        {favorites.map((fav, index) => (
          <div key={index} className="py-2 px-4 bg-gray-900 text-white rounded shadow flex justify-between items-center">
            <span onClick={() => fetchWeather(fav.city)} className="cursor-pointer">{fav.city}</span>
            <button onClick={() => onRemoveFavorite(fav.city)} className="bg-gradient-to-br from-red-500 to-red-800 text-white text-sm px-3 py-2 rounded">Remove</button>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Add a favorite city"
          className="py-2 px-4 border text-black placeholder-slate-600 border-gray-400 rounded"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddClick();
            }
          }}
        />
        <button onClick={handleAddClick} className="ml-2 bg-gradient-to-br from-blue-600 to-blue-900 text-white text-sm px-4 py-2 rounded">Add</button>
      </div>
    </div>
  );
};

export default FavoriteComponent;
