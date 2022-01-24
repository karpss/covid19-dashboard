import CountUp from 'react-countup';
import styles from './Deaths.module.css';

const Deaths = ({data: {deaths, todayDeaths}}) => {
  if (!deaths) {
    return '....';
  }

  return (
    <div className={styles.death_grid}>
      <h2> DEATHS </h2>
      <CountUp
        start={0}
        end={todayDeaths}
        duration={2.5}
        separator=","
        prefix="New Deaths : "
      />
      <br />
      <CountUp
        start={0}
        end={deaths}
        duration={2.5}
        separator=","
        prefix="Total Deaths : "
      />
      <br />
      <p>Last Update: {new Date().toDateString()}</p>
    </div>
  );
};

export default Deaths;
