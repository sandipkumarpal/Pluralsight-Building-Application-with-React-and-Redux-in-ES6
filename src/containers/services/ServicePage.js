import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as serviceActions from '../../actions/serviceAction';

import ServiceList from './ServiceList';

class ServicePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="alert alert-info" role="alert">
        <h2 className="alert-heading">Service Page</h2>
        <hr />
        <ServiceList services={this.props.services}/>
      </div>
    );
  }
}

ServicePage.propTypes = {
  services: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    services: state.service
  };
}

function mapDispatchTpProps(dispatch) {
  return {
    actions: bindActionCreators(serviceActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchTpProps)(ServicePage);
