import {Hero , Thumb} from './';
import Data from '../data.json';

function Feed() {

  const appartements = Data.map((appartement)=> {
    console.log(appartement.cover);
    return(
      <Thumb key={ appartement.id } title={ appartement.title } coverImg={ appartement.cover }/>
    )
  })

  return (
    <div id='Feed'>
    <Hero />
    <div class='gallery'>
      {appartements}
    </div>
  </div>
  )
}

export default Feed


