import './Nav.css'
import { NavLink, Link } from 'react-router-dom'

const Nav = ({ resetPage }) => {
  const linkStyle = {textDecoration: 'none', color: 'black'}
  const activeStyle = {fontWeight: 700}

  return (
    <nav className='nav'>
    <Link to='/' style={linkStyle}>
      <h1 className='page-header' onClick={resetPage}>A.</h1>
    </Link>
    <NavLink to={'/favorites'} style={linkStyle} activeStyle={activeStyle}>
    <div className='link-divider'>
      <p className='favorites-link'>favorites</p>
      </div>
    </NavLink>
    </nav>
  )
}

export default Nav