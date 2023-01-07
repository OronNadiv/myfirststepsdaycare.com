import React from 'react'
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import About from './About'
import Daycare from './Daycare'
import Testimonials from './Testimonials'
import Gallery from './Gallery'
import Contact from './Contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Index = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={'/zoila'}
        render={() => (
          <CoreLayout>
            <About/>
          </CoreLayout>
        )}
      />
      <Route
        path={'/daycare'}
        render={() => (
          <CoreLayout>
            <Daycare/>
          </CoreLayout>
        )}
      />
      <Route
        path={'/testimonials'}
        render={() => (
          <CoreLayout>
            <Testimonials/>
          </CoreLayout>
        )}
      />
      <Route
        path={'/gallery'}
        render={() => (
          <CoreLayout>
            <Gallery/>
          </CoreLayout>
        )}
      />
      <Route
        path={'/contact'}
        render={() => (
          <CoreLayout>
            <Contact/>
          </CoreLayout>
        )}
      />
      <Route
        path='/'
        render={() => (
          <CoreLayout>
            <Home/>
          </CoreLayout>
        )}
      />
    </Switch>
  </BrowserRouter>
)

export default Index
