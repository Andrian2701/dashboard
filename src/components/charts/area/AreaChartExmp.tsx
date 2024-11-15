"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    date: "27-01",
    income: 4000,
    expence: 2400,
  },
  {
    date: "28-01",
    income: 3000,
    expence: 1398,
  },
  {
    date: "29-01",
    income: 2000,
    expence: 1209,
  },
  {
    date: "30-01",
    income: 2780,
    expence: 980,
  },
  {
    date: "31-01",
    income: 1890,
    expence: 2300,
  },
  {
    date: "01-02",
    income: 2390,
    expence: 1223,
  },
  {
    date: "02-02",
    income: 3490,
    expence: 4300,
  },
];

const AreaChartExmp = () => {
  return (
    <AreaChart
      width={456}
      height={250}
      data={data}
      margin={{ top: 10, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorincome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#c9f5d4" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#c9f5d4" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorexpense" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#6bc984" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#6bc984" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="income"
        stroke="#c9f5d4"
        fillOpacity={1}
        fill="url(#colorincome)"
      />
      <Area
        type="monotone"
        dataKey="expence"
        stroke="#6bc984"
        fillOpacity={1}
        fill="url(#colorexpense)"
      />
    </AreaChart>
  );
};

export default AreaChartExmp;
