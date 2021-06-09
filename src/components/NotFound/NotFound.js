import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {


  return (
    <section className='not-found'>
      <h3>Page not found</h3>
      <Link to='/'>
        <button>back</button>
      </Link>
    </section>
  )
}

export default NotFound