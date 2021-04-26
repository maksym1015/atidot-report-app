import React from "react";
import {
  CurrentStatus,
  ValueHeader,
  PercentValue,
  ResultValue,
  FlexContainer,
} from "../../styled/styled.lib";

const Project = (props) => {
  const value = props.value;
  const percent = props.percent;
  const type = props.type;
  return (
    <FlexContainer justify={type === "paid" ? "space-around" : "space-between"}>
      <FlexContainer column>
        <ValueHeader size={type === "paid" ? "big" : "small"}>Me</ValueHeader>
        <FlexContainer align="center">
          <ResultValue
            size={type === "paid" ? "large" : "normal"}
            color="black"
          >
            {value[0]}
          </ResultValue>
          <CurrentStatus
            size={type === "paid" ? "big" : "small"}
            variant="up"
            className="mx-2"
          />
          <PercentValue size={type === "paid" ? "big" : "normal"} color="green">
            {percent[0]}
          </PercentValue>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer column>
        <ValueHeader size={type === "paid" ? "big" : "small"}>
          Benchmark avg.
        </ValueHeader>
        <FlexContainer align="center">
          <ResultValue
            size={type === "paid" ? "large" : "normal"}
            color="black"
          >
            {value[1]}
          </ResultValue>
          <CurrentStatus
            size={type === "paid" ? "big" : "small"}
            variant="down"
            className="mx-2"
          />
          <PercentValue size={type === "paid" ? "big" : "normal"} color="red">
            {percent[1]}
          </PercentValue>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer column>
        <ValueHeader size={type === "paid" ? "big" : "small"}>
          {props.title}
        </ValueHeader>
        <ResultValue size={type === "paid" ? "large" : "normal"} color="red">
          {value[2]}
        </ResultValue>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Project;
