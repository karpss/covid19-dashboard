/* eslint-disable */
import './App.module.css';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Navbar from './components/Navbar/Navbar';
import DataTable from './components/DataTable/Datatable';
import Infections from './components/Infections/Infections';
import Deaths from './components/Deaths/Deaths';
import Recovery from './components/Recoveries/Recovery';
import Graph from './components/Graph/Graph';


function App() {
  return (
    <div>
      App
      <Navbar/>
      <CountryPicker/>
      <DataTable/>
      <Infections/>
      <Deaths/>
      <Graph/>
      <Recovery/>
      
    </div>
  );
}

export default App;
