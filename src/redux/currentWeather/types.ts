export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SearchCurrentWeatherParams = {
  city: string;
  token: string;
};

export interface ICurrentWeatherSliceState {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    feels_like: number;
    pressure: number;
  };
  weather: [
    {
      description: string;
    },
  ];
  wind: {
    speed: number;
  };
  visibility: number;
  status: Status;
}
