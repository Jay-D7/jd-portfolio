import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../App.scss';
import LogoJD from '../../assets/images/golden_white_logo.png';
import LogoSubtitle from '../../assets/images/logo_sub_jd.png';
import { navLinks, socialLinks } from '../../utils/sidebarNavigation';
import './Sidebar.scss';

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
        <div className="nav-links">
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
        </div>
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
              rel="noreferrer noopener"
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
