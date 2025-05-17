import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';

import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { dictionary } from '../../dictionary/dictionary';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';
import './About.scss';

const cubeFaces = [
  { className: 'face1', icon: faSass },
  { className: 'face2', icon: faHtml5 },
  { className: 'face3', icon: faReact },
  { className: 'face4', icon: faJsSquare },
  { className: 'face5', icon: faCss3Alt },
  { className: 'face6', icon: faGitAlt },
];

export const About: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  // const str = `About Me`;
  // const strArray = [...str];

  useEffect(() => {
    console.log('isMobile:', isMobile);
    // Check if the window width is less than or equal to 768px
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Set the letter class to 'text-animate-hover' after 2000ms
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);

    // Cleanup function to clear the timeout
    // This is important to avoid memory leaks and unexpected behavior
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass} // Provide a valid CSS class name
              strArray={[...dictionary.aboutTitle]} // Use the correct key from the dictionary
              idx={10}
            />
          </h1>

          <p>{dictionary.aboutDescription}</p>
          <p>{dictionary.aboutDescription2}</p>
          <p>{dictionary.aboutDescription3}</p>
        </div>

        <div className="main-container">
          <div className="stage-cube-cont">
            <div className="sub-container">
              <div className="sky">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
                <div className="comet"></div>
              </div>
            </div>

            {/* {isMobile ? ( */}
            {/* // Change the class name to 'cube-spinner-mobile' for mobile view */}
            <div className={isMobile ? 'cube-spinner-mobile' : 'cube-spinner'}>
              {cubeFaces.map((face, index) => (
                <div key={index} className={face.className}>
                  <FontAwesomeIcon icon={face.icon} />
                </div>
              ))}
            </div>
            {/* ) : ( */}
            {/* <div className="cube-spinner">
                {cubeFaces.map((face, index) => (
                  <div key={index} className={face.className}>
                    <FontAwesomeIcon icon={face.icon} />
                  </div>
                ))}
              </div> */}
            {/* )} */}
          </div>
        </div>
      </div>

      <Loader type="cube-transition" active />
    </>
  );
};
