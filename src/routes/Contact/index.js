import React from 'react'
import './contact.scss'

const googleMapsUrl = 'https://maps.google.com/maps?' +
  'f=q&source=embed&hl=en&geocode=' +
  '&q=1586+41st+Avenue,+San+Francisco,+CA&aq=0&oq=1586+41st+Avenue&sll=37.757257,-122.500329' +
  '&sspn=0.001221,0.002245&ie=UTF8&hq=' +
  '&hnear=1586+41st+Ave,+San+Francisco,+California+94122' +
  '&t=m&ll=37.757212,-122.500219&spn=0.020358,0.025749&z=14' +
  '&iwloc=A'

const googleMapsUrl2 = 'https://maps.google.com/maps?' +
  'f=q&source=embed&hl=en&geocode=' +
  '&q=1586+41st+Avenue,+San+Francisco,+CA&aq=0&oq=1586+41st+Avenue&sll=37.757257,-122.500329' +
  '&sspn=0.001221,0.002245&ie=UTF8&hq=' +
  '&hnear=1586+41st+Ave,+San+Francisco,+California+94122' +
  '&t=m&ll=37.757212,-122.500219&spn=0.020358,0.041113&z=14' +
  '&iwloc=near&output=embed'

const Index = () => {
  return (
    <div className='contact-page'>
      <div id='left_column1'>
        <div className='left_details'>
          <p>
            <h2 className='contact_title'>Phone:</h2>
            <a
              target='_blank' rel='noopener noreferrer'
              href='tel:415-564-7703'>
              (415) 564-7703
            </a>
          </p>
          <p>
            <h2>Address:</h2>
            <a
              target='_blank' rel='noopener noreferrer'
              href={googleMapsUrl}>
              1586 41st Ave.
              <br />
              San Francisco, CA, 94122
            </a>
          </p>
        </div>
      </div>
      <div className='main_right'>
        <div className='googlemap'>
          <iframe title='googlemap'
            width='480' height='300'
            frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0'
            src={googleMapsUrl2}
          />
        </div>
      </div>
    </div>
  )
}

export default Index
