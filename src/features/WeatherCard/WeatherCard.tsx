import React from 'react';
import './WeatherCard.scss';

interface WeatherCardProps {
    className?:string;
}
const WeatherCard: React.FC<WeatherCardProps> = ({className}) => {
  const city = 'Bangalore';
  const temperature = 28;
  const condition = 'Partly Cloudy';
  const icon = '🌤️';

  return (
    <div className={`weather-card ${className}`}>
      <div className="weather-header">
        <div className="location">
          <h2>{city}</h2>
          <p>{condition}</p>
        </div>
        <div className="icon">{icon}</div>
      </div>
      <div className="temperature">{temperature}°C</div>
    </div>
  );
};

export default WeatherCard;
