import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseAction';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: ''
      }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course
    });
  }

  onClickSave() {
      this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div className="alert alert-danger" role="alert">
        <h2 className="alert-heading">Courses Page</h2>
        <hr />
        {this.props.courses.map(this.courseRow)}
        <h4>Add Courses</h4>
        <div className="input-group mb-5">
          <input
            type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title}
            className="form-control"
          />
          <div className="input-group-append">
            <input
              type="submit"
              onClick={this.onClickSave}
              value="Save"
              className="btn btn-danger"
            />
          </div>
        </div>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.course
  };
}

function mapDispatchTpProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchTpProps)(CoursesPage);
