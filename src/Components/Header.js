import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

const Header = (props) => {
  return (
    <>
      <h1>Hello World from {props.name}</h1>
      <p>This is my first react app</p>
    </>
  )
}

export default Header
