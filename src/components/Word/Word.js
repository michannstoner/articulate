import './Word.css' 
import PropTypes from 'prop-types'

const Word = ({ word, pronunciation, definition }) => {
  return (
    <article className='word-card'>
      <h3 className='single-word'>{word}</h3>
      <p>{pronunciation}</p>
      <p>{definition}</p>
    </article>
  )
}

Word.propTypes = {
  word: PropTypes.string,
  pronunciation: PropTypes.string,
  definition: PropTypes.string
}

export default Word