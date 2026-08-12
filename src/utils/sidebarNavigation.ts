import {
  faGithub,
  faLinkedin,
  faSlack,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

// NavLinks
export const navLinks = [
  { to: '/', icon: faHome, label: 'Home', className: '/' },
  { to: '/about', icon: faUser, label: 'About', className: 'about-link' },
  {
    to: '/portfolio',
    icon: faSuitcase,
    label: 'Portfolio',
    className: 'portfolio-link',
  },
  {
    to: '/contact',
    icon: faEnvelope,
    label: 'Contact',
    className: 'contact-link',
  },
];

// SocialLinks
export const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/dragowskijakub/',
    icon: faLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/Jay-D7',
    icon: faGithub,
    label: 'GitHub',
  },
  {
    href: 'https://www.youtube.com',
    icon: faYoutube,
    label: 'YouTube',
  },
  {
    href: 'https://mr-robot-network.slack.com',
    icon: faSlack,
    label: 'Slack',
  },
];
