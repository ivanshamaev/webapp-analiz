import React from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Content = () => {
  return (
    <div className="container mt-4">

      <Breadcrumb>
        <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
        <Breadcrumb.Item active>Расшифровка общего анализа крови</Breadcrumb.Item>
      </Breadcrumb>

      <h1>Получить расшифровку общего анализа крови онлайн</h1>
      <p>Заполните поля анализа крови и получите интерпретацию Ваших показателей и рекомендательное заключение по Клиническому анализу крови.</p>
    </div>
  );
};

export default Content;