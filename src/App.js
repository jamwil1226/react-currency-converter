import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';
import "./App.css";

const BASE_URL = "https://open.er-api.com/v6/latest/USD"

const App = () => {

    const [currencyOptions, setCurrencyOptions ] = useState([]);
    

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            })
    }, [])

  return (
    <>
        <h1>Convert</h1>
        <CurrencyRow
            currencyOptions={currencyOptions} />
        <div className="equals">=</div>
        <CurrencyRow 
            currencyOptions={currencyOptions}/>
    </>
  )
}

export default App