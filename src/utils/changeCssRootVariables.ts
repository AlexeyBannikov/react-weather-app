import { Theme } from '../redux/theme/types';

export const changeCssRootVariables = (theme: Theme) => {
  const root = document.querySelector(':root') as HTMLElement;

  const components = [
    'header-background',
    'body-background',
    'primary-text-color',
    'secondary-text-color',
  ];

  components.forEach(component => {
    root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
  });
};
