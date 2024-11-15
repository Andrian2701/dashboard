import Button from "@/components/ui/Button";

const ProductTable = () => {
  const products = [
    {
      name: "Electronics",
      sellAmount: 4569,
      price: 340,
      bounceRate: 46.53,
      trend: "up",
    },
    {
      name: "Clothing",
      sellAmount: 3985,
      price: 319,
      bounceRate: 46.53,
      trend: "down",
    },
    {
      name: "Groceries",
      sellAmount: 3513,
      price: 294,
      bounceRate: 36.49,
      trend: "down",
    },
    {
      name: "Furniture",
      sellAmount: 2050,
      price: 147,
      bounceRate: 50.87,
      trend: "up",
    },
    {
      name: "Toys",
      sellAmount: 1795,
      price: 190,
      bounceRate: 46.53,
      trend: "down",
    },
    {
      name: "Books",
      sellAmount: 1795,
      price: 190,
      bounceRate: 46.53,
      trend: "down",
    },
    {
      name: "Beauty",
      sellAmount: 1795,
      price: 190,
      bounceRate: 46.53,
      trend: "down",
    },
  ];

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
      <div className="rounded-t mb-0 pb-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h3 className="font-bold text-base text-black">Top Products</h3>
          </div>
          <div className="relative w-full max-w-full flex-grow flex-1 text-right">
            <Button className="btn-secondary">Full results</Button>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center bg-transparent w-full border-collapse">
          <thead>
            <tr>
              <th className="text-gray align-middle whitespace-nowrap text-left text-sm font-normal">
                Product
              </th>
              <th className="text-gray align-middle whitespace-nowrap text-left text-sm font-normal">
                Sell Amount
              </th>
              <th className="text-gray align-middle whitespace-nowrap text-left text-sm font-normal">
                Price
              </th>
              <th className="text-gray align-middle whitespace-nowrap text-left text-sm font-normal">
                Bounce rate
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <th className="align-middle whitespace-nowrap py-6 text-left text-black text-[0.9rem] font-normal">
                  {product.name}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-black">
                  {product.sellAmount}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-black">
                  {product.price}$
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-black">
                  {product.bounceRate}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
