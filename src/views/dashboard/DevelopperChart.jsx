import React from "react";
import { PieChart, Pie, Tooltip, Legend } from 'recharts';


const data = [
    { name: 'Developer 1', hasMission: true },
    { name: 'Developer 2', hasMission: true },
    { name: 'Developer 3', hasMission: false },
    { name: 'Developer 4', hasMission: true },
    { name: 'Developer 5', hasMission: false },
  ];
  
  const developersWithMissions = data.filter(dev => dev.hasMission);
  const developersWithoutMissions = data.filter(dev => !dev.hasMission);
  
  const pieData = [
    { name: 'With Missions', value: developersWithMissions.length },
    { name: 'Without Missions', value: developersWithoutMissions.length },
  ];
 
  
  
  const DevelopperChart = ({ data }) => {
    return (
      <PieChart width={300} height={300} >
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={150} cy={150} outerRadius={60} fill="#8884d8" label />
        <Legend />
      </PieChart>
    );
  };
  
  const DevelopperApp = () => {
    const data = [
      { name: 'Developer 1', hasMission: true },
      { name: 'Developer 2', hasMission: true },
      { name: 'Developer 3', hasMission: false },
      { name: 'Developer 4', hasMission: true },
      { name: 'Developer 5', hasMission: false },
    ];
  
    const developersWithMissions = data.filter(dev => dev.hasMission);
    const developersWithoutMissions = data.filter(dev => !dev.hasMission);
  
    const pieData = [
      { name: 'With Missions', value: developersWithMissions.length },
      { name: 'Without Missions', value: developersWithoutMissions.length },
    ];
  
    return (
      <div>
        <DevelopperChart data={pieData} />
      </div>
    );
  };
  
  export default DevelopperApp;
    





