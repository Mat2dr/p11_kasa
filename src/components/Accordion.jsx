import { Chevron } from './';
import React, { useState, useRef } from 'react';

function Accordion(props) {
    let descElements = "";

    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState('accordion-icon');

    const content = useRef(null);
    console.log(props.desc);

    function toggleAccordion() {
        setActiveState(setActive === '' ? "active" : '');
        setHeightState(setActive === 'active' ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === 'active' ? "accordion-icon" : "accordion-icon rotate");
    };

    function descriptionMaker() {
        if (props.title === "Équipements") {
            descElements = props.desc.map((element)=> {
                return (
                  <p key={element}>{element}</p>
                )
              });
              console.log("Its a list");
        } else {
            descElements = props.desc;
        }
    };
    descriptionMaker();
    

  return (
    <div className='accordion-section'>
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className='accordion-title'>{props.title}</p>
            <Chevron className={`${setRotate}`} />
        </button>
        <div ref={content} style={{ maxHeight: `${setHeight}`}} className='accordion-content'>
            <div className='accordion-text'>{descElements}</div>
        </div>
    </div>
  )
}

export default Accordion