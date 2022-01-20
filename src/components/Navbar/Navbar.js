/* eslint-disable */
import React from 'react';
import ThemeSwitch from '../Theme/ThemeSwitch';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar_item}>
           Covid 19 Dashboard
           <div>
            <ThemeSwitch/>

           </div>
        </nav>
    )
}

export default Navbar;

