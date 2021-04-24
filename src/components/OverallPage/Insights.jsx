import React from 'react';

import Insight from './Insight';

const Insights = ({ type }) => {
  return (
    <section>
      <h2><i className="material-icons">highlight</i>{type} Insights</h2>
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