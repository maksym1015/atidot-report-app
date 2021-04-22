import React from 'react';

import Projection from './Projection';

const PerformanceComponent = () => (
  <section>
    <Projection type="application"/>
    <Projection type="premium" />
    <Projection type="paid" />
  </section>
)

export default PerformanceComponent;