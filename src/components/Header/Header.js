import { useState } from 'react';
import { HeaderStyle } from './Header.style';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(false);
  const [show, setShow] = useState(false);

  if (theme) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  const showScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener('scroll', showScroll);

  return (
    <HeaderStyle className={`${show ? 'scroll-header' : ''}`} id='header'>
      <nav className='nav bd-container'>
        <a href='#home' className='nav__logo'>
          Tasty
        </a>

        <div
          className={`nav__menu ${toggle ? ' show-menu' : ''}`}
          id='nav-menu'
        >
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link active-link'>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#services' className='nav__link'>
                Services
              </a>
            </li>
            <li className='nav__item'>
              <a href='#menu' className='nav__link'>
                Menu
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                Contact us
              </a>
            </li>

            <li>
              <i
                onClick={() => setTheme(!theme)}
                className={`bx change-theme ${theme ? 'bx-sun' : 'bx-moon'}`}
                id='theme-button'
              ></i>
            </li>
          </ul>
        </div>

        <div
          className='nav__toggle'
          id='nav-toggle'
          onClick={() => setToggle(!toggle)}
        >
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
