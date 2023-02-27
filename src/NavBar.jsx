import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [cvState, setCvState] = useState(false);

  return (
    <nav className="App">
      <div id="menu">
        <button id="icon-btn" onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <i className=" bi bi-x" id="menu-x-icon"></i>
          ) : (
            <i className="bi bi-list" id="menu-icon"></i>
          )}
        </button>
        <div className={`drop-menu-container ${open ? "active" : "inactive"}`}>
          <a href="#about">ABOUT</a>
          <a href="#stack">STACK</a>
          <a href="#contact">CONTACT</a>
          <a href="#project">PROJECTS</a>
        </div>
      </div>
      <div id="logo">
        <span id="v">V</span>
        <span id="s">S</span>
        <span id="c">C</span>
      </div>

      <div id="cv-container">
        <button
          type="button"
          onClick={() => setCvState((prev) => !prev)}
          className="resume"
        >
          <span>RESUME</span>
          {cvState ? (
            <i className="bi bi-caret-up-fill"></i>
          ) : (
            <i className="bi bi-caret-down-fill"></i>
          )}
        </button>

        <div className={`resume-content ${cvState ? "active" : "inactive"}`}>
          <a href="#gg">Download CV</a>
          <a href="#ggs">View CV</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
