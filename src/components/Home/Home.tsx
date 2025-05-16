import './Home.scss';
import '../AnimatedLetters/AnimatedLetters.scss';
import logoTitle from '../../assets/images/logo_jd_small.png';
import { Logo } from './Logo/Logo';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';
import { dictionary } from '../../dictionary/dictionary';

export const Home: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

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
              strArray={[...dictionary.welcome]}
              idx={10}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...dictionary.welcomePart1]}
              idx={13}
            />
            <img src={logoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...dictionary.welcomePart2]}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...dictionary.welcomePart3]}
              idx={22}
            />
          </h1>
          <h2>{dictionary.subtitle}</h2>
          <Link to="/contact" className="flat-button">
            {dictionary.buttonContact}
          </Link>
        </div>
        <div></div>
        <Logo />
      </div>
      <Loader type="cube-transition" active />
    </>
  );
};
