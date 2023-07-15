import React, { useState } from "react";
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown({ parent }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const filteredMenuItems = MenuItems.filter(item => item.parent === parent);

  return (
    <>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {filteredMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default Dropdown;
