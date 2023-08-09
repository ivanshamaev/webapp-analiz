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
        <div className="form-container">
          <h3>Параметры анализа</h3>
          <div className="parameter-group">
            <span className="parameter-label">Дата рождения</span>
            <input id="dob" className="parameter-input" type="date" />
            <span className="parameter-unit"></span>
          </div>
          <div className="parameter-group">
            <span className="parameter-label">Пол</span>
            <select className="parameter-input" id="gender">
              <option value="">Мужской</option>
              <option value="dog">Женский</option>
            </select>
            <span className="parameter-unit"></span>
          </div>
          <div className="parameter-group">
            <span className="parameter-label">Показатель 3:</span>
            <input id="analysisDate" className="parameter-input" type="date" />
            <span className="parameter-unit"></span>
          </div>
        </div>

        <hr/>

        <div className="form-container">
          <h3>Значения показателей</h3>
          <div className="parameter-group">
            <span className="parameter-label">Гематокрит</span>
            <input id="hematocrit" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">%</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Гемоглобин</span>
            <input id="hemoglobin" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">г/дл</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Эритроциты</span>
            <input id="redBloodCells" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">млн/мкл</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">MCV (ср. объем эритр.)</span>
            <input id="mcv" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">фл</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">RDW (шир. распред. эритр)</span>
            <input id="rdw" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">%</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">MCH (ср. содер. Hb в эр.)</span>
            <input id="mch" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">пг</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">МСHС (ср. конц. Hb в эр.)</span>
            <input id="mchc" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">%</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Тромбоциты</span>
            <input id="platelets" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">тыс/мкл</span>
          </div>




          <div className="parameter-group">
            <span className="parameter-label">Лейкоциты</span>
            <input id="leukocytes" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">тыс/мкл</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Нейтрофилы (общ.число)</span>
            <input id="neutrophilsPercent" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">%</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Лимфоциты</span>
            <input id="lymphocytesPercent" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">%</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Моноциты</span>
            <input id="monocytesPercent" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">%</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Эозинофилы</span>
            <input id="eosinophilsPercent" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">%</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Базофилы</span>
            <input id="basophilsPercent" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">%</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Нейтрофилы, абс.</span>
            <input id="neutrophilsAbsolute" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">тыс/мкл</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Лимфоциты, абс.</span>
            <input id="lymphocytesAbsolute" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">тыс/мкл</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Моноциты, абс.</span>
            <input id="monocytesAbsolute" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">тыс/мкл</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Эозинофилы, абс.</span>
            <input id="eosinophilsAbsolute" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">тыс/мкл</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">Базофилы, абс.</span>
            <input id="basophilsAbsolute" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">тыс/мкл</span>
          </div>

          <div className="parameter-group">
            <span className="parameter-label">СОЭ</span>
            <input id="esr" className="parameter-input" type="number" step="0.1" />
            <span className="parameter-unit">мм/ч</span>
          </div>

        </div>

        <button type="submit" className="btn btn-primary">Получить расшифровку показателей</button>

      </Form>
    </div>
  );
}

export default AnalizForm;
