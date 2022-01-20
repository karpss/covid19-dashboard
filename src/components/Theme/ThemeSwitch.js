/* eslint-disable */
import React, {useContext} from 'react';
import { ThemeContext } from '../../libs/context';
import styles from './ThemeSwitch.module.css';

const ThemeSwitch = () => {
    const {theme, setTheme} = useContext(ThemeContext);

const handleThemeSwitch = (e) => {
    e.preventDefault();
    setTheme(theme === 'dark' ? 'light' : 'dark');
};

  return (
      <button type="button" className={styles.themeSwitch} onClick={handleThemeSwitch}>
          <span role="img" aria-lable="theme switch">
              {theme === 'dark' ? '🔅' : '🌞' }
              
            </span>
          




      </button>
  )
};

export default ThemeSwitch;
