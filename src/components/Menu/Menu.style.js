import styled from 'styled-components';

export const MenuStyle = styled.section`
  .menu__container {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  .menu__content {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--container-color);
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(3, 74, 40, 0.15);
    padding: 0.75rem;
  }

  .menu__img {
    width: 100px;
    align-self: center;
    margin-bottom: var(--mb-2);
  }

  .menu__name,
  .menu__preci {
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
  }

  .menu__name {
    font-size: var(--normal-font-size);
  }

  .menu__detail,
  .menu__preci {
    font-size: var(--small-font-size);
  }

  .menu__detail {
    margin-bottom: var(--mb-1);
  }

  .menu__button {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    padding: 0.625rem 0.813rem;
    border-radius: 0.5rem 0 0.5rem 0;
  }
`;
