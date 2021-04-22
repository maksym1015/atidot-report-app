import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Pie, PieChart, Label, Cell } from 'recharts';

const dataLine = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
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
    <ResponsiveContainer width={type === 'line' ? "100%" : "50%"} height={150}>
    { type === 'line' ? 
      <LineChart data={dataLine} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      :
      <PieChart>
        <Pie
          data={dataPie}
          nameKey="name"
          dataKey="value"
          innerRadius="60%"
          outerRadius="80%">
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