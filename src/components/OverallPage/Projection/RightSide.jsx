import React, { useContext } from "react";

import {
  ValueHeader,
  FlexContainer,
  Li,
  Circle,
} from "../../styled/styled.lib";
import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Label,
  Cell,
  Tooltip,
} from "recharts";
import { ReportContext } from "../../../authenticated-app";
import { convertCurrency } from "../../../utils";

const COLORS = ["#265b85", "#3384af", "#66bcea", "#e0e1de"];

const Predictive = (props) => {
  const type = props.type;
  const contextData = useContext(ReportContext);
  const file_1 = contextData["file_1_Pacific Life"];
  const file_2 = contextData["file_2_Pacific Life"];
  let gapSub = null,
    totalKeys = [],
    totalGaps = [],
    keys = [],
    gaps = [],
    gapPercent = [];

  for (const item of Object.entries(file_2["%gap_total"])) {
    gapPercent.push(Math.abs(item[1] * 100));
  }
  for (const item of Object.entries(file_2.title)) {
    let arr = item[1].split(":");
    totalKeys.push(arr[0]);
    totalGaps.push(arr[1]);
  }
  switch (type) {
    case "application":
      gapSub = convertCurrency(file_1.gap_sub_INDtoPL[0]);
      keys.push(totalKeys[0], totalKeys[1], totalKeys[2], totalKeys[3]);
      gaps.push(totalGaps[0], totalGaps[1], totalGaps[2], totalGaps[3]);
      break;
    case "premium":
      gapSub = convertCurrency(file_1.gap_subprem_INDtoPL[0]);
      keys.push(totalKeys[4], totalKeys[5], totalKeys[6], totalKeys[7]);
      gaps.push(totalGaps[4], totalGaps[5], totalGaps[6], totalGaps[7]);
      break;
    default:
      break;
  }

  const dataPie = [
    {
      name: "Group A",
      value: type === "application" ? gapPercent[0] : gapPercent[4],
    },
    {
      name: "Group B",
      value: type === "application" ? gapPercent[1] : gapPercent[5],
    },
    {
      name: "Group C",
      value: type === "application" ? gapPercent[2] : gapPercent[6],
    },
    {
      name: "Group D",
      value: type === "application" ? gapPercent[3] : gapPercent[7],
    },
  ];

  const keyItems = keys.map((key, index) => (
    <Li variant='key' key={index}>
      <Circle color={index} />
      {key}
    </Li>
  ));
  const gapItems = gaps.map((gap, index) => (
    <Li variant='gap' key={index}>
      {gap}
    </Li>
  ));
  return (
    <div className='col-lg-6'>
      <FlexContainer column justify='space-around' className='h-100'>
        <FlexContainer justify='space-between'>
          <ValueHeader size='small'>
            <i className='material-icons'>highlight</i>Key Predictive Drivers
          </ValueHeader>
          <ValueHeader size='small'>Impact on gap</ValueHeader>
        </FlexContainer>
        <FlexContainer justify='space-between' align='center'>
          <ResponsiveContainer width='33%' height={190}>
            <PieChart>
              <Pie
                data={dataPie}
                nameKey='name'
                dataKey='value'
                innerRadius='70%'
                outerRadius='100%'
              >
                {dataPie.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label
                  value={gapSub}
                  position='centerBottom'
                  className='label-top'
                  fill={gapSub.slice(0, 1) === "-" ? "#f22736" : "#47c70e"}
                />
                <Label
                  value='Gap'
                  position='centerTop'
                  className='label-bottom'
                  fill={gapSub.slice(0, 1) === "-" ? "#f22736" : "#47c70e"}
                />
                <Tooltip />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <FlexContainer justify='space-between' className='w-100'>
            <ul>{keyItems}</ul>
            <ul style={{ textAlign: "right" }}>{gapItems}</ul>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
};

export default Predictive;
