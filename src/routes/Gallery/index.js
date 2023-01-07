import React from 'react'
import './gallery.scss'
import ImageGallery from 'react-image-gallery'

const images = require('./images.json')

const Index = () => {
  return (
    <div className='gallery-page'>
      <ImageGallery
        items={images.map(image => {
          const {description, index} = image
          return {
            original: `/gallery/${index}.jpg`,
            thumbnail: `/gallery/thumbs/t${index}.jpg`,
            description
          }
        })}
      />
    </div>
  )
}

export default Index
