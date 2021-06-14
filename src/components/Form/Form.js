import './Form.css'
import { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      searchBarValue: ''
    }
  }
  
  handleChange = event => {
    this.setState({ searchBarValue: event.target.value })
  }

  inputSearch = event => {
    event.preventDefault()
    this.props.submitSearch(this.state.searchBarValue)
    this.clearInputs(event)
  }

  clearInputs = event => {
    event.preventDefault()
    this.setState({ searchBarValue: '' })
  }

  render() {
    return (
      <form className='search-bar'>
        <input 
          type='text'
          placeholder='search for a word'
          value={this.state.searchBarValue}
          onChange={event => this.handleChange(event)}
        />
        <button className='go-button' disabled={!this.state.searchBarValue} onClick={event => this.inputSearch(event)}>GO</button>
      </form>
    )
  }
}

Form.propTypes = {
  submitSearch: PropTypes.func
}

export default Form