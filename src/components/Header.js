import React from 'react';
import Scroll from 'react-scroll';
import './Header.css';

const Link = Scroll.Link;

const Header = () => {

  const thankYouMessage = window.location.hash === '#thanks';
  const scrollDuration = 600;

  return(
    <header>
      {thankYouMessage && <div className="thank-you">
        <svg id='mail-icon' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
          <path className='st0' d='M214.4,244.6L103.6,134.4c3.9-2.2,8.4-3.4,13.2-3.4h278.4c4.8,0,9.3,1.2,13.2,3.4L297.6,244.6l-13.2,13.1 L262,280c-2.1,2.1-4.7,2.5-6,2.5s-3.8-0.3-6-2.5L214.4,244.6z'/>
          <path className='st0' d='M201.3,257.7L92.5,365.8c-1.7-3.5-2.7-7.5-2.7-11.7V157.9c0-3.3,0.6-6.4,1.7-9.3L201.3,257.7z'/>
          <path className='st0' d='M297.6,270.8l108.5,107.9c-3.3,1.5-7,2.3-10.9,2.3H116.8c-3.9,0-7.6-0.8-10.9-2.3l108.5-107.9l22.5,22.3 c5.3,5.2,12.2,7.9,19.1,7.9s13.8-2.6,19.1-7.9L297.6,270.8z'/>
          <path className='st0' d='M422.2,157.9v196.2c0,4.2-1,8.2-2.7,11.7L310.8,257.7l109.8-109.2C421.6,151.5,422.2,154.6,422.2,157.9z'/>
        </svg>
        <p><span>Sent:</span> thanks for your message!</p>
      </div>}
      <div className="hero-text">
        <h1 className="name">Žymantas Ponelis</h1>
        <p className="tagline">Fullstack Web Developer</p>
        <div className="web-links header">
          <a href="https://github.com/zymantasponelis" rel="noopener noreferrer" target="_blank">
            <svg id='github' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 92 92'>
              <path className="icon" d='M61.896,52.548c-3.59,0-6.502,4.026-6.502,8.996c0,4.971,2.912,8.999,6.502,8.999 c3.588,0,6.498-4.028,6.498-8.999C68.395,56.574,65.484,52.548,61.896,52.548z M84.527,29.132c0.74-1.826,0.777-12.201-3.17-22.132 c0,0-9.057,0.993-22.76,10.396c-2.872-0.793-7.736-1.19-12.597-1.19s-9.723,0.396-12.598,1.189C19.699,7.993,10.645,7,10.645,7 c-3.948,9.931-3.913,20.306-3.172,22.132C2.834,34.169,0,40.218,0,48.483c0,35.932,29.809,36.508,37.334,36.508 c1.703,0,5.088,0.004,8.666,0.009c3.578-0.005,6.965-0.009,8.666-0.009C62.191,84.991,92,84.415,92,48.483 C92,40.218,89.166,34.169,84.527,29.132z M46.141,80.574H45.86c-18.859,0-33.545-2.252-33.545-20.58 c0-4.389,1.549-8.465,5.229-11.847c6.141-5.636,16.527-2.651,28.316-2.651c0.045,0,0.093-0.001,0.141-0.003 c0.049,0.002,0.096,0.003,0.141,0.003c11.789,0,22.178-2.984,28.316,2.651c3.68,3.382,5.229,7.458,5.229,11.847 C79.686,78.322,65,80.574,46.141,80.574z M30.104,52.548c-3.588,0-6.498,4.026-6.498,8.996c0,4.971,2.91,8.999,6.498,8.999 c3.592,0,6.502-4.028,6.502-8.999C36.605,56.574,33.695,52.548,30.104,52.548z'/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/%C5%BEymantas-ponelis-8a3975131/" rel="noopener noreferrer" target="_blank">
            <svg id="linkedin" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'>
              <path className="icon" d='M917.4,10H82.3C42.4,10,10,41.6,10,80.6v838.7c0,39,32.4,70.7,72.3,70.7h835.1c40,0,72.6-31.7,72.6-70.7V80.6C990,41.6,957.4,10,917.4,10z M300.7,845.1H155.2V377.4h145.4V845.1z M227.9,313.5c-46.6,0-84.3-37.8-84.3-84.3c0-46.5,37.7-84.2,84.3-84.2c46.5,0,84.2,37.8,84.2,84.2C312.2,275.7,274.4,313.5,227.9,313.5z M845,845.1H699.9V617.7c0-54.3-1.1-124-75.6-124c-75.7,0-87.2,59.1-87.2,120.1v231.4H391.8V377.4h139.4v63.9h2c19.4-36.8,66.8-75.5,137.6-75.5c147.1,0,174.2,96.8,174.2,222.8L845,845.1L845,845.1z'/>
            </svg>
          </a>

        </div>
      </div>
      <nav>
        <Link to="about" smooth={true} duration={scrollDuration}>About</Link>
        <Link to="projects" smooth={true} duration={scrollDuration}>Projects</Link>
        <Link to="contact" smooth={true} duration={scrollDuration}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header;
