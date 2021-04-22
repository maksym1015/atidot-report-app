import React from 'react'

import { ValueHeader, FlexColumn, FlexBetween, Li, Circle } from '../../components/styled.lib';
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
      <FlexBetween>
        <FlexColumn>
          <ValueHeader><i className="material-icons"></i>Key Predictive Drivers</ValueHeader>
          <FlexBetween>
            <ChartComponent />
            <ul>{keyItems}</ul>
          </FlexBetween>
        </FlexColumn>
        <FlexColumn>
          <ValueHeader>Impact on gap</ValueHeader>
          <ul>{gapItems}</ul>
        </FlexColumn>
      </FlexBetween>
    </div>
  )
}

export default Predictive;