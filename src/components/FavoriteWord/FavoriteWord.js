import './FavoriteWord.css'
import minusIcon from '../../assets/minus-icon.png'

const FavoriteWord = ({ word, id, removeFromFavorites }) => {
  return (
    <div className='fav-word-container'>
      <ul>{word}</ul>
      <img id={id} onClick={removeFromFavorites} className='minus-icon' src={minusIcon} alt='minus icon to remove from favorites'/>
    </div>
  )
}

export default FavoriteWord