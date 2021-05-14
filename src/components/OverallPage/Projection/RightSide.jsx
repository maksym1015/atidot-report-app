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

const COLORS = [
  "#265b85",
  "#295b99",
  "#3177af",
  "#3384af",
  "#43bcea",
  "#66bcea",
  "#86bceb",
  "#a0bcdd",
  "#c0cbde",
  "#e0e1de",
];

const Predictive = (props) => {
  const type = props.type;
  const { file_1, file_2 } = useContext(ReportContext);
  let gapSub = null,
    keys = [],
    gaps = [],
    gapPercent = [];

  switch (type) {
    case "application":
      gapSub = file_1.gap_sub_INDtoPL[0];
      for (const item of Object.entries(file_2.title)) {
        let arr = item[1].split(":");
        keys.push(arr[0]);
        gaps.push(arr[1]);
      }
      for (const item of Object.entries(file_2["%gap_total"])) {
        gapPercent.push(Math.abs(item[1] * 100));
      }
      break;
    case "premium":
      gapSub = convertCurrency(file_1.gap_subprem_INDtoPL[0]);
      for (const item of Object.entries(file_2.title)) {
        let arr = item[1].split(":");
        keys.push(arr[0]);
        gaps.push(arr[1]);
      }
      for (const item of Object.entries(file_2["%gap_total"])) {
        gapPercent.push(Math.abs(item[1] * 100));
      }
      break;
    default:
      break;
  }

  const dataPie = [
    {
      name: "Group A",
      value: gapPercent[0],
    },
    {
      name: "Group B",
      value: gapPercent[1],
    },
    {
      name: "Group C",
      value: gapPercent[2],
    },
    {
      name: "Group D",
      value: gapPercent[3],
    },
    {
      name: "Group E",
      value: gapPercent[4],
    },
    {
      name: "Group F",
      value: gapPercent[5],
    },
    {
      name: "Group G",
      value: gapPercent[6],
    },
    {
      name: "Group H",
      value: gapPercent[7],
    },
    {
      name: "Group I",
      value: gapPercent[8],
    },
    {
      name: "Group J",
      value: gapPercent[9],
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
          <ResponsiveContainer width='35%' height={200}>
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
                  fill='#f22736'
                />
                <Label
                  value='Gap'
                  position='centerTop'
                  className='label-bottom'
                  fill='#f22736'
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
