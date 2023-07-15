import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <nav className='navbar'>
        <Link to='/' className="navbar-logo">
          EED logo
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to='/history' className="nav-links" onClick={closeMobileMenu}>
              History of EED
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/students' className="nav-links" onClick={closeMobileMenu}>
              Students
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/courses' className="nav-links" onClick={closeMobileMenu}>
              Courses Provided <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown parent="courses" />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/staff' className="nav-links" onClick={closeMobileMenu}>
              Main Staff <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown parent="staff" />}
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/grievances' className="nav-links" onClick={closeMobileMenu}>
              Grievances
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
