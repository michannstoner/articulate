import './Form.css'
import { Component } from 'react'

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

  render() {
    console.log(this.state.searchBarValue)
    return (
      <form className='search-bar'>
        <input 
          type='text'
          placeholder='search for a word'
          value={this.state.searchBarValue}
          onChange={event => this.handleChange(event)}
        />
        <button>search</button>
      </form>
    )
  }
}

export default Form