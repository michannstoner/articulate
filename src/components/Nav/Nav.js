import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className='nav'>
      <h1>A.</h1>
    <Link to={'/favorites'}>
      <ul>favorites</ul>
    </Link>
    </nav>
  )
}

export default Nav