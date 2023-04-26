import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Infographics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "${process.env.REACT_APP_BACKEND_URL}/consultation/totalDateWiseConsultations"
        );
        const formattedData = response.data.map((d) => {
          return {
            name: d.dateOfConsultation,
            consultations: d.totalConsultations,
          };
        });
        setData(formattedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" bg-gradient-to-r border-t-4 border-blue-900 shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-bold font-serif mb-4">Total Consultations</h2>
      {data.length > 0 ? (
        <LineChart width={500} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={false} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="consultations"
            stroke="#3b82f6"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
};

export default Infographics;
