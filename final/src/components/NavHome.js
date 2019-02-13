import React from 'react'

const NavHome = props => (
  <div className='containerMenu'>
    <ul>
      <li className='calendar-option'>
        <div className='calendar-text'> CALENDAR</div>
        <div className='calendar-container'>
          <a href='/calendar'>Show my calendar!</a>
        </div>
      </li>
      <li className='weather-option'>
        <div className='weather-text'> WEATHER</div>
        <div className='weather-container'>
          <a href='/weather'> Show the forecast!</a>
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

export default NavHome
