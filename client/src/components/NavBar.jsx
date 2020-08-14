import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/playdate" className="navbar-brand">
          PlayDate
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/newplaydate" className="nav-link">
                New PlayDate
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

// import React from "react";
// import Navbar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";

// const NavBar = (props) => {
//   return (
//     <Navbar>
//       <Toolbar>PlayDate</Toolbar>
//     </Navbar>
//   );
// };

// export default NavBar;
