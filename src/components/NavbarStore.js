import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/merchainLogo.svg";

function NavbarStore({color}) {
  return (
    <nav className="flex 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 items-center justify-between bg-white z-[999] py-3 px-3 md:px-6 lg:px-16 border-b-gray-200 sticky top-0 border-b-[1px]">
      <Link to="/">
        <img src={logo} alt="merchain logo" className="w-3/4 md:w-auto" />
      </Link>
      <div className="flex items-center justify-between gap-2 md:gap-10">
        <div className={` ${color + "Nav"} font-medium text-xs md:text-base transition-all duration-150 ease-out hover:-translate-y-[2px]  py-2 px-4 rounded-md md:rounded-lg border-[1.4px] cursor-pointer`}>Coba Merchain</div>
        <div className="relative cursor-pointer">
            <div className={` ${color + "-btn"} w-5 h-5 rounded-full absolute -right-[10px] -top-2 text-xs p-2 text-white flex items-center justify-center`}>30</div>
            <Icon icon="clarity:shopping-cart-line" width={28}/>
        </div>
      </div>
    </nav>
  );
}

export default NavbarStore;
