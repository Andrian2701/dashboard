"use client";
import { useSalesData } from "@/hooks/useSalesData";
import { useProducts } from "@/hooks/useProducts";
import { useMetrics } from "@/hooks/useMetrics";
import { useCustomers } from "@/hooks/useCustomers";
import Card from "./Card";

const Metrics = () => {
  const { data: sales } = useSalesData();
  const { data: products } = useProducts();
  const { data: customers } = useCustomers();

  const metricsData = useMetrics(sales ?? [], products ?? [], customers ?? []);

  return (
    <div className="flex items-center gap-10">
      {metricsData.map((card) => (
        <Card key={card.title} data={card} />
      ))}
    </div>
  );
};

export default Metrics;
