import React from "react";

const Navbar1 = ({ handleNavigation }) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          {/* Logo Click - Show Home Component */}
          <a
            className="navbar-brand logo"
            href="#"
            onClick={() => handleNavigation("Home")}
          >
            LoveBite
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* Love's Pic Click - Show Picture Component */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavigation("Picture")}
                >
                  Love's Pic
                </a>
              </li>
              {/* Love's Video Click - Show Video Component */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavigation("Video")}
                >
                  Love's Video
                </a>
              </li>
              {/* SignOut Click - Show LoginForm Component */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavigation("LoginForm")}
                >
                  SignOut
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
