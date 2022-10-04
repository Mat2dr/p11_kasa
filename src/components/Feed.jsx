import {Hero , Thumb} from './';
import Data from '../data.json';
import { Link } from 'react-router-dom';

function Feed() {

  const appartements = Data.map((appartement)=> {
    return(
      <Link key={ appartement.id } to={'/logement/'+appartement.id}>
        <Thumb title={ appartement.title } coverImg={ appartement.cover }/>
      </Link>
    )
  })

  return (
    <div id='Feed'>
    <Hero />
    <div className='gallery'>
      {appartements}
    </div>
  </div>
  )
}

export default Feed


