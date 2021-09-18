import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className="navigation-section">
        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <h1>Strange Prompts for a Strange Planet</h1>
        </Link>
        <div className="bookmark">  
          <Link to={"/saved-prompts"} style={{ textDecoration: 'none' }}>
            <h2 className="nav-btns" >Saved Prompts</h2>
          </Link>
        </div>
      </div>
  )
}

export default Navigation;