//rafce to autocomplete
import { Link } from 'react-router-dom';

import logo from '../utils/logo.png';

const NavBar = () => (
  <div id='NavBar'>
    <Link to='/'>
      <img src={logo} alt="logo kasa" />
    </Link>
    
    <ul>
      <li><Link to='/'>Accueil</Link></li>
      <li><Link to='/about'>A Propos</Link></li>
    </ul>
  </div>
)

export default NavBar