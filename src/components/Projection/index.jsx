import React from 'react';

import { Container } from '../styles/styled.lib';
import Compare from './Compare';
import Predictive from './Predictive'
import { title, subTitle, value, percent, keys, gaps } from '../../fakeData';
import ProjectionComponent from './ProjectionComponent';

const Projection = (props) => {
  const type = props.type;
  return (
    <>
    { type === 'paid' ? 
      <Container column txtCenter type="paid" className="mt-5">
        <h3>{title[type]}</h3>
        <ProjectionComponent title={subTitle[type]} value={value[type]} percent={percent[type]} type={type} />
        <a href="/" className="link-style mt-2 mb-4">Show Details</a>
      </Container>
      :
      <>
        <Container align="baseline">
          <h3>{title[type]}</h3>
          <a href="/" className="link-style">Show Details</a>
        </Container>
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