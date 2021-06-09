import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  const linkStyle = {textDecoration: 'none', color: 'black'}

  return (
    <nav className='nav'>
    <Link to='/' style={linkStyle}>
      <h1>A.</h1>
    </Link>
    <Link to={'/favorites'} style={linkStyle}>
      <ul>favorites</ul>
    </Link>
    </nav>
  )
}

export default Nav