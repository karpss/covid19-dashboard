/* eslint-disable */
import React from 'react';
import styles from './Infections.module.css';
import CountUp from 'react-countup';
const Infections = ({data: {cases, todayCases}}) => {
if(!cases){
  return '....';
}

    return (
        <div className={styles.infection_grid}>
          <h2> INFECTIONS </h2>
          <CountUp
            start={0}
             end={todayCases}
             duration={2.5}
             separator=','
             prefix='New Infections: '
         />
         <br/>
        <CountUp
        start={0}
        end={cases}
        duration={2.5}
        separator=','
        prefix='Total Infections: '
        />
        <br/>
        <p>Last Update: {new Date().toDateString()}</p>
        </div>
    )
}

export default Infections;
