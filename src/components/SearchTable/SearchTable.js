/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Datatable from '../DataTable/Datatable';
import {fetchDataTableData} from '../../http/http';
import styles from './SearchTable.module.css';

const SearchTable = () => {
    const [tableData, setTableData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
    const fetchTableAPI = async () => {
    setTableData(await fetchDataTableData());

        };

        fetchTableAPI();



    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

   const filteredTable = tableData.filter((table) =>
        table.country.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className={styles.searchstyle}>
        <div className={styles.countrysearch}>
            <h1 className={styles.countrytext}>Search for a Country</h1>
            <form>
                <input
                className={styles.countryinput}
                type='text'
                onChange={handleChange}
                placeholder='Search'
                
                />
            </form>
            </div>

    {filteredTable.map((table) => {


        return (
            
               
               <Datatable
               key={table.country}
               country={table.country}
               cases={table.cases}
               recovered={table.recovered}
               deaths={table.deaths}
               active={table.active}
               critical={table.critical}

               
               
               
               
               /> 
            
        )



    })

    
    }
    </div>
    );
}

export default SearchTable;
