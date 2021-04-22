import React from 'react';

import { FlexBaseline } from '../styled.lib';
import Compare from './Compare';
import Predictive from './Predictive'
import { title, subTitle, value, percent, keys, gaps } from '../fakeData';
import ProjectionComponent from './ProjectionComponent';

const Projection = (props) => {
  const type = props.type;
  return (
    <>
    { type === 'paid' ? 
      <>
        <h3 className="title">{title[type]}</h3>
        <ProjectionComponent title={subTitle[type]} value={value[type]} percent={percent[type]}/>
        <a href="/" className="link-style">Show Details</a>
      </>
      :
      <>
        <FlexBaseline>
          <h3 className="title">{title[type]}</h3>
          <a href="/" className="link-style">Show Details</a>
        </FlexBaseline>
        <div className="container">
            <div className="row">
              <Compare title={subTitle[type]} value={value[type]} percent={percent[type]}/>
              <Predictive keys={keys[type]} gaps={gaps[type]}/>
            </div>
        </div>
      </>
    }
    </>
  )
}


export default Projection;