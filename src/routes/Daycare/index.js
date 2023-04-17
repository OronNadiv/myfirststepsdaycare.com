import React from 'react'
import './daycare.scss'

const googleMapsUrl = 'https://maps.google.com/maps?' +
  'f=q&source=embed&hl=en&geocode=&q=1586+41st+Avenue,+San+Francisco,+CA&aq=0' +
  '&oq=1586+41st+Avenue&sll=37.757257,-122.500329&sspn=0.001221,0.002245&ie=UTF8' +
  '&hq=&hnear=1586+41st+Ave,+San+Francisco,+California+94122&t=m&ll=37.757212,-122.500219' +
  '&spn=0.020358,0.025749&z=14&iwloc=A'

const Index = () => {
  return (
    <div className='daycare-page'>
      <img
        alt='bear-and-blocks'
        src='/images/bear_and_blocks_transp.png'
        style={{marginTop: 10, marginRight: 20, marginLeft: 20, marginBottom: 10, float: 'right'}}
        width='200' height='200'
      />

      <p>My First Steps daycare is located at <a target='_blank' rel='noopener noreferrer' href={googleMapsUrl}>1586 41st Ave., San Francisco, CA
      </a>.&nbsp;&nbsp;It is licensed to serve up to eight children, of whom no more than
        three can be infants.&nbsp;&nbsp;Zoila runs My First Steps daycare in her home.&nbsp;&nbsp;The entire lower
        level is devoted to My First Steps Daycare, and houses a large play area, a small kitchen, a spacious backyard,
        and a separate nap room.</p>

      <h1>Nutrition</h1>
      <p>My First Steps Daycare provides fresh, homemade, balanced healthy meals using organic ingredients.&nbsp;&nbsp;
        Meals include breakfast, a morning snack, lunch, and an afternoon snack.</p>

      <h2>Breakfast</h2>
      <ul className='ticklist'>
        <li>Homemade bread (freshly made every other day) using organic wheat flour, organic flax seed powder, organic
          chia seed, and/or organic wheat germ
        </li>
        <li>Seasonal organic fruit</li>
        <li>Milk</li>
      </ul>

      <h2>Lunch</h2>
      <ul className='ticklist'>
        <li>Homemade hot meals daily</li>
        <li>Brown rice, organic meats (i.e., chicken, ground turkey, beef), organic vegetables</li>
        <li>Grains (i.e., quinoa, amaranth, millets)</li>
        <li>Seasonal organic fruit</li>
        <li>Milk</li>
      </ul>

      <h2>Snack</h2>
      <ul className='ticklist'>
        <li>Organic yogurt and cottage cheese or wheat crackers and milk</li>
      </ul>

      <h1>Activities and Daily Schedule</h1>
      <ul className='ticklist'>
        <li>7:00-8:00 AM: Children Arrive</li>
        <li>8:00 AM: Breakfast</li>
        <li>8:45 AM: Hygiene</li>
        <li>9:00 AM: Reading, puzzles/Nap time</li>
        <li>10:00 AM: Play time indoors or in backyard (depending on weather)</li>
        <li>12:00 PM: Lunch</li>
        <li>12:45 PM: Hygiene</li>
        <li>1:00 PM: Relax/Music time</li>
        <li>2:00 PM: Nap time</li>
        <li>4:00 PM: Afternoon snack</li>
        <li>5:00-6:00 PM: Pick-Up Time</li>
      </ul>

      <h1>Annual Reunions</h1>
      <p>
        When children attend My First Steps Daycare, they truly become a part of Zoila&#39;s extended
        family.&nbsp;&nbsp;Zoila and her family organize an annual picnic for all current and past attendees and their
        families.
      </p>
    </div>
  )
}

export default Index
