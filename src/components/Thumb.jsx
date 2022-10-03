import React from 'react'
import imgtest from '../utils/img-hero.png';

function Thumb(props) {

  return (
    <div class='thumb'>
        <div class='img-gradient'>
            <img class='thumb-img' src={ props.coverImg } alt="" />
        </div>
        <p class='thumb-title'>{ props.title }</p>
    </div>
  )
}

export default Thumb