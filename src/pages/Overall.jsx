import React from 'react';
// import {Link} from 'react-router-dom';

import BaseComponent from '../components/BaseComponent';
import PerformanceComponent from '../components/PerformanceComponent';
import InsightComponent from '../components/Insights';
import { Text } from '../components/styles/styled.lib';

const Overall = () => (
  <BaseComponent>
    <Text type="periodT">Feb' 1 - Mar' 1, 2021</Text> 

    <PerformanceComponent />
    <InsightComponent type="Top"/>
    <InsightComponent type="Industry"/>
  </BaseComponent>
);

export default Overall; 