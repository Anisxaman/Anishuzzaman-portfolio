import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
                     <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand  text-white fw-bold" href="#">Navbar</a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className="nav-link active text-white fw-bold" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-white fw-bold" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-white fw-bold" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-white fw-bold" to="/portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-white fw-bold" to="/blogs">Blog</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Navbar;