import React from 'react'
import './Tombol.css'

function Tombol(props) {
  return (
      <button className = 'tom' onClick={props.onClick} style = {{backgroundColor: props.backgroundColor}}>{props.text}</button>
  )
}

export default Tombol