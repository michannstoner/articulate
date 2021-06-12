import './Favorites.css'
import FavoriteWord from '../FavoriteWord/FavoriteWord'
import propTypes from 'prop-types'


const Favorites = ({ favoriteWords, removeFromFavorites }) => {
  const favoritesList = favoriteWords.map(word => {
    return <FavoriteWord 
              key={word.frequency}
              word={word.word}
              id={word.frequency}
              removeFromFavorites={removeFromFavorites}
            />
  })

  return (
    <section className='favorites-section'>
      <h2 className='favorites-header'>Favorites</h2>
      {favoritesList}
    </section>
  )
}

Favorites.propTypes = {
  favoriteWords: propTypes.array,
  removeFromFavorites: propTypes.func,
}

export default Favorites