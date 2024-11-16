import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/const/queryKeys";
import { getSalesData } from "@/services/sales.service";

export const useSalesData = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.sales],
    queryFn: () => getSalesData(),
    staleTime: 300000,
  });
};
