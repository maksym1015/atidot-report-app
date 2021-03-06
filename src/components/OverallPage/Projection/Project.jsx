import React, { useContext } from "react";
import {
  CurrentStatus,
  ValueHeader,
  PercentValue,
  ResultValue,
  FlexContainer,
} from "../../styled/styled.lib";
import { ReportContext } from "../../../authenticated-app";
import { convertCurrency } from "../../../utils";

const Project = (props) => {
  const contextData = useContext(ReportContext);
  const file_1 = contextData["file_1_Pacific Life"];
  const type = props.type;
  let value = [],
    percent = [];

  switch (type) {
    case "application":
      value = [
        convertCurrency(file_1.PL_sub_pred[0]),
        convertCurrency(file_1.IND_sub_pred[0]),
        convertCurrency(file_1.gap_sub_INDtoPL[0]),
      ];
      percent = [file_1.PL_sub_perc[0], file_1.IND_sub_perc[0]];
      break;
    case "premium":
      value = [
        convertCurrency(file_1.PL_subprem_pred[0]),
        convertCurrency(file_1.IND_subprem_pred[0]),
        convertCurrency(file_1.gap_subprem_INDtoPL[0]),
      ];
      percent = [file_1.PL_subprem_perc[0], file_1.IND_subprem_perc[0]];
      break;
    case "paid":
      value = [
        convertCurrency(file_1.PL_potential_pred[0]),
        convertCurrency(file_1.IND_potential_pred[0]),
        convertCurrency(file_1.gap_potential_INDtoPL[0]),
      ];
      percent = [file_1.PL_potential_perc[0], file_1.IND_potential_perc[0]];
      break;
    default:
      break;
  }

  return (
    <FlexContainer justify={type === "paid" ? "space-around" : "space-between"}>
      <FlexContainer column className='col-4'>
        <FlexContainer justify='center' align='center'>
          {type !== "paid" && <span className='circle-blue'></span>}
          <ValueHeader size={type === "paid" ? "big" : "small"}>
            Carrier
          </ValueHeader>
        </FlexContainer>
        <FlexContainer justify='center' align='center'>
          <ResultValue
            size={type === "paid" ? "large" : "normal"}
            color='black'
          >
            {value[0]}
          </ResultValue>
          {type === "paid" ? (
            <></>
          ) : (
            <>
              <CurrentStatus
                size={type === "paid" ? "big" : "small"}
                variant={percent[0] > 0 ? "up" : "down"}
                className='mx-2'
              />
              <PercentValue
                size='normal'
                color={percent[0] > 0 ? "up" : "down"}
              >
                {percent[0]}%
              </PercentValue>
            </>
          )}
        </FlexContainer>
      </FlexContainer>
      <FlexContainer column className='col-4'>
        <FlexContainer justify='center' align='center'>
          {type !== "paid" && <span className='circle'></span>}
          <ValueHeader size={type === "paid" ? "big" : "small"}>
            Benchmark avg.
          </ValueHeader>
        </FlexContainer>
        <FlexContainer justify='center' align='center'>
          <ResultValue
            size={type === "paid" ? "large" : "normal"}
            color='black'
          >
            {value[1]}
          </ResultValue>
          {type === "paid" ? (
            <></>
          ) : (
            <>
              <CurrentStatus
                size={type === "paid" ? "big" : "small"}
                variant={percent[1] > 0 ? "up" : "down"}
                className='mx-2'
              />
              <PercentValue
                size='normal'
                color={percent[1] > 0 ? "up" : "down"}
              >
                {percent[1]}%
              </PercentValue>
            </>
          )}
        </FlexContainer>
      </FlexContainer>
      <FlexContainer column className='col-4'>
        <ValueHeader size={type === "paid" ? "big" : "small"}>
          {props.title}
        </ValueHeader>
        <ResultValue
          size={type === "paid" ? "large" : "normal"}
          color={value[2].slice(0, 1) === "-" ? "down" : "up"}
        >
          {value[2]}
        </ResultValue>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Project;
