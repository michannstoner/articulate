import './App.css'
import blobIcon from '../../assets/blob-icon.png'
import Favorites from '../Favorites/Favorites'
import { fetchWord } from '../../utils/api-calls'
import { filterWordData } from '../../utils/cleaning-functions'
import Form from '../Form/Form'
import Nav from '../Nav/Nav'
import NotFound from '../NotFound/NotFound'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import WordInfo from '../WordInfo/WordInfo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      wordToDisplay: '',
      favorites: [],
      error: ''
    }
  }

  submitSearch = word => {
    fetchWord(word)
    .then(data => {
      const wordData = filterWordData(data);
      this.setState({ wordToDisplay: wordData })
  })
    .catch(error => this.setState({ error: 'Oops, something went wrong! Please search for a different word, or try again later.'}))
  }

  addToFavorites = event => {
    event.preventDefault()
    const favorites = this.state.favorites
    const wordToAdd = this.state.wordToDisplay

    if (!favorites.includes(wordToAdd)) {
      this.setState({favorites: [...favorites, wordToAdd]})
    }
  }

  removeFromFavorites = (event) => {
    const updatedFavorites = this.state.favorites.filter(word => {
      return word.frequency !== parseFloat(event.target.id) 
    })

    this.setState({ favorites: updatedFavorites })
  }

  render() {
    
    return (
      <main className='main'>
        <Nav />
        <Switch>
          <Route exact path ='/'
            render={() => (
              <div>
                <Form submitSearch={this.submitSearch}/>
                {this.state.error && <h3>{this.state.error}</h3>}
                {!this.state.wordToDisplay && !this.state.error &&
                  <section className='welcome-display'>
                    <div className='message-container'>
                      <img src={blobIcon} alt='pink abstract blob icon'/>
                      <div className='welcome-header'>welcome to ARTICULATE.</div>
                      <div className='search-to-learn'>look up a word & start learning</div>
                    </div>
                  </section>}
                {this.state.wordToDisplay &&
                  <WordInfo 
                    wordToDisplay={this.state.wordToDisplay}
                    addToFavorites={this.addToFavorites}
                  />}
              </div>
            )}
          />
          <Route exact path='/favorites'
            render={() => (
              !this.state.favorites.length ?
              <h3>No favorites yet!</h3>
              :
              <Favorites 
                favoriteWords={this.state.favorites} 
                removeFromFavorites={this.removeFromFavorites}
              />
            )}
          />
          <Route 
            render={() => (
              <NotFound />
            )}
          />
        </Switch>
      </main>
    )
  }
}

export default App;