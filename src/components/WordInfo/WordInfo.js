import './WordInfo.css'
import Word from '../Word/Word'
import PropTypes from 'prop-types'
import blueBlobIcon from '../../assets/blue-blob-icon.png'
import heartIcon from '../../assets/heart-icon.png'

const WordInfo = ({ wordToDisplay, addToFavorites }) => {
  const word = 
    <Word
      key={wordToDisplay.frequency}
      word={wordToDisplay.word}
      definition={wordToDisplay.definition}
      pronunciation={wordToDisplay.pronunciation}
      synonyms={wordToDisplay.synonyms}
    />
  
  return (
    <section className='word-container'>
      <div>

      {word}
      </div>
      <div className='favorite-button-container'>
        <img className='heart-icon' src={heartIcon} alt='heart icon' onClick={event => addToFavorites(event)}/>
        <p className='add-to-favorites'>add to favorites</p>
      </div>
    </section>
  )
}

WordInfo.propTypes = {
  wordToDisplay: PropTypes.object,
  addToFavorites: PropTypes.func
}

export default WordInfo