import React, { useState } from 'react';
import Single from './Single';

export default function Country({ data }) {

    const [ show, setShow ] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <>
            <div>
                {show ? "" : <span>{data.name}</span>}
                <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
            </div>
            {show ? <Single country={data}/> : ""}
        </>
    )
}