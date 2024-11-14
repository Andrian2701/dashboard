import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { MENU } from "./header.data";
import logo from "../../assets/logo.avif";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-3.5 border-b-[1px] border-gray">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8">
            <Image src={logo} alt="logo" className="h-full w-full" />
          </div>
          <h1 className="text-black font-semibold text-base ">NILED</h1>
        </Link>
        <div className="bg-gray h-6 w-px"></div>
        <div className="flex gap-10">
          {MENU.map((link) => (
            <Link
              href={link.path}
              key={link.title}
              className="flex items-center gap-2 text-black text-sm"
            >
              <IoIosArrowDown />
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <span className="flex items-center justify-center rounded-full w-7 h-7 border-[1px] border-gray cursor-pointer">
          <IoSearchOutline />
        </span>
        <span className="flex items-center justify-center rounded-full w-7 h-7 border-[1px] border-gray cursor-pointer">
          <FiBell />
        </span>
      </div>
    </header>
  );
};

export default Header;
