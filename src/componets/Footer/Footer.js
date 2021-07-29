import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <div>
          <h2>
            Sign up and <br /> Scoot off today
          </h2>
        </div>
        <div>
          <button>
            <i className="fab fa-apple"></i>
            Available on
            <br />
            <strong>AppStore</strong>
          </button>
          <button>
            <i className="fab fa-google-play"></i>
            <span>
              Get it on
              <br />
              <strong>Google Play</strong>
            </span>
          </button>
        </div>
      </div>
      <div className="footerButtom">
        <div className="Navmenu">
          <Link to="/">SCOOT</Link>
          <Link to="/about">About</Link>
          <Link to="/location">Location</Link>
        </div>
        <div className="NavBtn">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-whatsapp-square"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
