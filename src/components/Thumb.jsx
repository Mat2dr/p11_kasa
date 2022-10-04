import React from 'react'

function Thumb(props) {

  return (
    <div className='thumb'>
        <div className='img-gradient'>
            <img className='thumb-img' src={ props.coverImg } alt="" />
        </div>
        <p className='thumb-title'>{ props.title }</p>
    </div>
  )
}

export default Thumb