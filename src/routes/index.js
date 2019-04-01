import React from 'react'
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import About from './About'
import Daycare from './Daycare'
import Testimonials from './Testimonials'
import Gallery from './Gallery'
import Contact from './Contact'
import { browserHistory, Router, Route, Redirect, IndexRoute } from 'react-router'

export default (store) => (
  <Router history={browserHistory}>
    <Route path='/' component={CoreLayout}>
      <IndexRoute
        component={Home}
      />
      <Route
        path={'/zoila'}
        component={About}
      />
      <Route
        path={'/daycare'}
        component={Daycare}
      />
      <Route
        path={'/testimonials'}
        component={Testimonials}
      />
      <Route
        path={'/gallery'}
        component={Gallery}
      />
      <Route
        path={'/contact'}
        component={Contact}
      />
    </Route>
    <Redirect
      from='*'
      to={'/'}
    />
  </Router>
)
