import React from 'react';
import { ShowPercent, ValueHeader, PercentNum, ShowValue, FlexColumn, FlexBetween, FlexBaseline } from '../styled.lib';

const ProjectionComponent = (props) => {
  const value = props.value;
  const percent = props.percent;
  return (
    <FlexBetween>
      <FlexColumn>
        <ValueHeader>Me</ValueHeader>
        <FlexBaseline>
          <ShowValue color="normal">{value[0]}</ShowValue>
          <ShowPercent variant="up" />
          <PercentNum variant="up">{percent[0]}</PercentNum>
        </FlexBaseline>
      </FlexColumn>
      <FlexColumn>
        <ValueHeader>Benchmark avg.</ValueHeader>
        <FlexBaseline>
          <ShowValue color="normal">{value[1]}</ShowValue>
          <ShowPercent variant="up" />
          <PercentNum variant="up">{percent[1]}</PercentNum>
        </FlexBaseline>
      </FlexColumn>
      <FlexColumn>
        <ValueHeader>{props.title}</ValueHeader>
        <ShowValue color="down">{value[2]}</ShowValue>
      </FlexColumn>
    </FlexBetween>
  )
}

export default ProjectionComponent;