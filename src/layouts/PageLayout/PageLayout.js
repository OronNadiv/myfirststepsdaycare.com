import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import classNames from 'classnames'

const router = require('react-router')

export const PageLayout = ({children, location}) => {
  const getListItem = (url, text) => {
    return (
      <li>
        <a
          className={classNames({active: location.pathname === url})}
          onClick={() => router.browserHistory.push(url)}
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
                src='/images/logo.png'
                width='289' height='54' alt='Logo'
              />
            </div>
            <div id='cloud1' className='special_font'>Call<br />now</div>
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
            Made by <a target='_blank' href='http://oronnadiv.com/'>Oron Nadiv</a>
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

export default PageLayout
