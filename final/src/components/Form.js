import React from 'react'

const Form = props => (
  <div className='form_getWeather'>
    <form onSubmit={props.getWeather}>
      <div className='container_city'>
        <input type='text' name='city' defaultValue='Okinawa' placeholder='city' />
      </div>
      <div className='container_country'>
        <input type='text' name='country' defaultValue='JP' placeholder='country' />
      </div>
      <div className='container_Btn'>
        <button> Get Weather </button>
      </div>
    </form>
  </div>
)

export default Form
