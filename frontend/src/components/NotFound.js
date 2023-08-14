import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="mt-4 mb-4">
      <Row>
        <Col md={{ span: 12 }} className="text-center">
          <h1>404 Not Found. Страница не найдена</h1>
          <p>Извините, но страница, которую вы ищете, не существует.</p>
          <Link to="/">
            <Button variant="primary">Перейти на главную</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;