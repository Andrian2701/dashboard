import { FaBox, FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import Card from "./Card";

const data = [
  {
    icon: FaBox,
    val: 1000,
    title: "Total Products",
  },
  {
    icon: FaDollarSign,
    val: 25000,
    title: "Total Revenue",
  },
  {
    icon: FaShoppingCart,
    val: 1000,
    title: "Orders Processed",
  },
  {
    icon: FaUsers,
    val: 1000,
    title: "Customers",
  },
];

const Metrics = () => {
  return (
    <div className="flex items-center gap-10">
      {data.map((card) => (
        <Card key={card.title} data={card} />
      ))}
    </div>
  );
};

export default Metrics;
