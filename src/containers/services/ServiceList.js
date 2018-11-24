import React from 'react';
import PropTypes from 'prop-types';

import ServiceRow from './ServiceRow';

class ServiceList extends React.Component {
  render() {
    const { services } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service =>
            <ServiceRow key={service.id} service={service} />
          )}
        </tbody>
      </table>
    );
  }
}

ServiceList.propTypes = {
  services: PropTypes.array.isRequired
};

export default ServiceList;
