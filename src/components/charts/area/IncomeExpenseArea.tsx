"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useSalesData } from "@/hooks/useSalesData";
import { useIncomeExpence } from "@/hooks/useIncomeExpence";

const IncomeExpenseArea = () => {
  const { data: sales } = useSalesData();
  const processedData = useIncomeExpence(sales ?? []);

  return (
    <AreaChart
      width={456}
      height={300}
      data={processedData}
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
      <Legend />
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

export default IncomeExpenseArea;
