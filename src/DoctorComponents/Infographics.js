import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
    { name: 'Day 1', consultations: 5 },
    { name: 'Day 2', consultations: 7 },
    { name: 'Day 3', consultations: 4 },
    { name: 'Day 4', consultations: 8 },
    { name: 'Day 5', consultations: 6 },
    { name: 'Day 6', consultations: 9 },
    { name: 'Day 7', consultations: 3 },
  ]

const Infographics = () => {
  return (
    <div className="absolute top-0 left-0 bg-gradient-to-r border-t-4 border-blue-900 shadow-lg rounded-lg p-6">
    <h2 className="text-lg font-bold font-serif mb-4">Total Consultations</h2>
    <LineChart width={500} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={false}/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="consultations" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
    </LineChart>
  </div>
  )
}

export default Infographics