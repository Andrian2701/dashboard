import { FaBox, FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import { Product } from "@/types/product.types";
import { Sale } from "@/types/sales.types";
import { Customer } from "@/types/customer.types";

export const useMetrics = (
  sales: Sale[],
  products: Product[],
  customers: Customer[]
) => {
  const totalRevenue = sales.reduce((acc, obj) => acc + obj.totalPrice, 0);

  return [
    {
      icon: FaBox,
      val: products.length,
      title: "Total Products",
    },
    {
      icon: FaDollarSign,
      val: totalRevenue,
      title: "Total Revenue",
    },
    {
      icon: FaShoppingCart,
      val: sales.length,
      title: "Orders Processed",
    },
    {
      icon: FaUsers,
      val: customers.length,
      title: "Customers",
    },
  ];
};
