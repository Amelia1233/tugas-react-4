import React, { useState } from 'react'
import './Planet.css'
import Tombol from '../tombol/Tombol'

function Planet(props) {
  const [showMore, setShowMore] = useState(true)
  const [like, setLike] = useState(true)

  function handleShowMore() {
    setShowMore(!showMore)
  }

  function handleLike() {
    setLike(!like)
  }

  return (
    <div className='card'>
      <h2>{props.nama}</h2>
      <img src={props.src} alt={props.nama} className='gambar' />
      {showMore && (
        <p className='text'> {props.desc} </p>
      )}
      <Tombol onClick={handleLike} backgroundColor={like ? '#B4CFB0' : '#C3B091'} text={like ? 'Cancle Like' : 'Like'} />
      <Tombol onClick={handleShowMore} text={showMore ? "Hide" : "Details"} />


    </div>
  )
}

export default Planet