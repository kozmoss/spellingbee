"use client"
import React from 'react';

function Header() {
  const displayRules = () => {
    // show/hide rules
    console.log('Rules button clicked');
  };

  return (
    <div className="navbar bg-base-100 justify-center">
    <div className="navbar-center">
      <a className="btn btn-ghost text-xl">Speelling Bee</a>
    </div>
  </div>
  );
}

export default Header;