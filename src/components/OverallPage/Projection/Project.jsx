import React from 'react';
import { CurrentStatus, ValueHeader, PercentValue, ResultValue, Container } from '../../styled/styled.lib';

const Project = (props) => {
  const value = props.value;
  const percent = props.percent;
  const type = props.type;
  return (
    <Container justify={type === 'paid' ? "space-around" : "space-between"}>
      <Container column>
        <ValueHeader size={type === 'paid' ? "big" : "small"}>Me</ValueHeader>
        <Container align="center">
          <ResultValue size={type === 'paid' ? "large" : "normal"} color="black">{value[0]}</ResultValue>
          <CurrentStatus size={type === 'paid' ? "big" : "small"} variant="up" className="mx-2" />
          <PercentValue size={type === 'paid' ? "big" : "normal"} color="green">{percent[0]}</PercentValue>
        </Container>
      </Container>
      <Container column>
        <ValueHeader size={type === 'paid' ? "big" : "small"}>Benchmark avg.</ValueHeader>
        <Container align="center">
          <ResultValue size={type === 'paid' ? "large" : "normal"} color="black">{value[1]}</ResultValue>
          <CurrentStatus size={type === 'paid' ? "big" : "small"} variant="down" className="mx-2" />
          <PercentValue size={type === 'paid' ? "big" : "normal"}color="red">{percent[1]}</PercentValue>
        </Container>
      </Container>
      <Container column>
        <ValueHeader size={type === 'paid' ? "big" : "small"}>{props.title}</ValueHeader>
        <ResultValue size={type === 'paid' ? "large" : "normal"} color="red">{value[2]}</ResultValue>
      </Container>
    </Container>
  )
}

export default Project;