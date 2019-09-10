import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  const navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
  ];

  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to='/'>
          <i className={icon} />
          {' '}
          {title}
        </Link>
      </h1>
      <ul>
        {navItems.map(item => (
          <Link 
            key={item.name} 
            to={item.path}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
