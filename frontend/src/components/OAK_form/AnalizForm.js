import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MetricInput from './MetricInput';

function AnalizForm() {
    
  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <Row>
        <Col sm={5}>
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

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="id_1" />
              <label class="form-check-label" for="id_0">
                Беременность (для женщин)
              </label>
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
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="id_6" />
                  <label class="form-check-label" for="id_6">
                    Другое (мы учтем в доработке алгоритма)
                  </label>
                </div>
              </div>

            </div>
          </div>

          <hr/>
        </Col>

        <Col sm={7}>
          <div className="form-container">
            <h3>Значения показателей</h3>
            <MetricInput metricName="Гематокрит (HCT)" unitOfMeasurement="%" idInput="hematocrit" />
            <MetricInput metricName="Гемоглобин (Hb)" unitOfMeasurement="г/дл" idInput="hemoglobin" />
            <MetricInput metricName="Эритроциты (RBC)" unitOfMeasurement="млн/мкл" idInput="redBloodCells" />
            <MetricInput metricName="Средний объем эритроцита (MCV)" unitOfMeasurement="фл" idInput="mcv" />
            <MetricInput metricName="Ширина распределения эритроцитов (RDW)" unitOfMeasurement="%" idInput="rdw" />
            <MetricInput metricName="Среднее содержание гемоглобина в эритроците (MCH)" unitOfMeasurement="пг" idInput="mch" />
            <MetricInput metricName="Средняя концентрация гемоглобина в эритроцитах (MCHC)" unitOfMeasurement="%" idInput="mchc" />
            <MetricInput metricName="Тромбоциты (PLT)" unitOfMeasurement="тыс/мкл" idInput="plt" />
            <MetricInput metricName="Тромбокрит (PCT)" unitOfMeasurement="%" idInput="pct" />
            <MetricInput metricName="Средний объем тромбоцита (MPV)" unitOfMeasurement="фл" idInput="mpv" />
            <MetricInput metricName="Лейкоциты (WBC)" unitOfMeasurement="тыс/мкл" idInput="leukocytes" />
            <MetricInput metricName="Нейтрофилы (общ.число)" unitOfMeasurement="%" idInput="neutrophilsPercent" />
            <MetricInput metricName="Лимфоциты (LYM%)" unitOfMeasurement="%" idInput="lymphocytesPercent" />
            <MetricInput metricName="Моноциты (MON%)" unitOfMeasurement="%" idInput="monocytesPercent" />
            <MetricInput metricName="Эозинофилы (EO%)" unitOfMeasurement="%" idInput="eosinophilsPercent" />
            <MetricInput metricName="Базофилы (BA%)" unitOfMeasurement="%" idInput="basophilsPercent" />
            <MetricInput metricName="Нейтрофилы, абс." unitOfMeasurement="тыс/мкл" idInput="neutrophilsAbsolute" />
            <MetricInput metricName="Лимфоциты, абс." unitOfMeasurement="тыс/мкл" idInput="lymphocytesAbsolute" />
            <MetricInput metricName="Моноциты, абс." unitOfMeasurement="тыс/мкл" idInput="monocytesAbsolute" />
            <MetricInput metricName="Эозинофилы, абс." unitOfMeasurement="тыс/мкл" idInput="eosinophilsAbsolute" />
            <MetricInput metricName="Базофилы, абс." unitOfMeasurement="тыс/мкл" idInput="basophilsAbsolute" />
            <MetricInput metricName="СОЭ - Скорость оседания эритроцитов (ESR)" unitOfMeasurement="мм/ч" idInput="esr" />
          </div>

          <br/> 

          

        </Col>
      </Row>
      <Row>
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
      </Row>
    </Container>
  );
}

export default AnalizForm;
