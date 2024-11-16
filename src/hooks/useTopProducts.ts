import { Sale } from "@/types/sales.types";

export const useTopProducts = (sales: Sale[]) => {
  const processData = (sales: Sale[]) => {
    const result = sales?.reduce((acc, curr) => {
      const existing = acc.find((item) => item.name === curr.name);

      if (existing) {
        existing.sales += curr.amount;
        existing.price += curr.totalPrice;
      } else {
        acc.push({
          name: curr.name,
          category: curr.category,
          sales: curr.amount,
          price: curr.totalPrice,
          key: Math.random(),
        });
      }

      return acc;
    }, [] as { name: string; category: string; sales: number; price: number; key: number }[]);

    return result.sort((a, b) => b.sales - a.sales);
  };

  const processedData = processData(sales);

  return processedData;
};
