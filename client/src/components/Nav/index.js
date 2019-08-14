import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
       Home
      </a>
      <a className="navbar-brand" href="/recycle">
       Leave It
      </a>
      <a className="navbar-brand" href="/item">
       Take It
      </a>
    </nav>
  );
}

export default Nav;
