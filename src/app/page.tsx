import AreaChartExmp from "@/components/charts/area/AreaChartExmp";
import Example from "@/components/charts/bar/BarChart";
import Metrics from "@/components/charts/metrics/Metrics";
import ProductTable from "@/components/charts/table/ProductTable";
import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niled",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex">
        <div className="flex flex-col flex-1 py-10 px-5 gap-10">
          <Metrics />
          <div className="flex gap-10">
            <AreaChartExmp />
            <Example />
          </div>
          <ProductTable />
        </div>
        <Sidebar />
      </main>
    </>
  );
}
