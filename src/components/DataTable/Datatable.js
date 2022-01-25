import styles from './Datatable.module.css';

const Datatable = ({country, countryInfo, tests, critical}) => {
  return (
    <div className={styles.table_container}>
      <div className={styles.country_row}>
        <div className={styles.country_nameflag}>
          <h1>{country}</h1>
          <img src={countryInfo} alt="country-flag" />
        </div>
        <div className={styles.country_data}>
          <p className={styles.tests}>
            People Tested: {tests.toLocaleString()}
          </p>
          <div className={styles.critical}>
            Active Cases: {critical.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datatable;
