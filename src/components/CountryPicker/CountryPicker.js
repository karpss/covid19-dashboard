import {useState, useEffect} from 'react';
import {fetchCountriesData} from '../../http/http';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const getCountriesAPI = async () => {
      setFetchedCountries(await fetchCountriesData());
    };
    getCountriesAPI();
  }, [setFetchedCountries]);

  return (
    <div className={styles.dropdown}>
      <select
        data-testid="select"
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="" disabled>
          Global
        </option>

        {fetchedCountries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryPicker;
