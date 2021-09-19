import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className="navigation-section">
        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <h1 className="title">Strange Prompts for a<br/>Strange Planet</h1>
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