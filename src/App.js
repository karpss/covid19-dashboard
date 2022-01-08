/* eslint-disable */
import { useState, useEffect } from 'react';
import  styles from'./App.module.css';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Navbar from './components/Navbar/Navbar';
import DataTable from './components/DataTable/Datatable';
import Infections from './components/Infections/Infections';
import Recovery from './components/Recoveries/Recovery';
import Deaths from './components/Deaths/Deaths';
import Graph from './components/Graph/Graph';
import {fetchGlobalData} from './http/http';


function App() {
const [data, setData] = useState({});
//const [country, setCountry] = useState();

useEffect(() => {
const loadGlobalData = async () => {
  setData(await fetchGlobalData());
};
   loadGlobalData();
}, []);


// const handleCountryChange = async (country) => {
//   const data = await fetchGlobalData(country);
//      setCountry(country);
//     console.log(country);
    
// }













  return (
    <div className={styles.container}>
    <div className={styles.navbar}><Navbar/></div>
      <div className={styles.countrypicker}><CountryPicker/></div>
      <div className={styles.datatable}><DataTable/></div>
      <div className={styles.infections}> 
      <Infections data={data}/> 
      </div>

      <div className={styles.recovery}> 
      <Recovery data={data}/> 
      </div>

      <div className={styles.deaths}> 
      <Deaths data={data}/> 
      </div>
      
      
      
     <div className={styles.graph}><Graph/></div> 
      
      
    </div>
  );
}

export default App;
