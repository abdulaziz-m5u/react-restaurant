import { ApplicationStyle } from './Application.style';

import ApplicationImage from '../../images/app1.png';
import ApplicationImage2 from '../../images/app2.png';
import MovieApp from '../../images/movil-app.png';
const Application = () => {
  return (
    <ApplicationStyle className='app section bd-container'>
      <div className='app__container bd-grid'>
        <div className='app__data'>
          <span className='section-subtitle app__initial'>App</span>
          <h2 className='section-title app__initial'>App is aviable</h2>
          <p className='app__description'>
            Find our application and download it, you can make reservations,
            food orders, see your deliveries on the way and much more.
          </p>
          <div className='app__stores'>
            <a href='#'>
              <img
                src={ApplicationImage}
                alt='iphone download'
                className='app__store'
              />
            </a>
            <a href='#'>
              <img
                src={ApplicationImage2}
                alt='playstore download'
                className='app__store'
              />
            </a>
          </div>
        </div>

        <img src={MovieApp} alt='movi view' className='app__img' />
      </div>
    </ApplicationStyle>
  );
};

export default Application;
