import { RootState } from './../store';

export const selectCity = (state: RootState) => state.filter.city;
