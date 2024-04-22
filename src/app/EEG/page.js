// pages/eeg.js
"use client"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const EEG = () => {
  // Example EEG data for two patients
  // const patientData = [
  //   {
  //     id: 1,
  //     name: 'Patient A',
  //     data: {
  //       labels: ['1', '2', '3', '4', '5'], // Example labels
  //       datasets: [
  //         {
  //           label: 'EEG Data',
  //           data: [10, 20, 15, 25, 30], // Example EEG data points
  //           borderColor: 'rgb(75, 192, 192)',
  //           tension: 0.1,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: 'Patient B',
  //     data: {
  //       labels: ['1', '2', '3', '4', '5'], // Example labels
  //       datasets: [
  //         {
  //           label: 'EEG Data',
  //           data: [5, 15, 10, 20, 25], // Example EEG data points
  //           borderColor: 'rgb(255, 99, 132)',
  //           tension: 0.1,
  //         },
  //       ],
  //     },
  //   },
  // ];
  const data = [
    {
      name: 'T4-L2',
      uv: 5000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 't4-T6',
      uv: 3000,
      pv: 1198,
      amt: 2210,
    },
    {
      name: 'FB2-T2',
      uv: 2000,
      pv: 10000,
      amt: 2290,
    },
    {
      name: 'FB1-F7',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'F7-T3',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'T5-R',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'L-3',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="container mx-auto px-5 justify-center items-center">
       <h2 className="text-2xl font-bold mt-8 mb-4">EEG Recordings</h2>
      <LineChart
        width={1000}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#000" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#000" />
        <Line type="monotone" dataKey="uv" stroke="#000" />
      </LineChart>
      <LineChart
        width={1000}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#000" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#000" />
        <Line type="monotone" dataKey="uv" stroke="#000" />
      </LineChart>
      <LineChart
        width={1000}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#000" strokeDasharray="3 4 5 2" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#000" strokeDasharray="3 4 5 2" />
        <Line type="monotone" dataKey="uv" stroke="#000" strokeDasharray="3 4 5 2" />
      </LineChart>
</div>
  );
};

export default EEG;
