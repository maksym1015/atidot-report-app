import React from 'react'

import { ValueHeader, Container, Li, Circle } from '../styles/styled.lib';
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
    <div className="col-lg-6">
      <Container column justify="space-around" className="h-100">
        <Container justify="space-between">
          <ValueHeader size="small"><i className="material-icons">highlight</i>Key Predictive Drivers</ValueHeader>
          <ValueHeader size="small">Impact on gap</ValueHeader>
        </Container>
        <Container justify="space-between" align="center">
          <ChartComponent />
          <Container justify="space-between" className="w-100">
            <ul>{keyItems}</ul>
            <ul>{gapItems}</ul>
          </Container>
        </Container>
      </Container>
    </div>
  )
}

export default Predictive;