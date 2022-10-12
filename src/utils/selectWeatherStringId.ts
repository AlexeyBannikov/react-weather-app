export const selectWeatherStringId = (descr: string) => {
  let weatherId = '';

  if (descr === 'clear sky') {
    weatherId = 'sun';
  } else if (descr.includes('clouds')) {
    weatherId = 'mainly-cloudy';
  } else if (descr.includes('moderate') || descr.includes('light')) {
    weatherId = 'small-rain';
  } else if (descr.includes('intensity')) {
    weatherId = 'rain';
  }

  return weatherId;
};
