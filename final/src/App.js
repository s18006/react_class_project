import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavHome from './components/NavHome'
import NavCalendar from './components/NavCalendar'
import NavWeather from './components/NavWeather'
import Titles from './components/Titles'
import Form from './components/Form'
import FormEvent from './components/FormEvent'
import WeatherContent from './components/WeatherContent'
import NavEvent from './components/NavEvent'
//import EventContent from './components/EventContent'
import './App.css'


//api key for weather part
const API_KEY = '********************'

const API_KEY_EVENT = '******************'

const HelloApp = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/weather' component={Weather} />
      <Route path='/events' component={Events} />
    </div>
  </Router>
)

class Home extends Component {
  render () {
    return (
      <div id='app'>
        <div className='containerWelcome'> Welcome! This is your app! </div>
        <div className='container-main'>
          <NavHome />
        </div>
        <div className='container-footer'>
        </div>
      </div>
    )
  }
}

class Calendar extends Component {

  state = {
    deadlines: [],
    deadline: {
      action: undefined,
      date: undefined
    }
  }

  componentDidMount() {
    this.getDeadlines()
  }

  getDeadlines = _ => {
    fetch('http://localhost:8081/deadlines')
      .then(response => response.json())
      .then(response => this.setState({ deadlines: response.data }))
      .catch(err => console.error(err))
  }

  addDeadlines = _ => {
    const { deadline } = this.state
    fetch(`http://localhost:8081/deadlines/add?action=${deadline.action}&deadline=${deadline.date}`)
      .then(this.getDeadlines)
      .catch(err => console.error(err))
  }

  renderDeadlines = ({id, action, date}) => <tr> <td> { id } </td> <td> { action } </td> <td> { date } </td> </tr> //sample create for mapping

  render() {
    const { deadlines, deadline } = this.state //define argument from state
    return (
      <div id='app'>
        <div className='containerWelcome'> Hmm... Let's look, what we have to do today </div>
        <div className='container-main'>
          <NavCalendar />
          <div className='container-deadlines'>
            <h2> My calendar </h2>
            <div className='container_input'>
              <div className='container_action'>
                <input type='text'
                  placeholder='name of event'
                  value={ deadline.action }
                  onChange = { e => this.setState ({ deadline: { ...deadline, action: e.target.value }})} />
              </div>
              <div className='container_date'>
                <input type='datetime-local'
                  value={ deadline.date }
                  onChange = { e => this.setState ({ deadline: { ...deadline, date: e.target.value }})} />
              </div>
              <div className='container_Btn'>
                <button onClick={this.addDeadlines}> Add New Deadlines </button>
              </div>
            </div>
            <table>
              <tr>
                <th> </th>
                <th> Event </th>
                <th> Date of event </th>
              </tr>
                {deadlines.map(this.renderDeadlines)}
            </table>
          </div>
        </div>
        <div className='container-footer'>
        </div>
      </div>
    )
  }
}

class Weather extends Component {
  //define getWeather function with arrow function (skip the constuct function)

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    if (city && country) {
      console.log(data)
      //manipulate the state values with setState
      this.setState({
        temperature: data.main.temp, // in json datas /main/temp (check with console.log for sure)
        city: data.name, //in json datas /name
        country: data.sys.country, // in json datas /sys/country
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        error: ''
      })
    }
  }

  render () {
    return (
      <div id='app'>
         <div className='containerWelcome'> Let's look, what the weather like today
        </div>
        <div className='container-main'>
          <NavWeather />
           <div className='container-weather'>
            <Titles />
            <div>
              <Form getWeather={ this.getWeather } />
            </div>
            <WeatherContent
              temperature = {this.state.temperature}
              city = {this.state.city}
              country = {this.state.country}
              humidity = {this.state.humidity}
              wind = {this.state.wind}
              description = {this.state.description}
              error = {this.state.error}
            />
          </div>
        </div>
        <div className='container-footer'>
        </div>
      </div>
    )
  }
}


const datediff = (e) => {
    let first_change = e.replace('T', ' ')
    let second_change = first_change.substring(0, first_change.lastIndexOf(':'))
    return second_change
}

class Events extends Component {

  state = {
    events: []
  }

  getEvent = async (e) => {
    e.preventDefault()
    this.setState({
      events: []
    })
    const city = e.target.elements.city.value
    const within = e.target.elements.within.value
    const api_call = await fetch(`https://www.eventbriteapi.com/v3/events/search/?location.address=${city}&location.within=${within}km&token=${API_KEY_EVENT}`)
    const data = await api_call.json()
    let loop = 10;
    if (data.pagination.object_count < loop) {
      loop = data.pagination.object_count
    }
    for (let i = 0; i < loop; i++) {
      let event_name_data = data.events[i].name.text
      let event_start_data = datediff(data.events[i].start.local)
      let event_end_data = datediff(data.events[i].end.local)
      let event_photo_data = 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Eventbrite_logo_2018.png'
      if (data.events[i].logo != null) {
        event_photo_data = data.events[i].logo.original.url
      }
      let events_data = [event_name_data, event_start_data, event_end_data, event_photo_data]
      this.setState({
        events: this.state.events.concat([events_data]),
      })
    }
  }

  render () {
    const EventContent = this.state.events.map((event) =>
      <div className='container-event_row'>
        <div className='container-event_img'>
          <img width='100' height='100' src={event[3]} alt={event[1]} />
        </div>
        <div className='container-event_content'>
          <p className='p_event'> {event[0]} </p>
          <p className='p_event'> Start: {event[1]} </p>
          <p className='p_event'> End: {event[2]} </p>
        </div>
      </div>
    );
    return (
      <div id='app'>
        <div className='containerWelcome'> If you have time, this is my offer for today </div>
        <div className='container-main'>
          <NavEvent />
          <div className='container-events'>
            <h2> Event finder </h2>
            <FormEvent getEvent={ this.getEvent } />
            <div className='container-event_stamps'>
              {EventContent}
            </div>
          </div>
        </div>
        <div className='container-footer'>
        </div>
      </div>
    )
  }
}
export default HelloApp
