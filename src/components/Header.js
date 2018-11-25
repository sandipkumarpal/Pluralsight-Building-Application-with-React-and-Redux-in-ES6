import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

function Header({ loading }) {
  return (
    <nav className="header">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/services" activeClassName="active">Services</Link>
      {loading && <LoadingDots inteval={100} dots={20}/>}
    </nav>
  );
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};
export default Header;
