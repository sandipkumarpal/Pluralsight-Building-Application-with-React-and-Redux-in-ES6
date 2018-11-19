import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import HomePage from './containers/home/HomePage';
import AboutPage from './containers/about/AboutPage';
import CoursesPage from './containers/courses/CoursesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
  </Route>
);
