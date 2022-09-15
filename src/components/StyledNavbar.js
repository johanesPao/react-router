import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={`link ${({ isActive }) => isActive && 'active'}`}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={`link ${({ isActive }) => isActive && 'active'}`}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={`link ${({ isActive }) => isActive && 'active'}`}
      >
        Products
      </NavLink>
      <NavLink
        to='/login'
        className={`link ${({ isActive }) => isActive && 'active'}`}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
