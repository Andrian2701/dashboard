import { Sale } from "@/types/sales.types";

export const useIncomeExpence = (sales: Sale[]) => {
  const processData = (sales: Sale[]) => {
    const result = sales?.reduce((acc, curr) => {
      const existing = acc.find((item) => item.date === curr.date);

      if (existing) {
        existing.income += curr.totalPrice;
        existing.expence += curr.expence;
      } else {
        acc.push({
          date: curr.date,
          income: curr.totalPrice,
          expence: curr.expence,
        });
      }

      return acc;
    }, [] as { date: string; income: number; expence: number }[]);

    return result
      .slice(-5)
      .sort((a, b) => +new Date(a.date) - +new Date(b.date));
  };

  const processedData = processData(sales);

  return processedData;
};
