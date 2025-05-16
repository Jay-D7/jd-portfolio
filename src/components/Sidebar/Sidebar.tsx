import { Link, NavLink } from 'react-router-dom';
import '../../App.scss';
import './Sidebar.scss';
import LogoJD from '../../assets/images/golden_white_logo.png';
import LogoSubtitle from '../../assets/images/logo_sub_jd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faSuitcase,
  faEnvelope,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faSlack,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

// / NavLinks
const navLinks = [
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

//SocialLinks
const socialLinks = [
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

export const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const getNavLinkClass = (isActive: boolean, baseClass: string) => {
    return `${isActive ? isActive + ' ' : ''}${baseClass || baseClass}`;
  };

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoJD} alt="Company Logo" />
        <img
          className="sub-logo"
          src={LogoSubtitle}
          alt="Company Signature JD"
        />
      </Link>
      {/* Nav */}
      <nav className={showNav ? 'mobile-show' : ''}>
        {navLinks.map(({ to, icon, label, className }) => (
          <NavLink
            key={to}
            className={({ isActive }) => getNavLinkClass(isActive, className)}
            end
            to={to}
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={icon} aria-label={label} />
          </NavLink>
        ))}
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      {/* SocialLinks */}
      <ul className="social-links">
        {socialLinks.map(({ href, icon, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopenner"
              aria-label={label}
              title={label}
            >
              <FontAwesomeIcon
                icon={icon}
                className="anchor-icon"
              ></FontAwesomeIcon>
            </a>
          </li>
        ))}
      </ul>
      {/* Hamburger Menu */}
      <FontAwesomeIcon
        onClick={() => setShowNav(!showNav)}
        icon={faBars}
        className="hamburger-icon"
        aria-label="Hamburger Menu"
        title="Hamburger Menu"
        size="3x"
        color="#4d4d4e"
      />
    </div>
  );
};
