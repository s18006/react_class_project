import React from 'react'

const NavWeather = props => (
  <div className='containerMenu'>
    <ul>
      <li className='home-option'>
        <div className='home-text'> HOME</div>
        <div className='home-container'>
          <a href='/'> Back to homepage!</a>
        </div>
      </li>
      <li className='calendar-option'>
        <div className='calendar-text'> CALENDAR</div>
        <div className='calendar-container'>
          <a href='/calendar'> Show my calendar!</a>
        </div>
      </li>
      <li className='programs-option'>
        <div className='programs-text'> EVENTS </div>
        <div className='programs-container'>
          <a href='/events'> Show the events!</a>
        </div>
      </li>
    </ul>
  </div>
)

export default NavWeather
