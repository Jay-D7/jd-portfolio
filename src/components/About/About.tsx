import React, { useEffect, useState } from 'react';
import './About.scss';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

export const About: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const str = `About Me`;
  const strArray = [...str];

  const cubeFaces = [
    { className: 'face1', icon: faSass },
    { className: 'face2', icon: faHtml5 },
    { className: 'face3', icon: faReact },
    { className: 'face4', icon: faJsSquare },
    { className: 'face5', icon: faCss3Alt },
    { className: 'face6', icon: faGitAlt },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass} // Provide a valid CSS class name
              strArray={strArray}
              idx={10}
            />
          </h1>

          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
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

            <div className="cube-spinner">
              {cubeFaces.map((face, index) => (
                <div key={index} className={face.className}>
                  <FontAwesomeIcon icon={face.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Loader type="cube-transition" active />
    </>
  );
};
