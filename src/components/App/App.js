import './App.css'
import Form from '../Form/Form'
import Nav from '../Nav/Nav'
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <main className='main'>
        <Nav />
        <Form />
      </main>
    )
  }
}

export default App;