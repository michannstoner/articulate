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
        <section className='welcome-display'>
          <h2>welcome to ARTICULATE.</h2>
          <p>search for a word to learn more</p>
        </section>
      </main>
    )
  }
}

export default App;