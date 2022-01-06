/* eslint-disable */
import React from 'react';
import styles from './Infections.module.css';
import CountUp from 'react-countup';
const Infections = ({data: {Global}}) => {
if(!Global){
  return 'Loading....';
}

    return (
        <div className={styles.infectiongrid}>
          <h2> INFECTIONS </h2>
          <CountUp
            start={0}
             end={Global.NewConfirmed}
             duration={2.5}
             separator=','
             prefix='New Infections: '
         />
         <br/>
        <CountUp
        start={0}
        end={Global.TotalConfirmed}
        duration={2.5}
        separator=','
        prefix='Total Infections: '
        />
        <br/>
        <p>Last Update: {new Date(Global.Date).toDateString()}</p>
        </div>
    )
}

export default Infections;
