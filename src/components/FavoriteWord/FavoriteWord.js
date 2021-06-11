import './FavoriteWord.css'

const FavoriteWord = ({ word }) => {
  return (
    <div className='fav-word-container'>
      <ul>{word}</ul>
      <button>remove</button>
    </div>
  )
}

export default FavoriteWord