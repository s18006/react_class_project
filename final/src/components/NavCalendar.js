import React from 'react'

const NavCalendar = props => (
  <div className='containerMenu'>
    <ul>
      <li className='home-option'>
        <div className='home-text'> HOME</div>
        <div className='home-container'>
          <a href='/'> Back to homepage!</a>
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

export default NavCalendar
