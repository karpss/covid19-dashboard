/* eslint-disable */
import React from 'react';
import styles from './Datatable.module.css';


const Datatable = ({country, tests, critical}) => {
    
    return(
<div className={styles.tablecontainer}>
    <div className={styles.countryrow}>
    <div className={styles.countrynameflag}>
   <h1>{country}</h1> 
   </div>
   <div className={styles.countrydata}>
    <p className={styles.tests}>People Tested: {tests}</p> 
    <div className={styles.critical}>Active Cases: {critical}</div> 
   </div>
   </div>
</div>
    )
}

export default Datatable;
