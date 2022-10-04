import React, { useState } from 'react';
import arrowLeft from '../utils/arrow-left.png';
import arrowRight from '../utils/arrow-right.png';

function Carrousel(props) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

    return (
      <div className='slider'>
        <div className='leftArrow' onClick={goToPrevious}><img src={arrowLeft} alt="retour" /></div>
        <div className='rightArrow' onClick={goToNext}><img src={arrowRight} alt="suivant" /></div>
        <div className='numberSlide'>{currentIndex+1}/{props.slides.length}</div>
        <div className='slide' style={{ backgroundImage: `url(${props.slides[currentIndex]})`}}></div>
      </div>
    )
  }

export default Carrousel