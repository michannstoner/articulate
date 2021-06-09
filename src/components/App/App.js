import './App.css'
import Form from '../Form/Form'
import Nav from '../Nav/Nav'
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      wordToDisplay: ''
    }
  }

  submitSearch = word => {
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
	      "method": "GET",
	      "headers": {
		      "x-rapidapi-key": "247406a57bmsh73bf0cce7ec0b4cp15cc72jsnf9d8d4aae1f1",
		      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	      }
    })
    .then(response => response.json())
    .then(data => this.setState({ wordToDisplay: data }))
  }

  render() {
    console.log(this.state.wordToDisplay);
    return (
      <main className='main'>
        <Nav />
        <Form submitSearch={this.submitSearch}/>
        <section className='welcome-display'>
          <h2>welcome to ARTICULATE.</h2>
          <p>search for a word to learn more</p>
        </section>
      </main>
    )
  }
}

export default App;