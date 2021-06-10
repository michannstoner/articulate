import './Favorites.css'
import Word from '../Word/Word'
import propTypes from 'prop-types'

const Favorites = ({ favoriteWords }) => {
  const wordsToDisplay = favoriteWords.map(word => {
    return <Word
              key={word.frequency}
              word={word.word}
          />     
  })

  return (
    <section className='favorites-section'>
      {wordsToDisplay}
    </section>
  )
}

Favorites.propTypes = {
  favoriteWords: propTypes.array,
  // key: propTypes.number,
  // word: propTypes.string
}

export default Favorites