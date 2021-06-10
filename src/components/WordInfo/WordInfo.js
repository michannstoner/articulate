import './WordInfo.css'
import Word from '../Word/Word'
import PropTypes from 'prop-types'

const WordInfo = ({ wordToDisplay, addToFavorites }) => {
  const word = 
    <Word
      key={wordToDisplay.frequency}
      word={wordToDisplay.word}
      definition={wordToDisplay.definition}
      pronunciation={wordToDisplay.pronunciation}
    />
  
  return (
    <section className='word-container'>
      {word}
      <button onClick={event => addToFavorites(event)}>favorites</button>
    </section>
  )
}

WordInfo.propTypes = {
  wordToDisplay: PropTypes.object,
  addToFavorites: PropTypes.func
}

export default WordInfo