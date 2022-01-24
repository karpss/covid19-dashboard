import CountUp from 'react-countup';
import styles from './Recovery.module.css';

const Recovery = ({data: {recovered, todayRecovered}}) => {
  if (!recovered) {
    return '....';
  }
  return (
    <div className={styles.recovery_grid}>
      <h2> RECOVERIES </h2>
      <CountUp
        start={0}
        end={todayRecovered}
        duration={2.5}
        separator=","
        prefix="New Recoveries: "
      />
      <br />
      <CountUp
        start={0}
        end={recovered}
        duration={2.5}
        separator=","
        prefix="Total Recoveries: "
      />
      <br />
      <p>Last Update: {new Date().toDateString()}</p>
    </div>
  );
};

export default Recovery;
