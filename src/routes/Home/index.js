import React from 'react'
import './home.scss'

export default () => {
  return (
    <div className='main-page'>
      <h1>Welcome to My First Steps Daycare</h1>
      <img
        src='/images/welcome.png' alt='' width='300' height='250' style={{paddingLeft: 50, float: 'right'}}
      />
      <p>
        My First Steps is a licensed family daycare in the Outer Sunset neighborhood of San Francisco.
        <br />
        <br />
        My First Steps provides a tender, caring, and nurturing environment which enhances and stimulates children's
        physical, social, and emotional growth.
        <br />
        <br />
        Please feel free to <a href='/contact'>contact me</a> with any questions or suggestions.
      </p>
    </div>
  )
}
