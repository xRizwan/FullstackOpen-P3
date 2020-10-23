import React, { useState, useEffect } from 'react';

const Notification = (props) => {

  let [message, setMessage] = useState(props.message)

    useEffect(() => {
        setMessage(props.message)

        setTimeout(() => {
            setMessage(null)
        }, 1200)

    }, [props.message])

    if (message === null) {
      return null
    }
  
    return (
      <div className="success">
        {message}
      </div>
    )
}

export default Notification