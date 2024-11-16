import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/const/queryKeys";
import { getCustomers } from "@/services/customers.service";

export const useCustomers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.customers],
    queryFn: () => getCustomers(),
    staleTime: 300000,
  });
};
