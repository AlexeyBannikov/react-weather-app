import React from 'react';

import headerLogo from './global/header-logo.svg';
import lightChangeThemeIcon from './global/light-change-theme-icon.svg';
import darkChangeThemeIcon from './global/dark-change-theme-icon.svg';
import sunIcon from './global/sun-icon.svg';
import rainIcon from './global/rain-icon.svg';
import smallRainIcon from './global/small-rain-icon.svg';
import mainlyCloudyIcon from './global/mainly-cloudy-icon.svg';
import searchIcon from './global/search-icon.svg';
import clearIcon from './global/clear-icon.svg';

type TGlobalSvgSelector = {
  id: string;
};

export const GlobalSvgSelector: React.FC<TGlobalSvgSelector> = ({ id }) => {
  switch (id) {
    case 'header-logo':
      return <img src={headerLogo} alt='Header logo' />;
    case 'light-change-theme':
      return <img src={lightChangeThemeIcon} alt='Change theme icon' />;
    case 'dark-change-theme':
      return <img src={darkChangeThemeIcon} alt='Change theme icon' />;
    case 'sun':
      return <img src={sunIcon} alt='Sun icon' />;
    case 'rain':
      return <img src={rainIcon} alt='Rain icon' />;
    case 'small-rain':
      return <img src={smallRainIcon} alt='Small rain icon' />;
    case 'mainly-cloudy':
      return <img src={mainlyCloudyIcon} alt='Mainly cloudy icon' />;
    case 'search-icon':
      return <img src={searchIcon} alt='Search icon' />;
    case 'clear-icon':
      return <img src={clearIcon} alt='Clear icon' />;

    default:
      return null;
  }
};
