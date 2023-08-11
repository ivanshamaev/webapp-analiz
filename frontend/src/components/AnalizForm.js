import React, { useState } from 'react';
import axios from 'axios';
import { OverlayTrigger, Tooltip, Form } from 'react-bootstrap';

import MetricInput from './MetricInput';

function AnalizForm() {
    
  const [isChecked, setIsChecked] = useState(false);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  
  const handleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
  };

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
          <h3>Наличие жалоб</h3>
          <div className="row">

            <div className="col">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="id_1" />
                <label class="form-check-label" for="id_1">
                  Пониженная температура
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="id_2" />
                <label class="form-check-label" for="id_2">
                  Повышенная температура
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="id_3" />
                <label class="form-check-label" for="id_3">
                  Головокружение
                </label>
              </div>
            </div>

            <div className="col">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="id_4" />
                <label class="form-check-label" for="id_4">
                  Головная боль
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="id_5" />
                <label class="form-check-label" for="id_5">
                  Слабость
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="id_6" />
                <label class="form-check-label" for="id_6">
                  Другое (мы учтем в доработке алгоритма)
                </label>
              </div>
            </div>

            <div className="col">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="id_7" />
                <label class="form-check-label" for="id_7">
                  Бессоница
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="id_8" />
                <label class="form-check-label" for="id_8">
                  Тошнота
                </label>
              </div>
            </div>

          </div>
        </div>
        
        <hr/>
        <div className="form-container">
        <h3>Значения показателей</h3>
          <MetricInput metricName="Гематокрит" unitOfMeasurement="%" idInput="hematocrit" />
          <MetricInput metricName="Гемоглобин" unitOfMeasurement="г/дл" idInput="hemoglobin" />
          <MetricInput metricName="Эритроциты" unitOfMeasurement="млн/мкл" idInput="redBloodCells" />
          <MetricInput metricName="MCV (ср. объем эритр.)" unitOfMeasurement="фл" idInput="mcv" />
          <MetricInput metricName="RDW (шир. распред. эритр)" unitOfMeasurement="%" idInput="rdw" />
          <MetricInput metricName="MCH (ср. содер. Hb в эр.)" unitOfMeasurement="пг" idInput="mch" />
          <MetricInput metricName="МСHС (ср. конц. Hb в эр.)" unitOfMeasurement="%" idInput="mchc" />
          <MetricInput metricName="Тромбоциты" unitOfMeasurement="тыс/мкл" idInput="platelets" />
          <MetricInput metricName="Лейкоциты" unitOfMeasurement="тыс/мкл" idInput="leukocytes" />
          <MetricInput metricName="Нейтрофилы (общ.число)" unitOfMeasurement="%" idInput="neutrophilsPercent" />
          <MetricInput metricName="Лимфоциты" unitOfMeasurement="%" idInput="lymphocytesPercent" />
          <MetricInput metricName="Моноциты" unitOfMeasurement="%" idInput="monocytesPercent" />
          <MetricInput metricName="Эозинофилы" unitOfMeasurement="%" idInput="eosinophilsPercent" />
          <MetricInput metricName="Базофилы" unitOfMeasurement="%" idInput="basophilsPercent" />
          <MetricInput metricName="Нейтрофилы, абс." unitOfMeasurement="тыс/мкл" idInput="neutrophilsAbsolute" />
          <MetricInput metricName="Лимфоциты, абс." unitOfMeasurement="тыс/мкл" idInput="lymphocytesAbsolute" />
          <MetricInput metricName="Моноциты, абс." unitOfMeasurement="тыс/мкл" idInput="monocytesAbsolute" />
          <MetricInput metricName="Эозинофилы, абс." unitOfMeasurement="тыс/мкл" idInput="eosinophilsAbsolute" />
          <MetricInput metricName="Базофилы, абс." unitOfMeasurement="тыс/мкл" idInput="basophilsAbsolute" />
          <MetricInput metricName="СОЭ" unitOfMeasurement="мм/ч" idInput="esr" />
        </div>
        <br/> 
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" checked={isChecked} onChange={handleCheckboxChange} />
            <label class="form-check-label" for="gridCheck">
              Я согласен с тем, что администрация сайта не несет ответственности за возможные отрицательные последствия, 
              возникшие в результате самостоятельной интерпретации своих анализов и назначения лечения или бездействия. 
              Я понимаю, что результаты расшифровки анализов носят только информационный характер, не являются диагнозом 
              и не заменяют очной консультации врача.
            </label>
          </div>
        </div>
        <br/> 
        <div class="col-12">
          <button type="submit" class="btn btn-primary mb-6" disabled={!isChecked}>Получить расшифровку показателей</button>
        </div>      
        <br/>  

      </Form>
    </div>
  );
}

export default AnalizForm;
