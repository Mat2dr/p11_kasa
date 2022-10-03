import React from 'react'
import imgtest from '../utils/img-hero.png';

const Thumb = () => (
    <div class='thumb'>
        <div class='img-gradient'>
            <img class='thumb-img' src={ imgtest } alt="" />
        </div>
        <p class='thumb-title'>Titre de la location</p>
    </div>
  )

export default Thumb