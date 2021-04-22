import React from 'react';
// import {Link} from 'react-router-dom';

import BaseComponent from '../components/BaseComponent';
import PerformanceComponent from '../components/PerformanceComponent';
import InsightComponent from '../components/TopInsights';
import { P } from '../components/styled.lib';

const Overall = () => (
  <BaseComponent>
    <P size="big">Feb' 1 - Mar' 1, 2021</P> 

    <PerformanceComponent />
    <InsightComponent />
    {/* <InsightComponent /> */}
  </BaseComponent>
);

export default Overall; 