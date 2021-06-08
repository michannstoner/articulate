import './App.css'
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
      </main>
    )
  }
}

export default App;