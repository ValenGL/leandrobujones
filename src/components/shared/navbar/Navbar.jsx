import { Link } from "react-router-dom";
import "./_Navbar.scss";
import "animate.css";

export default function Navbar() {
  return (
    <nav className="nav__container">
      <div className="nav-item__container">
        <Link className="nav--item" to="/">
          <span className="nav--item__text">Inicio</span>
        </Link>
      </div>
      <div className="nav-item__container">
        <Link className="nav--item" to="obras">
          <span className="nav--item__text">Obras</span>
        </Link>
      </div>
      <div className="nav-item__container">
        <Link className="nav--item" to="historia">
          <span className="nav--item__text">Historia</span>
        </Link>
      </div>
    </nav>
  );
}
