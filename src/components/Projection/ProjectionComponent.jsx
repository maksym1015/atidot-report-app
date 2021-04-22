import React from 'react';
import { ShowPercent, ValueHeader, PercentNum, ShowValue, Container } from '../styled.lib';

const ProjectionComponent = (props) => {
  const value = props.value;
  const percent = props.percent;
  return (
    <Container justify={props.type === 'paid' ? "space-around" : "space-between"}>
      <Container column>
        <ValueHeader>Me</ValueHeader>
        <Container align="baseline">
          <ShowValue color="normal">{value[0]}</ShowValue>
          <ShowPercent variant="up" />
          <PercentNum variant="up">{percent[0]}</PercentNum>
        </Container>
      </Container>
      <Container column>
        <ValueHeader>Benchmark avg.</ValueHeader>
        <Container align="baseline">
          <ShowValue color="normal">{value[1]}</ShowValue>
          <ShowPercent variant="up" />
          <PercentNum variant="up">{percent[1]}</PercentNum>
        </Container>
      </Container>
      <Container column>
        <ValueHeader>{props.title}</ValueHeader>
        <ShowValue color="down">{value[2]}</ShowValue>
      </Container>
    </Container>
  )
}

export default ProjectionComponent;