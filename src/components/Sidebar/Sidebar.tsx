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

  const toggleNav = () => setShowNav((prevState) => !prevState);

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
        onClick={toggleNav}
        icon={showNav ? faClose : faBars}
        className={`hamburger-icon ${showNav ? 'is-open' : ''}`}
        aria-label={showNav ? 'Close Menu' : 'Hamburger Menu'}
        title={showNav ? 'Close Menu' : 'Hamburger Menu'}
        size="3x"
      />
    </div>
  );
};
