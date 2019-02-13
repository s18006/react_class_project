import React from 'react'

const WeatherContent = props => (
  <div className='container_weatherContent'>
    { props.city && props.country && <p> Location: { props.city} { props.country} </p> }
    { props.description && <p> Description: { props.description} </p> }
    { props.temperature && <p> Temperature: { props.temperature} Celsius </p> }
    { props.humidity && <p> Humidity: { props.humidity} </p> }
    { props.wind && <p> Wind speed: { props.wind} </p> }
    { !props.city && <p> Please enter your location and the country code! </p> }
  </div>
)

export default WeatherContent
