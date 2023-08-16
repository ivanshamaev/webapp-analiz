import React from 'react';

const MetricInput = ({ metricName, unitOfMeasurement, idInput }) => {
  return (
    <div className="row">
        <div className="col">
            <div className="row">
            <div className="col-sm-4">
                <label className="form-label">{metricName}</label>
            </div>
            <div className="col-sm-4 input-group-sm">
                <input id={idInput} type="number" step="0.1" className="form-control" placeholder="Введите значение" />
            </div>
            <div className="col-sm-4">
                <label className="form-label">{unitOfMeasurement}</label>
            </div>
            </div>
        </div>
    </div>
  );
};

export default MetricInput;