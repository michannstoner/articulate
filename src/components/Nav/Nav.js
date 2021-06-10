import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  const linkStyle = {textDecoration: 'none', color: 'black'}

  return (
    <nav className='nav'>
    <Link to='/' style={linkStyle}>
      <h1 className='page-header'>A.</h1>
    </Link>
    <Link to={'/favorites'} style={linkStyle}>
    <div className='link-divider'>
      <ul className='favorites-link'>favorites</ul>
      </div>
    </Link>
    </nav>
  )
}

export default Nav