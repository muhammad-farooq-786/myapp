import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react'
const Button = () => {
  const[value, setValue] = useState(0)

  function increment(){
    setValue(value+1)
  }
  function decrement(){
    setValue(value-1)
  }
  return (
    <div className='d-flex justify-content-center'>
      <button className='btn btn-success' onClick={increment}>+</button>
      <h3 className='h1'>{value}</h3>
      <button className='btn btn-danger' onClick={decrement}>-</button>
    </div>
  )
}
export default Button
