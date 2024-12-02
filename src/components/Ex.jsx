import React from 'react'
import Ex2 from './Ex2'

const Ex = (props) => {
  return (
        <>
    <div>
        Main hoon Example {props.name}
        <Ex2 user={props.name}/>
    </div>
        </>
  )
}

export default Ex