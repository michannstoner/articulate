import './Word.css' 

const Word = ({ word, definition, example }) => {
  return (
    <article className='word-card'>
      <h3>{word}</h3>
      <p>{definition}</p>
      <p>{example}</p>
    </article>
  )
}

export default Word