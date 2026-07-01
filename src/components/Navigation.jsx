import React, { useState } from "react";

function Navigation() {
  // Declare a new state variable, which we'll call "count"
  const [burger, setburger] = useState(false);

  return (
    <nav className="navbar py-5" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <h1 className="title">
            K<span className="has-text-purple">S</span>
          </h1>
        </a>

        <a
          role="button"
          href="#navbarBasicExample"
          className={`navbar-burger ${burger ? "" : "is-active"}`}
          aria-label="menu"
          aria-expanded={burger}
          data-target="navbarBasicExample"
          onClick={() => setburger(!burger)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu has-text-centered ${burger ? "" : "is-active"}`}
      >
        <div className="navbar-start"></div>

        <div className="navbar-end">
          <a className="navbar-item" href="#hero">Home</a>
          <div className="navbar-item">
            <div className="buttons is-centered">
              <a className="button is-purple" href="https://github.com/Nightingale1997">
                <strong>Lets talk</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
