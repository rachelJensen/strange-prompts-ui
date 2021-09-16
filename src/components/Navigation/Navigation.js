import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className="navigation-section">
        <Link to={"/home"}>
          <button className="nav-btns">Home View</button>
        </Link>
        <Link to={"/home/saved-prompts"}>
          <button className="nav-btns">Saved Prompts</button>
        </Link>
      </div>
  )
}

export default Navigation;