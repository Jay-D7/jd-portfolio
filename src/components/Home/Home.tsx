import './Home.scss';
import '../AnimatedLetters/AnimatedLetters.scss';
import logoTitle from '../../assets/images/logo_jd_small.png';
import { Logo } from './Logo/Logo';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';

export const Home: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const introArray = `Hi`;
  const strIntroArray = [...introArray];

  const introArraySecond = `I'm`;
  const strIntroArraySecond = [...introArraySecond];

  const nameArray = `acob`;
  const strNameArray = [...nameArray];

  const jobArray = `web developer`;
  const strJobArray = [...jobArray];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strIntroArray}
              idx={10}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strIntroArraySecond}
              idx={13}
            />
            <img src={logoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strNameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strJobArray}
              idx={22}
            />
          </h1>
          <h2>Front-end Developer / HTML/SCSS / JAVASCRIPT/REACT</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <div></div>
        <Logo />
      </div>
      <Loader type="cube-transition" active />
    </>
  );
};
