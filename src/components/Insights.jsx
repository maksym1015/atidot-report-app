import React from 'react';

import Insight from './Insight';

const Insights = () => {
  return (
    <section>
      <h2><i className="material-icons"></i>Top Insights</h2>
      <div className="container">
        <div className="row">
          <Insight />
          <Insight />
          <Insight />
        </div>
      </div>
    </section>
  )
}

export default Insights;