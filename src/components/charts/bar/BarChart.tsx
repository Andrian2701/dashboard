"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Electronics",
    sales: 4000,
    stock: 240,
  },
  {
    name: "Clothing",
    sales: 3000,
    stock: 320,
  },
  {
    name: "Groceries",
    sales: 2000,
    stock: 150,
  },
  {
    name: "Furniture",
    sales: 2780,
    stock: 50,
  },
  {
    name: "Toys",
    sales: 1890,
    stock: 90,
  },
  {
    name: "Books",
    sales: 2390,
    stock: 300,
  },
  {
    name: "Beauty",
    sales: 3490,
    stock: 200,
  },
];

const Example = () => {
  return (
    <BarChart
      width={456}
      height={300}
      data={data}
      margin={{
        top: 5,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="sales" fill="#8884d8" />
      <Bar dataKey="stock" fill="#82ca9d" />
    </BarChart>
  );
};

export default Example;
