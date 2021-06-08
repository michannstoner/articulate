import './Form.css'
import { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      searchBarValue: ''
    }
  }

  render() {
    return (
      <form className='search-bar'>
        <input 
          type='text'
          placeholder='search for a word'
          value={this.state.searchBarValue}
        />
      </form>
    )
  }
}

export default Form