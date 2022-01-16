/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Datatable from '../DataTable/Datatable';
import {fetchDataTableData} from '../../http/http';
import styles from './SearchTable.module.css';

const SearchTable = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
    const fetchTableAPI = async () => {
    setTableData(await fetchDataTableData());

        };

        fetchTableAPI();



    }, []);

    return (
        <div className={styles.searchsize}>

    {tableData.map((table) => {


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
