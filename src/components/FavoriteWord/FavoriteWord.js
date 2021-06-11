import './FavoriteWord.css'
import minusIcon from '../../assets/minus-icon.png'
import PropTypes from 'prop-types'

const FavoriteWord = ({ word, id, removeFromFavorites }) => {
  return (
    <div className='fav-word-container'>
      <ul>{word}</ul>
      <img id={id} onClick={removeFromFavorites} className='minus-icon' src={minusIcon} alt='minus icon to remove from favorites'/>
    </div>
  )
}

FavoriteWord.propTypes = {
  word: PropTypes.string,
  id: PropTypes.number,
  removeFromFavorites: PropTypes.func
}

export default FavoriteWord