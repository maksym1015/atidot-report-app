import React from 'react';
// import {Link} from 'react-router-dom';

import BaseComponent from '../components/BaseComponent';
import PerformanceComponent from '../components/PerformanceComponent';

const Overall = () => (
  <BaseComponent>
    <p className="period">Feb' 1 - Mar' 1, 2021</p>    
    <h2>Overall performance</h2>

    <PerformanceComponent />

    <section className=""></section>
  </BaseComponent>
);

export default Overall; 