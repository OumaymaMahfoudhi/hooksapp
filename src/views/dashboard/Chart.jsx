    import React from 'react';
    import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
    
    const data = [
        { name: 'Mission 1', week: 5 },
        { name: 'Mission 2', week: 8 },
        { name: 'Mission 3', week: 3 },
        { name: 'Mission 4', week: 6 },
    ];

    const Chart = ({ data}) => {
        return (
        <BarChart width={550} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="week" fill="#8884d8" />
        </BarChart>
        );
    };

const MyApp = () => {
  const data = [
    { name: 'Mission 1', week: 5 },
    { name: 'Mission 2', week: 8 },
    { name: 'Mission 3', week: 3 },
    { name: 'Mission 4', week: 6 },
  ];

  return (
    <div>
      <Chart data={data} />
    </div>
  );
};

export default MyApp;