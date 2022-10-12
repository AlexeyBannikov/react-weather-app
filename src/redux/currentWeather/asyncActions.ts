import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ICurrentWeatherSliceState, SearchCurrentWeatherParams } from './types';

export const fetchCurrentWeather = createAsyncThunk<
  ICurrentWeatherSliceState,
  SearchCurrentWeatherParams
>('currentWeather/fetchCurrentWeatherStatus', async params => {
  const { city, token } = params;
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${token}`,
  );

  return data;
});
