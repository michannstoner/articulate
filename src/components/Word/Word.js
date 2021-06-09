import './Word.css' 

const Word = ({ word, pronunciation, definition }) => {
  return (
    <article className='word-card'>
      <h3>{word}</h3>
      <p>{pronunciation}</p>
      <p>{definition}</p>
    </article>
  )
}

export default Word