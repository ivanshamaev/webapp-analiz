import React, { useState } from 'react';
import axios from 'axios';
import { OverlayTrigger, Tooltip, Form } from 'react-bootstrap';

function AnalizForm() {
    const renderTooltip = (text) => (
      <Tooltip id="tooltip">{text}</Tooltip>
    );

  return (
    <div className="container">
      <Form>
        <Form.Group controlId="dob">
          <Form.Label>
            Дата рождения
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите дату рождения')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>
            Пол
            <OverlayTrigger placement="right" overlay={renderTooltip('Выберите пол')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control as="select">
            <option>Мужской</option>
            <option>Женский</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="analysisDate">
          <Form.Label>
            Дата сдачи анализов
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите дату сдачи анализов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group controlId="hematocrit">
          <Form.Label>
            Гематокрит Value %
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Гематокрита')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="hemoglobin">
          <Form.Label>
            Гемоглобин Value г/дл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Гемоглобина')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="redBloodCells">
          <Form.Label>
            Эритроциты Value млн/мкл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Эритроцитов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="mcv">
          <Form.Label>
            MCV (ср. объем эритр.) Value фл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение MCV')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="rdw">
          <Form.Label>
            RDW (шир. распред. эритр) Value %
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение RDW')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="mch">
          <Form.Label>
            MCH (ср. содер. Hb в эр.) Value пг
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение MCH')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="mchc">
          <Form.Label>
            МСHС (ср. конц. Hb в эр.) Value г/дл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение МСHС')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="platelets">
          <Form.Label>
            Тромбоциты Value тыс/мкл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Тромбоцитов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group controlId="leukocytes">
          <Form.Label>
            Лейкоциты Value тыс/мкл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Лейкоцитов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group controlId="neutrophilsPercent">
          <Form.Label>
            Нейтрофилы (общ.число), % Value %
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Нейтрофилов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="lymphocytesPercent">
          <Form.Label>
            Лимфоциты, % Value %
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Лимфоцитов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="monocytesPercent">
          <Form.Label>
            Моноциты, % Value %
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Моноцитов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="eosinophilsPercent">
          <Form.Label>
            Эозинофилы, % Value %
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Эозинофилов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="basophilsPercent">
          <Form.Label>
            Базофилы, % Value %
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Базофилов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" step="0.1" />
        </Form.Group>

        <Form.Group controlId="neutrophilsAbsolute">
          <Form.Label>
            Нейтрофилы, абс. Value тыс/мкл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Абсолютных Нейтрофилов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group controlId="lymphocytesAbsolute">
          <Form.Label>
            Лимфоциты, абс. Value тыс/мкл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Абсолютных Лимфоцитов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group controlId="monocytesAbsolute">
          <Form.Label>
            Моноциты, абс. Value тыс/мкл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Абсолютных Моноцитов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group controlId="eosinophilsAbsolute">
          <Form.Label>
            Эозинофилы, абс. Value тыс/мкл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Абсолютных Эозинофилов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group controlId="basophilsAbsolute">
          <Form.Label>
            Базофилы, абс. Value тыс/мкл
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение Абсолютных Базофилов')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group controlId="esr">
          <Form.Label>
            СОЭ Value мм/ч
            <OverlayTrigger placement="right" overlay={renderTooltip('Введите значение СОЭ')}>
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <button type="submit" className="btn btn-primary">Получить расшифровку показателей</button>

      </Form>
    </div>
  );
}

export default AnalizForm;
