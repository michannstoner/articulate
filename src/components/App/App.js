import './App.css'
import Favorites from '../Favorites/Favorites'
import Form from '../Form/Form'
import Nav from '../Nav/Nav'
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import WordInfo from '../WordInfo/WordInfo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      wordToDisplay: '',
      favorites: []
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

  addToFavorites = event => {
    event.preventDefault()
    const favorites = this.state.favorites
    const wordToAdd = this.state.wordToDisplay.word

    if (!favorites.includes(wordToAdd)) {
      this.setState({favorites: [...favorites, wordToAdd]})
    }

  }

  render() {
    console.log(this.state.favorites);
    return (
      <main className='main'>
        <Nav />
        <Route exact path ='/'
        render={()}
        <Form submitSearch={this.submitSearch}/>
        {!this.state.wordToDisplay && <section className='welcome-display'>
          <h2>welcome to ARTICULATE.</h2>
          <p>search for a word to learn more</p>
        </section>}
        {this.state.wordToDisplay && 
          <WordInfo 
            wordToDisplay={this.state.wordToDisplay}
            addToFavorites={this.addToFavorites}
        />}
        <Route exact path='/favorites'
          render={() => (
            !this.state.favorites.length ?
            <h3>No favorites yet!</h3>
            :
            <Favorites />
          )}
        />
      </main>
    )
  }
}

export default App;