import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1/4',
    percent: 0.1,
  },
  {
    name: '2/4',
    percent: 0.7,
  },
  {
    name: '3/4',
    percent: 0.4,
  },
  {
    name: '4/4',
    percent: 0.2,
  },
  {
    name: '5/4',
    percent: 0.5,
  },
  {
    name: '6/4',
    percent: 1.5,
  },
];

// Custom Tooltip content
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#505050',
        padding: '10px',
        border: '1px solid #fff',
        borderRadius: '5px',
        color: '#fff'
      }}>
        <p>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: '#FFD700' }}> {/* Gold color for data key */}
            {entry.name}: {entry.value.toFixed(2)}%
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const LineChartDot = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: -13,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" strokeWidth={4} stroke="#3F6D97" vertical={false} fill="#243338"/>
            <XAxis dataKey="name" stroke="#FFFFFF"/>
            <YAxis 
              tickFormatter={(value) => `${(value * 1).toFixed(1)}%`} 
              ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5]}
              fontSize={15}
              stroke="#FFFFFF"
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="percent" 
              stroke="#3F6D97" 
              dot={true}
              strokeWidth={6}
            />
            <Tooltip 
              content={<CustomTooltip />}  // Using custom tooltip
            />
          </LineChart>
        </ResponsiveContainer>
      );
}

export default LineChartDot;
