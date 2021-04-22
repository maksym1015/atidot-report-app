import React from 'react';
import ChartComponent from '../ChartComponent';
import ProjectionComponent from './ProjectionComponent';


const Compare = (props) => (
  <div className="col-md-6">
    <ProjectionComponent title={props.title} value={props.value} percent={props.percent} />
    <ChartComponent type="line" />
  </div>
)   

export default Compare;