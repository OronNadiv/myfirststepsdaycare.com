import React, { Component } from 'react'
import './testimonials.scss'
import state from './state'
import { fromJS } from 'immutable'

class View extends Component {
  constructor (props) {
    super(props)
    this.state = {data: fromJS(state)}
  }

  render () {
    return (
      <div className='testimonials-page'>
        {
          this.state.data.map((testimonial, index) => {
            return (
              <div className='testimonial' key={index}>
                {
                  testimonial.get('expend')
                    ? testimonial.get('long')()
                    : testimonial.get('short')(() => this.setState({data: this.state.data.setIn([index, 'expend'], true)}))
                }
                <span className='testimonial-bottom'>- {testimonial.get('author')}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default View
