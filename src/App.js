import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Menu from './components/Menu/Menu';
import Application from './components/App/Application';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [show, setShow] = useState(false);

  const showScroll = () => {
    if (window.scrollY > 560) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener('scroll', showScroll);

  return (
    <>
      <a
        href='#home'
        className={`scrolltop ${show ? 'show-scroll' : ''}`}
        id='scroll-top'
      >
        <i className='bx bx-chevron-up scrolltop__icon'></i>
      </a>

      <Header />
      <main class='l-main'>
        <Hero />
        <About />
        <Services />
        <Menu />
        <Application />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
