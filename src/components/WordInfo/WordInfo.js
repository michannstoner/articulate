import './WordInfo.css'
import Word from '../Word/Word'

const WordInfo = ({ wordToDisplay, addToFavorites }) => {
  const word = 
    <Word
      key={wordToDisplay.frequency}
      word={wordToDisplay.word}
      definition={wordToDisplay.results[0].definition}
      pronunciation={wordToDisplay.pronunciation.all}
    />
  
  return (
    <section className='word-container'>
      {word}
      <button onClick={event => addToFavorites(event)}>favorites</button>
    </section>
  )
}

export default WordInfo