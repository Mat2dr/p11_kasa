import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <span>404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <button><Link to='/'>Retourner sur la page d’accueil</Link></button>
    </div>
  )
}

export default PageNotFound