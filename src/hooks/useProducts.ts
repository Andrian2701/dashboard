import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/const/queryKeys";
import { getProducts } from "@/services/products.service";

export const useProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.products],
    queryFn: () => getProducts(),
    staleTime: 300000,
  });
};
