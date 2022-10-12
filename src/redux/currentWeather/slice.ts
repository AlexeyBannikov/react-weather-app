import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCurrentWeather } from './asyncActions';
import { ICurrentWeatherSliceState, Status } from './types';

const initialState: ICurrentWeatherSliceState = {
  name: '',
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    feels_like: 0,
    pressure: 0,
  },
  weather: [
    {
      description: '',
    },
  ],
  wind: {
    speed: 0,
  },
  visibility: 0,
  status: Status.LOADING,
};

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentWeather.pending.type]: state => {
      state.name = '';
      state.main.temp = 0;
      state.main.humidity = 0;
      state.main.feels_like = 0;
      state.main.pressure = 0;
      state.main.temp_max = 0;
      state.main.temp_min = 0;
      state.weather[0].description = '';
      state.wind.speed = 0;
      state.visibility = 0;
      state.status = Status.LOADING;
    },
    [fetchCurrentWeather.fulfilled.type]: (
      state,
      action: PayloadAction<ICurrentWeatherSliceState>,
    ) => {
      state.name = action.payload.name;
      state.main.temp = action.payload.main.temp;
      state.main.humidity = action.payload.main.humidity;
      state.main.feels_like = action.payload.main.feels_like;
      state.main.pressure = action.payload.main.pressure;
      state.main.temp_max = action.payload.main.temp_max;
      state.main.temp_min = action.payload.main.temp_min;
      state.weather[0].description = action.payload.weather[0].description;
      state.wind.speed = action.payload.wind.speed;
      state.visibility = action.payload.visibility;
      state.status = Status.SUCCESS;
    },
    [fetchCurrentWeather.rejected.type]: state => {
      state.name = '';
      state.main.temp = 0;
      state.main.humidity = 0;
      state.main.feels_like = 0;
      state.main.pressure = 0;
      state.main.temp_max = 0;
      state.main.temp_min = 0;
      state.weather[0].description = '';
      state.wind.speed = 0;
      state.visibility = 0;
      state.status = Status.ERROR;
    },
  },
});

export default currentWeatherSlice.reducer;
