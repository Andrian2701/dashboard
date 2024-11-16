import { Sale } from "@/types/sales.types";
import { Product } from "@/types/product.types";

export const useCategorySales = (sales: Sale[], products: Product[]) => {
  const processData = (sales: Sale[], products: Product[]) => {
    const stockLookup = products?.reduce((acc, product) => {
      acc[product.category] = product.stock || 0;

      return acc;
    }, {} as { [category: string]: number });

    const result = sales?.reduce((acc, curr) => {
      const existing = acc.find((item) => item.category === curr.category);
      const stock = (stockLookup as { [category: string]: number })[
        curr.category
      ];

      if (existing) {
        existing.sales += curr.amount;
      } else {
        acc.push({
          category: curr.category,
          sales: curr.amount,
          stock,
          key: Math.random(),
        });
      }

      return acc;
    }, [] as { category: string; sales: number; stock: number; key: number }[]);

    return result;
  };

  const processedData = processData(sales, products);

  return processedData;
};
