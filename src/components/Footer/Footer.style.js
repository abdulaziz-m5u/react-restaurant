import styled from 'styled-components';

export const FooterStyle = styled.footer`
  .footer__container {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 2rem;
  }

  .footer__logo {
    font-size: var(--h3-font-size);
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
  }

  .footer__description {
    display: block;
    font-size: var(--small-font-size);
    margin: 0.25rem 0 var(--mb-3);
  }

  .footer__social {
    font-size: 1.5rem;
    color: var(--title-color);
    margin-right: var(--mb-2);
  }

  .footer__title {
    font-size: var(--h2-font-size);
    color: var(--title-color);
    margin-bottom: var(--mb-2);
  }

  .footer__link {
    display: inline-block;
    color: var(--text-color);
    margin-bottom: var(--mb-1);
  }

  .footer__link:hover {
    color: var(--first-color);
  }

  .footer__copy {
    text-align: center;
    font-size: var(--small-font-size);
    color: var(--text-color-light);
    margin-top: 3.5rem;
  }
`;
