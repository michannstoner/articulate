import './Word.css' 
import PropTypes from 'prop-types'
import pinkSquare from '../../assets/pink-square-icon.png'

const Word = ({ word, pronunciation, definition, synonyms }) => {
  const formattedSynonyms = synonyms.join(', ')
  return (
    <article className='word-card'>
      <h3 className='single-word'>{word}</h3>
      <div className='definition-divider'>
        <img className='pink-square' src={pinkSquare}/>
        <p className='definition'>{definition}</p>
      </div>
      <p><strong>pronunciation:</strong> {pronunciation}</p>
      <p><strong>synonyms:</strong> {formattedSynonyms}</p>
    </article>
  )
}

Word.propTypes = {
  word: PropTypes.string,
  pronunciation: PropTypes.string,
  definition: PropTypes.string
}

export default Word