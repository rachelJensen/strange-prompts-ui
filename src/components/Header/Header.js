import './Header.css';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
      <div className="header-section">
          <Navigation />
      </div>
  )
}

Header.propTypes = {
  Navigation: PropTypes.element
}

export default Header;