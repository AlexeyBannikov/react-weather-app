import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';
import Search from '../Search';
import { selectTheme } from '../../redux/theme/selectors';
import { setTheme } from '../../redux/theme/slice';
import { Theme } from '../../redux/theme/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeCssRootVariables } from '../../utils/changeCssRootVariables';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useAppDispatch();
  changeCssRootVariables(theme);

  const changeTheme = () => {
    dispatch(setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
    changeCssRootVariables(theme);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftBlock}>
        <div className={styles.logo}>
          <Link to='/'>
            <GlobalSvgSelector id='header-logo' />
          </Link>
        </div>
        <h3 className={styles.title}>React Weather</h3>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.changeTheme} onClick={changeTheme}>
          {theme === Theme.LIGHT ? (
            <GlobalSvgSelector id='light-change-theme' />
          ) : (
            <GlobalSvgSelector id='dark-change-theme' />
          )}
        </div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
