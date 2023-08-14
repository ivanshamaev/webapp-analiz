import React from 'react';

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container d-flex flex-wrap">
        <a className="navbar-brand" href="/">Сервис расшифровки общего анализа крови</a>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Блог</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;