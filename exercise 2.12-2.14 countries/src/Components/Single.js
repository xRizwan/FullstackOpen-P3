import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY

export default function Single( { country } ) {

    const [ weather, setWeather ] = useState("");

    useEffect(() => {
        // to cancel requests when component unmounts
        const cancelTokenSource = axios.CancelToken.source();

        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.name}`, { cancelToken: cancelTokenSource.token })
        .then(response => setWeather(response.data))
        .catch(err => console.log(err))

        return () => cancelTokenSource.cancel();
    }, [country])

    return (
        <>
            <h2>{country.name}</h2>
            <br/>
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population}</div>
            <br/>
            <h4>Languages</h4>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} width="150px" alt={"countryflag"}/>
            {weather === "" 
                ? ""
                : <>
                <h3>Weather in {country.name}</h3>
                    <div><b>Temperature: </b> {weather.current.temperature} Celsius</div>
                    <img src={weather.current.weather_icons} width="70px" alt="weathericon" />
                    <div><b>Wind: </b> {weather.current.wind_speed} mph</div>
                </>}
            
        </>
    )
}