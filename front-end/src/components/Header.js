import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <h1>
        <Link
          className="header-title"
          to="/">Redduxit</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header;
