import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <h1 className="header-title">
        <Link to="/">Redux Room</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header;
