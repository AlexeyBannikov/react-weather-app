import React from 'react';
import { useSelector } from 'react-redux';

import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';
import { selectCurrentWeather } from '../../redux/currentWeather/selectors';
import { selectWeatherStringId } from '../../utils/selectWeatherStringId';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const { main, weather, wind, visibility, name } = useSelector(selectCurrentWeather);

  return (
    <div className={styles.root}>
      <div className={styles.day}>
        <span className={styles.city}>{name}</span>
        <div className={styles.weather}>
          <div className={styles.icon}>
            <GlobalSvgSelector id={selectWeatherStringId(weather[0].description)} />
          </div>
          <div className={styles.temp}>
            <span>{Math.floor(main.temp)}°C</span>
          </div>
        </div>
        <span className={styles.info}>
          {weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}
        </span>
      </div>
      <div className={styles.dayInfo}>
        <ul className={styles.list}>
          <li>Feels like {Math.floor(main.feels_like)}°C</li>
          <li>Wind speed {wind.speed} m/s</li>
          <li>Visibility {visibility / 1000} km</li>
          <li>Pressure {(main.pressure / 1.333).toFixed(2)} mm</li>
          <li>Humidity {main.humidity}%</li>
          <li>Max/Min {`${main.temp_max}°C / ${main.temp_min}°C`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
