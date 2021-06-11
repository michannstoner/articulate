import './Word.css' 
import PropTypes from 'prop-types'
import whiteSquare from '../../assets/white-square-icon.png'

const Word = ({ word, pronunciation, definition, synonyms, example }) => {
  return (
    <article className='word-card'>
      <h3 className='single-word'>{word}</h3>
      <div className='definition-divider'>
        <img className='pink-square' src={whiteSquare} alt='decorative pink square icon'/>
        <p className='definition'>{definition}</p>
      </div>
      <p><strong>pronunciation:</strong> {pronunciation}</p>
      <p><strong>synonyms:</strong> {synonyms}</p>
      <p><strong>example:</strong> {example}</p>
    </article>
  )
}

Word.propTypes = {
  word: PropTypes.string,
  pronunciation: PropTypes.string,
  definition: PropTypes.string
}

export default Word