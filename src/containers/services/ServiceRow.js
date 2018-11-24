import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class ServiceRow extends React.Component {
  render() {
    const { service } = this.props;
    return (
      <tr>
        <th><Link to={service.watchHref}>Watch</Link></th>
        <th><Link to={'/service/' + service.id}>{service.title}</Link></th>
        <th>{service.authorId}</th>
        <th>{service.category}</th>
        <th>{service.length}</th>
      </tr>
    );
  }
}

ServiceRow.propTypes = {
  service: PropTypes.array.isRequired
};

export default ServiceRow;
