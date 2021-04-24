import React from 'react';

import { Container } from '../../styled/styled.lib';
import LeftSide from './LeftSide';
import RightSide from './RightSide'
import { title, subTitle, value, percent, keys, gaps } from '../../fakeData';
import Project from './Project';

const Projection = (props) => {
  const type = props.type;
  return (
    <>
    { type === 'paid' ? 
      <Container column txtCenter type="paid" className="mt-5">
        <h3>{title[type]}</h3>
        <Project title={subTitle[type]} value={value[type]} percent={percent[type]} type={type} />
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
              <LeftSide title={subTitle[type]} value={value[type]} percent={percent[type]}/>
              <RightSide keys={keys[type]} gaps={gaps[type]}/>
            </div>
        </div>
      </>
    }
    </>
  )
}


export default Projection;