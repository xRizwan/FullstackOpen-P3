import React from 'react';
import Part from './Part';

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => <Part part={part} key={part.id}/>)}
    </div>
  )
}

export default Content;