import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Pie, PieChart, Label, Cell, Tooltip, Area } from 'recharts';

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
const COLORS = ['#265b85', '#3384af', '#66bcea', '#e0e1de'];
const dataPie = [
  {
    "name": "Group A",
    "value": 400,
  },
  {
    "name": "Group B",
    "value": 300,
  },
  {
    "name": "Group C",
    "value": 300,
  },
  {
    "name": "Group D",
    "value": 200,
  },
];

const ChartComponent = (props) => {
  const type = props.type;
  return (
    <ResponsiveContainer width={type === 'line' ? "100%" : "25%"} height={188}>
    { type === 'line' ? 
      <LineChart data={dataLine} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="linear" dataKey="uv" stroke="#dea831" />
        <Line type="linear" enableArea="true" dataKey="pv" stroke="#3384af" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="rgba(51, 132, 175, 0.15)" fillOpacity={1} fill="url(#colorPv)" />
      </LineChart>
      :
      <PieChart>
        <Pie
          data={dataPie}
          nameKey="name"
          dataKey="value"
          innerRadius="70%"
          outerRadius="100%">
          {
            dataPie.map((entry, index) => <Cell key={entry.name} fill={ COLORS[index % COLORS.length] }/>)
          }
          <Label value="-214" position="centerBottom"  className='label-top' fill="#f22736"/>
          <Label value="Gap" position="centerTop" className='label-bottom' fill="#f22736"/>
        </Pie>
      </PieChart>
    }
    </ResponsiveContainer>
  )
}

export default ChartComponent;