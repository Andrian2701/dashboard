"use client";
import Button from "@/components/ui/Button";
import { useSalesData } from "@/hooks/useSalesData";
import { useTopProducts } from "@/hooks/useTopProducts";

const ProductTable = () => {
  const { data: sales } = useSalesData();
  const processedData = useTopProducts(sales ?? []);

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
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {processedData.map((product) => (
              <tr key={product.name}>
                <th className="align-middle whitespace-nowrap py-6 text-left text-black text-[0.9rem] font-normal">
                  {product.name}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-black">
                  {product.sales}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-black">
                  {product.price}$
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-black">
                  {product.category}
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
