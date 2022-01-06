/* eslint-disable */
import React from 'react';
import styles from './Recovery.module.css';
import CountUp from 'react-countup';

const Recovery = ({data: {Global}}) => {
  if(!Global){
    return 'Loading....';
  }
  return (
    <div className={styles.recoverygrid}>
      <h2> RECOVERIES </h2>
      <CountUp
        start={0}
         end={Global.NewRecovered}
         duration={2.5}
         separator=','
         prefix='New Recoveries: '
     />
     <br/>
    <CountUp
    start={0}
    end={Global.TotalNewRecovered}
    duration={2.5}
    separator=','
    prefix='Total Recoveries: '
    />
    <br/>
    <p>Last Update: {new Date(Global.Date).toDateString()}</p>
    </div>
)
}

export default Recovery;
