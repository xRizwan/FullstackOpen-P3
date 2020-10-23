import React from 'react';

const Total = ({ course }) => {
    const parts = [...course.parts]
    const total = parts.reduce((accu, cur) => accu + cur.exercises, 0)

    return(
        <b>Total of {total} exercises</b>
    ) 
}

export default Total;