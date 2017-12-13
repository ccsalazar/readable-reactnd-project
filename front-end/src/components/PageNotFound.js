import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="center-content">
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button className="btn">Go to HomePage</button>
      </Link>
    </div>
  )
}

export default PageNotFound;
