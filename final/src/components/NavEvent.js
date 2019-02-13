import React from 'react'

const NavEvent = props => (
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
      <li className='weather-option'>
        <div className='weather-text'> WEATHER</div>
        <div className='weather-container'>
          <a href='/weather'> Show the forecast!</a>
        </div>
      </li>
    </ul>
  </div>
)

export default NavEvent
