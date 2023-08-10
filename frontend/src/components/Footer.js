import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Получить результаты анализа крови онлайн online.</p>
        <p>Designed with <i className="bi bi-heart text-danger"></i> AI MedTech</p>
      </div>
    </footer>
  );
};

export default Footer;
