import React from "react";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "@/const/queryKeys";
import { getSalesData } from "@/services/sales.service";
import { getProducts } from "@/services/products.service";
import { getCustomers } from "@/services/customers.service";

export const Hydration = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEYS.sales],
      queryFn: () => getSalesData(),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEYS.products],
      queryFn: () => getProducts(),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEYS.customers],
      queryFn: () => getCustomers(),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};
