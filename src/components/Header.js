import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

function Header() {
  return (
    <nav className="header">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
    </nav>
  );
}

export default Header;
