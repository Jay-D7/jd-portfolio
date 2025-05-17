import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

import { motion } from 'framer-motion';

import project_2 from '../../assets/images/image2_2.png';
import project_3 from '../../assets/images/image3.png';
import project_4 from '../../assets/images/logo_sub_jd.png';
import project_1 from '../../assets/images/portfolio_jd.png';
import { dictionary } from '../../dictionary/dictionary';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';
import { ModalComponent } from './ModalComponent/ModalComponent';
import type { ModalPropsInterface } from './ModalComponent/ModalComponent';
import './Portfolio.scss';

export const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [selectedModal, setSelectedModal] =
    useState<ModalPropsInterface | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const projects: ModalPropsInterface[] = [
    {
      id: 1,
      title: dictionary.projectFirst,
      description: dictionary.portfolioDescription,
      image: project_1,
      url: 'https://github.com/Jay-D7/react-portfolio',
    },
    {
      id: 2,
      title: dictionary.projectSecond,
      description: dictionary.portfolioDescription2,
      image: project_2,
      url: 'https://jay-d7.github.io/website_landing_page/',
    },
    {
      id: 3,
      title: dictionary.projectThird,
      description: dictionary.portfolioDescription3,
      image: project_3,
      url: 'https://jay-d7.github.io/beta_project/',
    },
    {
      id: 3,
      title: dictionary.projectThird,
      description: dictionary.portfolioDescription3,
      image: project_4,
    },
    {
      id: 3,
      title: dictionary.projectThird,
      description: dictionary.portfolioDescription3,
      image: project_1,
    },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const openModal = (project: ModalPropsInterface) => {
    setSelectedModal(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...dictionary.portfolioTitle]}
              idx={5}
            />
          </h1>
          <br />
          <p>In progress...</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <motion.div
              className="portfolio-item"
              key={project.id}
              onClick={(e) => {
                openModal(project);
                setIsOpen(true);
                e.stopPropagation();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <img src={project.image} alt={project.title} />
              {/* <h3>{project.title}</h3> */}
            </motion.div>
          ))}
        </div>
        <motion.div
          style={{ display: 'none' }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          {selectedModal && (
            <ModalComponent
              isOpen={isOpen}
              onClose={closeModal}
              ModalProps={selectedModal}
            />
          )}
        </motion.div>
      </div>
      <Loader type="cube-transition" active />
    </>
  );
};
