/* eslint-disable */
import React from 'react';
import styles from './Datatable.module.css';


const Datatable = ({country, cases, recovered, deaths, active, critical}) => {
    return(
<div className={styles.tablecontainer}>
   <div>{country}</div> 
   <div>{cases}</div> 
   <div>{recovered}</div> 
   <div>{deaths}</div> 
   <div>{active}</div> 
   <div>{critical}</div> 
</div>
    )
}

export default Datatable;
