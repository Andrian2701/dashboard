import Image from "next/image";
import appImg from "../../../assets/app.webp";
import Button from "@/components/ui/Button";

const Sidebar = () => {
  return (
    <aside className="bg-[#f0f0f0] w-72 min-h-screen py-4 px-10">
      <div className="flex flex-col items-center">
        <Image src={appImg} alt="app-img" />
        <div className="text-center flex flex-col">
          <label className="font-bold text-base text-black">
            Save more money
          </label>
          <label className="mt-2 text-gray text-[0.8rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit ratione
            optio architecto architecto
          </label>
        </div>
        <Button className="btn-primary">View tips</Button>
      </div>
    </aside>
  );
};

export default Sidebar;
