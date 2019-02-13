import React from 'react'

const FormEvent = props => (
  <div className='form_getEvent'>
    <form onSubmit={props.getEvent}>
      <div className='container_city'>
        <input type='text' name='city' defaultValue='Naha' placeholder='city' />
      </div>
      <div className='container_within'>
        <input type='number' name='within' defaultValue='10' placeholder='country' />
      </div>
      <div className='container_Btn'>
        <button> Get Events </button>
      </div>
    </form>
  </div>
)

export default FormEvent
