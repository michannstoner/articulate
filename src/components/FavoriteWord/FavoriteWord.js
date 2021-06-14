import './FavoriteWord.css'
import PropTypes from 'prop-types'
import trashCanIcon from '../../assets/trash-can-icon.png'

const FavoriteWord = ({ word, id, removeFromFavorites }) => {
  return (
    <div className='fav-word-container'>
        <p className='list-word'>{word}</p>
        <img id={id} onClick={removeFromFavorites} className='trash-icon' src={trashCanIcon} alt='trash can icon to remove from favorites'/>
    </div>
  )
}

FavoriteWord.propTypes = {
  word: PropTypes.string,
  id: PropTypes.number,
  removeFromFavorites: PropTypes.func
}

export default FavoriteWord