import { useParams } from 'react-router-dom';
import Data from '../data.json';

import {Carrousel, Tag, Accordion, Rating } from './';

function LogementDetail() {
  let params = useParams();
  let details = '';

  const fetchDetails = () => {
    Data.forEach(element => {
      if (element.id === params.id) {
        details = element;
      }
    });
  };
  fetchDetails();
  
  const tags = details.tags.map((tag)=> {
    return (
      <Tag key={tag} name={tag} />
    )
  });


  return (
    <div>
      <div className='container-carrousel'>
        <Carrousel slides={details.pictures}/>
      </div>
      
      <div className="header-details">
        <div className="header-details--title">
          <h1>{ details.title }</h1>
          <h3>{ details.location }</h3>
        </div>
        <div className="header-details--host">
          <p>{ details.host.name }</p>
          <img src={ details.host.picture } alt="" />
        </div>
      </div>
      <div className="subheader-details">
        <div className="subheader-details--tags">
          {tags}
        </div>
        <div className="subheader-details--reviews">
          <Rating ratingStars={ details.rating }/>
        </div>
      </div>
      <div className='subheader-details--mobile'>
        <Rating ratingStars={ details.rating }/>
        <div className="header-details--host--mobile">
          <p>{ details.host.name }</p>
          <img src={ details.host.picture } alt="" />
        </div>
      </div>
      <div className='more-details'>
        <Accordion title="Description" desc={ details.description } />
        <Accordion title="Équipements" desc={ details.equipments } />
      </div> 
    </div>
  )
}

export default LogementDetail