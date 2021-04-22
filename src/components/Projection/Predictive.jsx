import React from 'react'

import { ValueHeader, Container, Li, Circle } from '../../components/styled.lib';
import ChartComponent from '../ChartComponent';

const Predictive = (props) => {
  const keys = props.keys;
  const gaps = props.gaps;
  const keyItems = keys.map((key, index) => 
    <Li variant="key" key={index}>
      <Circle color={index}/>{key}
    </Li>
  );
  const gapItems = gaps.map((gap, index) => 
    <Li variant="gap" key={index}>{gap}</Li>
  );
  return (
    <div className="col-md-6">
      <Container justify="space-between">
        <Container column>
          <ValueHeader><i className="material-icons"></i>Key Predictive Drivers</ValueHeader>
          <Container justify="space-between">
            <ChartComponent />
            <ul>{keyItems}</ul>
          </Container>
        </Container>
        <Container column>
          <ValueHeader>Impact on gap</ValueHeader>
          <ul>{gapItems}</ul>
        </Container>
      </Container>
    </div>
  )
}

export default Predictive;