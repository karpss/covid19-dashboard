/* eslint-disable */
import { useState, useEffect } from 'react';
import  styles from'./App.module.css';
import {CountryPicker} from './components';
import {Navbar} from './components';
import {SearchTable} from './components';
import {Infections} from './components';
import {Recovery} from './components';
import {Deaths} from './components';
import {Graph} from './components';
import {fetchGlobalData, fetchCountryDetails} from './http/http';
import { ThemeContext } from './libs/context';


function App() {
const [data, setData] = useState({});
const [countries, setCountries] = useState();
const [theme, setTheme] = useState('dark');

useEffect(() => {
const loadGlobalData = async () => {
  setData(await fetchGlobalData());
};
   loadGlobalData();
}, []);


const handleCountryChange = async (countries) => {
  const data = await fetchCountryDetails(countries);
  setCountries(countries);
  setData(data); 
    
};




  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={styles.container} data-theme={theme}>
    <div className={styles.navbar}><Navbar/></div>
      <div className={styles.country_picker}><CountryPicker  handleCountryChange={handleCountryChange}/></div>
      <div className={styles.datatable}>
        <SearchTable/>
      </div>
      <div className={styles.infections}> 
      <Infections data={data} /> 
      </div>

      <div className={styles.recovery}> 
      <Recovery data={data}/> 
      </div>

      <div className={styles.deaths}> 
      <Deaths data={data}/> 
      </div>
      
      
      
     <div className={styles.graph}><Graph data={data} countries={countries}/></div> 
      
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
