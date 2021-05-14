import React, { useContext } from "react";
import Project from "./Project";
import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
} from "recharts";
import { ReportContext } from "../../../authenticated-app";

const Compare = (props) => {
  const type = props.type;
  const { file_1 } = useContext(ReportContext);
  const chartData1 = [
    {
      name: "Nov",
      areaV: file_1.IND_sub_ts4[0],
      lineV: file_1.PL_sub_ts4[0],
      yAxis: 0,
    },
    {
      name: "Dec",
      areaV: file_1.IND_sub_ts3[0],
      lineV: file_1.PL_sub_ts3[0],
      yAxis: 1000,
    },
    {
      name: "Jan",
      areaV: file_1.IND_sub_ts2[0],
      lineV: file_1.PL_sub_ts2[0],
      yAxis: 2000,
    },
    {
      name: "Feb",
      areaV: file_1.IND_sub_ts1[0],
      areaDashV: file_1.IND_sub_ts1[0],
      lineV: file_1.PL_sub_ts1[0],
      lineDashV: file_1.PL_sub_ts1[0],
      yAxis: 3000,
    },
    {
      name: "Mar",
      areaDashV: file_1.IND_sub_pred[0],
      lineDashV: file_1.PL_sub_pred[0],
      yAxis: 4000,
    },
  ];
  const chartData2 = [
    {
      name: "Nov",
      areaV: file_1.IND_subprem_ts4[0],
      lineV: file_1.PL_subprem_ts4[0],
      yAxis: 0,
    },
    {
      name: "Dec",
      areaV: file_1.IND_subprem_ts3[0],
      lineV: file_1.PL_subprem_ts3[0],
      yAxis: 15000000,
    },
    {
      name: "Jan",
      areaV: file_1.IND_subprem_ts2[0],
      lineV: file_1.PL_subprem_ts2[0],
      yAxis: 30000000,
    },
    {
      name: "Feb",
      areaV: file_1.IND_subprem_ts1[0],
      areaDashV: file_1.IND_subprem_ts1[0],
      lineV: file_1.PL_subprem_ts1[0],
      lineDashV: file_1.PL_subprem_ts1[0],
      yAxis: 45000000,
    },
    {
      name: "Mar",
      areaDashV: file_1.IND_subprem_pred[0],
      lineDashV: file_1.PL_subprem_pred[0],
      yAxis: 60000000,
    },
  ];
  return (
    <div className='col-lg-6'>
      <Project
        title={props.title}
        value={props.value}
        percent={props.percent}
        type={type}
      />
      <ResponsiveContainer width='100%' height={188}>
        <ComposedChart
          data={type === "application" ? chartData1 : chartData2}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid vertical={false} stroke='#f4f4f4' />
          <XAxis dataKey='name' />
          <YAxis dataKey='yAxis' />
          <Area
            type='linear'
            dataKey='lineV'
            fill='rgba(255, 255, 255, 0.1)'
            stroke='#dea831'
            dot={{ fill: "#dea831", fillOpacity: "1" }}
          />
          <Area
            type='linear'
            dataKey='lineDashV'
            fill='rgba(255, 255, 255, 0.1)'
            stroke='#dea831'
            strokeDasharray='5 5'
            dot={{ fill: "#dea831", fillOpacity: "1" }}
          />
          <Area
            type='linear'
            dataKey='areaV'
            fill='rgba(51, 132, 175, 0.15)'
            stroke='#3384af'
            dot={{ fill: "#3384af", fillOpacity: "1" }}
          />
          <Area
            type='linear'
            dataKey='areaDashV'
            fill='rgba(51, 132, 175, 0.15)'
            stroke='#3384af'
            strokeDasharray='5 5'
            dot={{ fill: "#3384af", fillOpacity: "1" }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Compare;
