import { IFilterSliceState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IFilterSliceState = {
  city: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
});

export const { setCity } = filterSlice.actions;

export default filterSlice.reducer;
