import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);

  /*========== NAV ==========*/
  .nav {
    max-width: 1024px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 768px) {
      height: calc(var(--header-height) + 1.5rem);
    }
  }

  @media screen and (max-width: 768px) {
    .nav__menu {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      padding: 1.5rem 0 1rem;
      text-align: center;
      background-color: var(--body-color);
      transition: 0.4s;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 0 0 1rem 1rem;
      z-index: var(--z-fixed);
    }
  }

  .nav__item {
    margin-bottom: var(--mb-2);
  }

  .nav__link,
  .nav__logo,
  .nav__toggle {
    color: var(--text-color);
    font-weight: var(--font-medium);
  }

  .nav__logo:hover {
    color: var(--first-color);
  }

  .nav__link {
    transition: 0.3s;
  }

  .nav__link:hover {
    color: var(--first-color);
  }

  .nav__toggle {
    font-size: 1.3rem;
    cursor: pointer;
  }

  /* Show menu */
  .show-menu {
    top: var(--header-height);
  }

  /* Active menu */
  .active-link {
    color: var(--first-color);
  }
`;
