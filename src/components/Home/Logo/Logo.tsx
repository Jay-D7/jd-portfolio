import logo_small from '../../../assets/images/logo_jd_small.png';
import './Logo.scss';

export const Logo: React.FC = () => {
  return (
    <div className="logoContainer">
      <img
        className="solid-logo"
        src={logo_small}
        alt="JavaScript,  Developer"
      />
    </div>
  );
};
