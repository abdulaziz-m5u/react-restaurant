import { HeroStyle } from './Hero.style';

import HeroImage from '../../images/hero.png';
const Hero = () => {
  return (
    <HeroStyle className='home' id='home'>
      <div className='home__container bd-container bd-grid'>
        <div className='home__data'>
          <h1 className='home__title'>Tasty food</h1>
          <h2 className='home__subtitle'>
            Try the best food of <br /> the week.
          </h2>
          <a href='#menu' className='button'>
            View Menu
          </a>
        </div>

        <img src={HeroImage} alt='salad' className='home__img' />
      </div>
    </HeroStyle>
  );
};

export default Hero;
