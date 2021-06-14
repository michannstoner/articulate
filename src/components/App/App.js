import './App.css'
import blobIcon from '../../assets/blob-icon.png'
import Favorites from '../Favorites/Favorites'
import { fetchWord } from '../../utils/api-calls'
import { filterWordData } from '../../utils/cleaning-functions'
import Form from '../Form/Form'
import homeIcon from '../../assets/home-icon.png'
import { Link } from 'react-router-dom'
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

  addToFavorites = () => {
    const favorites = this.state.favorites
    const wordToAdd = this.state.wordToDisplay

    if (favorites.length) {
      const isInFavorites = favorites.find(wordObj => {
        return wordObj.word === wordToAdd.word

      })
      return isInFavorites === undefined ? this.setState({ favorites: [...favorites, wordToAdd]}) : this.setState({ favorites: [...favorites] })
    } else {
      this.setState({ favorites: [wordToAdd] })
    }
  }

  removeFromFavorites = (event) => {
    const updatedFavorites = this.state.favorites.filter(word => {
    
      return word.frequency !== parseFloat(event.target.id) 
    })

    this.setState({ favorites: updatedFavorites })
  }

  resetPage = () => {
    this.setState({ wordToDisplay: '', error: '' })
  }

  render() {
    return (
      <main className='main'>
        <Nav resetPage={this.resetPage}/>
        <Switch>
          <Route exact path ='/'
            render={() => (
              <div>
                {this.state.error && 
                  <div>
                    <h3 className='error-message'>{this.state.error}</h3>
                    <button className='error-back-button' onClick={this.resetPage}>GO BACK</button>
                  </div>}
                {!this.state.wordToDisplay && !this.state.error &&
                <div>
                  <Form submitSearch={this.submitSearch}/>
                  <section className='welcome-display'>
                    <div className='message-container'>
                      <img className='welcome-blob' src={blobIcon} alt='pink abstract blob icon'/>
                      <div className='welcome-header'>welcome to ARTICULATE.</div>
                      <div className='search-to-learn'>look up a word & start learning</div>
                    </div>
                  </section></div>}
                {this.state.wordToDisplay && 
                  <div>
                  <button className='search-another' onClick={this.resetPage}>SEARCH FOR ANOTHER WORD</button>
                  <WordInfo 
                    wordToDisplay={this.state.wordToDisplay}
                    addToFavorites={this.addToFavorites}
                  /></div>}
              </div>
            )}
          />
          <Route exact path='/favorites'
            render={() => (
              !this.state.favorites.length ?
              <div>
                <h3 className='no-favorites'>Nothing in favorites yet!</h3>
                <div className='favorite-button-container'>
                <Link to='/'>
                  <img className='home-icon' src={homeIcon} alt='home icon' onClick={this.resetPage}/>
                </Link>
                <p className='back-to-home'>back to home</p>
              </div>

              </div>
              :
              <Favorites 
                favoriteWords={this.state.favorites} 
                removeFromFavorites={this.removeFromFavorites}
                resetPage={this.resetPage}
                addToFavorites={this.addToFavorites}
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