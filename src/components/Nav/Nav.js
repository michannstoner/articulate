import './Nav.css'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Nav = ({ resetPage }) => {
  const linkStyle = {textDecoration: 'none', color: 'black'}
  const activeStyle = {fontWeight: 700}

  return (
    <nav className='nav'>
    <Link to='/' style={linkStyle}>
      <h1 className='page-header' onClick={resetPage}>A.</h1>
    </Link>
    <NavLink to={'/favorites'} style={linkStyle} activeStyle={activeStyle}>
      <p className='favorites-link'>favorites</p>
    </NavLink>
    </nav>
  )
}

Nav.propTypes = {
  resetPage: PropTypes.func
}

export default Nav