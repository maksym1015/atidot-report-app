import React from 'react';
import Project from './Project';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';


const dataLine = [
  {
    "name": "Nov",
    "uv": 555,
    "pv": 333,
    "amt": 2400
  },
  {
    "name": "Dec",
    "uv": 666,
    "pv": 555,
    "amt": 2210
  },
  {
    "name": "Jan",
    "uv": 888,
    "pv": 567,
    "amt": 2290
  },
  {
    "name": "Feb",
    "uv": 999,
    "pv": 777,
    "amt": 2000
  },
  {
    "name": "Mar",
    "uv": 876,
    "pv": 654,
    "amt": 2181
  }
]

const Compare = (props) => (
  <div className="col-lg-6">
    <Project title={props.title} value={props.value} percent={props.percent} />
    <ResponsiveContainer width="100%" height={188}>
      <LineChart data={dataLine} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="linear" dataKey="uv" stroke="#dea831" />
        <Line type="linear" enableArea="true" dataKey="pv" stroke="#3384af" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      </ResponsiveContainer>
  </div>
)   

export default Compare;