import './Favorites.css'
import FavoriteWord from '../FavoriteWord/FavoriteWord'
import homeIcon from '../../assets/home-icon.png'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'


const Favorites = ({ favoriteWords, removeFromFavorites, resetPage }) => {
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
      <div className='favorite-button-container'>
        <Link to='/'>
          <img className='home-icon' src={homeIcon} alt='home icon' onClick={resetPage}/>
        </Link>
        <p className='back-to-home'>back to home</p>
      </div>
    </section>
  )
}

Favorites.propTypes = {
  favoriteWords: propTypes.array,
  removeFromFavorites: propTypes.func,
}

export default Favorites