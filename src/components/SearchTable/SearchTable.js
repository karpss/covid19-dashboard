import {useState, useEffect} from 'react';
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
    <div>
      <div>
        <h1>Search for a Country</h1>
        <form>
          <input
            className={styles.country_input}
            type="text"
            onChange={handleChange}
            aria-label="country-search"
            placeholder="Search"
          />
        </form>
      </div>

      {filteredTable.map((table) => {
        return (
          <Datatable
            key={table.country}
            country={table.country}
            tests={table.tests}
            critical={table.critical}
          />
        );
      })}
    </div>
  );
};

export default SearchTable;
