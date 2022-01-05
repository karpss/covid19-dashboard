/* eslint-disable */
import  styles from'./App.module.css';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Navbar from './components/Navbar/Navbar';
import DataTable from './components/DataTable/Datatable';
import Infections from './components/Infections/Infections';
import Deaths from './components/Deaths/Deaths';
import Recovery from './components/Recoveries/Recovery';
import Graph from './components/Graph/Graph';


function App() {
  return (
    <div className={styles.container}>
    <div className={styles.navbar}><Navbar/></div>
      <div className={styles.countrypicker}><CountryPicker/></div>
      <div className={styles.datatable}><DataTable/></div>
      <div className={styles.infections}> <Infections/> </div>
      <div className={styles.deaths}> <Deaths/> </div>
      <div className={styles.recovery}><Recovery/></div>
      
     <div className={styles.graph}><Graph/></div> 
      
      
    </div>
  );
}

export default App;
