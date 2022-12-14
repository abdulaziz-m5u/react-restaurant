import { FooterStyle } from './Footer.style';

const Footer = () => {
  return (
    <FooterStyle className='footer section bd-container'>
      <div className='footer__container bd-grid'>
        <div className='footer__content'>
          <a href='/#' className='footer__logo'>
            Tasty Food
          </a>
          <span className='footer__description'>Restaurant</span>
          <div>
            <a href='/#' className='footer__social'>
              <i className='bx bxl-facebook'></i>
            </a>
            <a href='/#' className='footer__social'>
              <i className='bx bxl-instagram'></i>
            </a>
            <a href='/#' className='footer__social'>
              <i className='bx bxl-twitter'></i>
            </a>
          </div>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>Services</h3>
          <ul>
            <li>
              <a href='/#' className='footer__link'>
                Delivery
              </a>
            </li>
            <li>
              <a href='/#' className='footer__link'>
                Pricing
              </a>
            </li>
            <li>
              <a href='/#' className='footer__link'>
                Fast food
              </a>
            </li>
            <li>
              <a href='/#' className='footer__link'>
                Reserve your spot
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>Information</h3>
          <ul>
            <li>
              <a href='#' className='footer__link'>
                Event
              </a>
            </li>
            <li>
              <a href='#contact' className='footer__link'>
                Contact us
              </a>
            </li>
            <li>
              <a href='#' className='footer__link'>
                Privacy policy
              </a>
            </li>
            <li>
              <a href='#' className='footer__link'>
                Terms of services
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>Adress</h3>
          <ul>
            <li>Lombok - Indonesia</li>
            <li>Senggigi street #999</li>
            <li>999 - 888 - 777</li>
            <li>tastyfood@email.com</li>
          </ul>
        </div>
      </div>

      <p className='footer__copy'>&#169; 2020 Abdul Aziz. All right reserved</p>
    </FooterStyle>
  );
};

export default Footer;
