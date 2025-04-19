import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData=[
    {
      "id": 1,
      "name": "Arafat Hossain",
      "physics": 85,
      "chemistry": 78,
      "math": 92
    },
    {
      "id": 2,
      "name": "Mim Akter",
      "physics": 74,
      "chemistry": 69,
      "math": 81
    },
    {
      "id": 3,
      "name": "Nayeem Islam",
      "physics": 91,
      "chemistry": 88,
      "math": 95
    },
    {
      "id": 4,
      "name": "Tanzim Rahman",
      "physics": 67,
      "chemistry": 72,
      "math": 70
    },
    {
      "id": 5,
      "name": "Sharmin Jahan",
      "physics": 79,
      "chemistry": 83,
      "math": 77
    },
    {
      "id": 6,
      "name": "Fahim Chowdhury",
      "physics": 88,
      "chemistry": 80,
      "math": 90
    },
    {
      "id": 7,
      "name": "Ruma Khatun",
      "physics": 60,
      "chemistry": 64,
      "math": 58
    },
    {
      "id": 8,
      "name": "Kawsar Ahmed",
      "physics": 95,
      "chemistry": 92,
      "math": 97
    },
    {
      "id": 9,
      "name": "Nodi Sultana",
      "physics": 73,
      "chemistry": 77,
      "math": 80
    },
    {
      "id": 10,
      "name": "Sabbir Rahman",
      "physics": 82,
      "chemistry": 75,
      "math": 85
    }
  ];
  

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={'chemistry'} stroke="red"></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;

