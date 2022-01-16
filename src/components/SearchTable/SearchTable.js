/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Datatable from '../DataTable/Datatable';
import {fetchDataTableData} from '../../http/http';

const SearchTable = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
    const fetchTableAPI = async () => {
    setTableData(await fetchDataTableData());

        };

        fetchTableAPI();



    }, []);

    console.log(tableData);

    return (
        <div>
           SearchTable
           <Datatable/> 
        </div>
    )
}

export default SearchTable;
