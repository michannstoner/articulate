import './Favorites.css'
import FavoriteWord from '../FavoriteWord/FavoriteWord'
import propTypes from 'prop-types'

const Favorites = ({ favoriteWords }) => {
  const favoritesList = favoriteWords.map(word => {
    return <FavoriteWord 
          key={word.frequency}
          word={word.word}
          />
  })

  return (
    <section> 
      {favoritesList}
    </section>
  )
}

Favorites.propTypes = {
  favoriteWords: propTypes.array,
  // key: propTypes.number,
  // word: propTypes.string
}

export default Favorites