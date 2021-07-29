import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="Navmenu">
        <Link to="/">SCOOT</Link>
        <Link to="/about">About</Link>
        <Link to="/location">Location</Link>
      </div>
      <div className="NavBtn">
        <button>
          <Link to="/location">Look Direction</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
