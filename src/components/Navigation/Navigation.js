import './Navigation.css';
import { Link } from 'react-router-dom';
import logo from '../../1.png'


const Navigation = () => {
  return (
      <div className="navigation-section">
        <Link to={"/"} className="logo" style={{ textDecoration: 'none' }}>
          <img className="title" src={logo} alt="Strange Prompts for a strange planet logo" />
        </Link>
        <div className="favorite">
          <Link to={"/saved-prompts"} style={{ textDecoration: 'none' }}>
            <h2 className="nav-btns" >Favorites</h2>
          </Link>
          </div>
        <div className="bookmark">
        </div>
      </div>
  )
}

export default Navigation;
