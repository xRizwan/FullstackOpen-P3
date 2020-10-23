import React, { useState, useEffect } from 'react';
import Country from './Country';
import Single from './Single';

export default function Countries({ countries }) {
    const [ check, setCheck ] = useState(false);
    const [ check2, setCheck2 ] = useState(false);

    useEffect(() => {

        if(countries.length > 10) {
            setCheck(true);
        }
        else if(countries.length === 1) {
            setCheck2(true);
        }
        else {
            setCheck(false);
            setCheck2(false);
        }

    }, [countries])

    if (check) {
        return (
            <>
                <div>Too many results, choose a different query!</div>
            </>
        )
    }
    else if (check2) {
        return (
            <>
                {countries.map(country => <Single key={country.name} country={country}/>)}
            </>
        )
    }
    else {
        return (
            <>
            {countries.map(country => <Country data={country} key={country.name} />)}
            </>
        )
    }
}