import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Home Page</h4>
        <p>When using button classes on elements that are used to trigger in-page functionalit
           (like collapsing content), rather than linking to new pages or sections within
           the current page, these links should be given a role="button" to appropriately
           convey their purpose to assistive technologies such as screen readers.</p>
        <hr/>
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.</p>
        <p><Link to="about" className="btn btn-success">Go to About Page</Link></p>
      </div>
    );
  }
}

export default HomePage;
