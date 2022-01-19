/* eslint-disable */
import React from 'react';
import styles from './Recovery.module.css';
import CountUp from 'react-countup';

const Recovery = ({data: {recovered,todayRecovered}}) => {
  if(!recovered){
    return 'Loading....';
  }
  return (
    <div className={styles.recovery_grid}>
      <h2> RECOVERIES </h2>
      <CountUp
        start={0}
         end={todayRecovered}
         duration={2.5}
         separator=','
         prefix='New Recoveries: '
     />
     <br/>
    <CountUp
    start={0}
    end={recovered}
    duration={2.5}
    separator=','
    prefix='Total Recoveries: '
    />
    <br/>
    <p>Last Update: {new Date().toDateString()}</p>
    </div>
)
}

export default Recovery;
