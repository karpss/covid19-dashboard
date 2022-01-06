/* eslint-disable */
import React from 'react';
import styles from './Deaths.module.css';
import CountUp from 'react-countup';

const Deaths = ({data: {Global}}) => {
    if(!Global){
        return 'Loading....';
      }
      
          return (
              <div className={styles.deathgrid}>
                <h2> DEATHS </h2>
                <CountUp
                  start={0}
                   end={Global.NewDeaths}
                   duration={2.5}
                   separator=','
                   prefix='New Deaths : '
               />
               <br/>
              <CountUp
              start={0}
              end={Global.TotalDeaths}
              duration={2.5}
              separator=','
              prefix='Total Deaths : '
              />
              <br/>
             <p>Last Update: {new Date(Global.Date).toDateString()}</p>
              </div>
          )
}

export default Deaths;
