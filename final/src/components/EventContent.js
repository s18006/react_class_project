import React from 'react'

const EventContent = (props) => {
  renderEvent = ({event_name, event_start, event_end, event_photo}) => <div> { event_name } </div> <div> { event_start } </div> <div> { event_end } </div> <div> { event_photo } </div> //sample create for mapping
  return (
    <div className='container_eventContent'>
    </div>
  )
}

export default EventContent
