import React from 'react';
import { useSelector } from 'react-redux';

import { fetchCurrentWeather } from '../../redux/currentWeather/asyncActions';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { selectCity } from '../../redux/filter/selectors';
import { setCity } from '../../redux/filter/slice';
import CityList from '../../city.list.json';

import styles from './Search.module.scss';

type TCity = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
};

type TSuggestion = {
  id: number;
  name: string;
  state: string;
  country: string;
};

const Search = () => {
  const dispatch = useAppDispatch();
  const city = useSelector(selectCity);
  const token = '716af539e0ce47ab85a9092de6b31b36';
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [suggestions, setSuggestions] = React.useState<TSuggestion[] | null>([]);
  const cities = (CityList as TCity[]).map(({ id, name, state, country }) => ({
    id,
    name,
    state,
    country,
  }));

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCity(event.target.value));
    const text = event.target.value;

    if (text.length > 2) {
      setSuggestions(
        cities.filter(city => {
          return city.name.toUpperCase().includes(text.toUpperCase());
        }),
      );
    } else if (text.length <= 2) {
      setSuggestions(null);
    }
  };

  React.useEffect(() => {
    dispatch(fetchCurrentWeather({ city: 'Izhevsk', token }));
  }, []);

  const onClickSuggest = (name: string) => {
    dispatch(fetchCurrentWeather({ city: name, token }));
    dispatch(setCity(''));
    setSuggestions(null);
  };

  const onClickClear = () => {
    dispatch(setCity(''));
    setSuggestions(null);
    inputRef.current?.focus();
  };

  return (
    <div className={styles.root}>
      <input
        className={styles.search}
        ref={inputRef}
        placeholder='Search'
        onChange={onChangeInput}
        value={city}
      />
      <div className={styles.searchIcon}>
        <GlobalSvgSelector id='search-icon' />
      </div>
      {city ? (
        <div className={styles.clearIcon} onClick={onClickClear}>
          <GlobalSvgSelector id='clear-icon' />
        </div>
      ) : null}
      <ul className={styles.suggestionsBlock}>
        {suggestions
          ? suggestions.map(suggestion => (
              <li
                key={suggestion.id}
                className={styles.suggestion}
                onClick={() => onClickSuggest(suggestion.name)}>
                {`${suggestion.name} ${suggestion.country}${suggestion.state ? ',' : ''} ${
                  suggestion.state
                }`}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Search;
