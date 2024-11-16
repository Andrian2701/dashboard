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
import { useProducts } from "@/hooks/useProducts";
import { useSalesData } from "@/hooks/useSalesData";
import { useCategorySales } from "@/hooks/useCategorySales";

const CategorySalesBar = () => {
  const { data: sales } = useSalesData();
  const { data: products } = useProducts();
  const processedData = useCategorySales(sales ?? [], products ?? []);

  return (
    <BarChart
      width={456}
      height={300}
      data={processedData}
      margin={{
        top: 5,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis
        dataKey="category"
        scale="point"
        padding={{ left: 10, right: 10 }}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="sales" fill="#dbdbdb" />
      <Bar dataKey="stock" fill="#232423" />
    </BarChart>
  );
};

export default CategorySalesBar;
