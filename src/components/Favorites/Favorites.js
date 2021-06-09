import './Favorites.css'
import Word from '../Word/Word'

const Favorites = ({ favoriteWords }) => {
  console.log(favoriteWords);
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

export default Favorites