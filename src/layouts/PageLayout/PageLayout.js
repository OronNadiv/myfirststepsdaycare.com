import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import classNames from 'classnames'

import { withRouter } from 'react-router-dom'

export const PageLayout = ({children, location, history}) => {
  const getListItem = (url, text) => {
    return (
      <li>
        <a
          className={classNames({active: location.pathname === url})}
          onClick={() => history.push(url)}
        >
          {text}
        </a>
      </li>
    )
  }

  return (
    <div>
      <div id='bg_top'>
        <div id='wrapper'>
          <div id='header'>
            <div id='logo'>
              <img
                alt='logo'
                src='/images/logo.png'
                width='289' height='54'
              />
            </div>
            <div id='cloud1' className='special_font'>Call<br/>now</div>
            <div id='cloud2' className='special_font'>415.564.7703</div>
            <div id='menu'>
              <ul id='navigation'>
                {getListItem('/', 'Home')}
                {getListItem('/zoila', 'About Zoila')}
                {getListItem('/daycare', 'The Daycare')}
                {getListItem('/testimonials', 'Testimonials')}
                {getListItem('/gallery', 'Gallery')}
                {getListItem('/contact', 'Contact Me')}
              </ul>
            </div>
          </div>
          <div id='content_bg'>
            <div id='content'>
              {children}
            </div>
            <br
              className='clear'
            />
          </div>
          <div id='footer'>
            Made by <a target='_blank' rel='noopener noreferrer' href='http://oronnadiv.com/'>Oron Nadiv</a>
          </div>
        </div>
      </div>
      <div id='grass'>
        <div
          id='footer_design'
        />
      </div>
    </div>

  )
}
PageLayout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object.isRequired
}

export default withRouter(PageLayout)
