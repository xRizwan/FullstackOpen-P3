import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter';
import Countries from './Components/Countries';
import axios from 'axios';

const App = () => {
  const [ query, setNewQuery ] = useState('');
  const [ countries, setCountries ] = useState([]);
  const [ visibleCountries, setVisibleCountries ] = useState([]);

  useEffect(() => {
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      setCountries(response.data);
    })
  }, [])

  const handleQuery = (e) => {
    setNewQuery(e.target.value)
    setVisibleCountries(countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()) ? true : false))
  }

  return (
    <div>
      <h2>Countries</h2>
      <Filter query={query} handleQuery={handleQuery}/>
      {query.length > 0 ? <Countries countries={visibleCountries}/> : ""}
    </div>
  )
}

export default App