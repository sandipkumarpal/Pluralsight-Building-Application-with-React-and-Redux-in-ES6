import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as serviceActions from '../../actions/serviceAction';
import toster from 'toastr';
import ServiceForm from './ServiceForm';

class ManageServicePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };
    this.updateServiceState = this.updateServiceState.bind(this);
    this.saveService = this.saveService.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id != nextProps.course.id) {
      this.setState({
        course: Object.assign({}, nextProps.course)
      });
    }
  }

  updateServiceState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    this.setState({
      course
    });
  }

  saveService(event){
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.saveService(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toster.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toster.success('Service saved');
    this.props.history.push('/services');
  }

  render() {
    return (
      <div className="alert alert-info" role="alert">
        <ServiceForm
          allAuthors={this.props.authors}
          onChange={this.updateServiceState}
          onSave={this.saveService}
          course={this.state.course}
          errors={this.state.errors}
          loading={this.state.saving}
        />
      </div>
    );
  }
}

ManageServicePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function getServiceById(services, id) {
  const service = services.filter(service => service.id == id);
  if(service) return service[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const serviceId = ownProps.params.id;
  let service = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    lenght: '',
    category: ''
  };
  if( serviceId && state.service.length > 0) {

    service = getServiceById(state.service, serviceId);
  }
  const authorsFormattedForDrodown = state.author.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    course: service,
    authors: authorsFormattedForDrodown
  };
}

function mapDispatchTpProps(dispatch) {
  return {
    actions: bindActionCreators(serviceActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchTpProps)(ManageServicePage);
