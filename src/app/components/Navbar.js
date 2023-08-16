"use client";

import React, {useContext, createContext} from "react";
import Logo from "./Logo";
import { List } from "phosphor-react";
import { GlobalContext } from "../context/GlobalContext";
import Link from "next/link";


const Navbar = () => {
  const {sidebarOpen, setSideBarOpen} = useContext(GlobalContext)
  return (
      <div
        className="h-20 fixed md:static flex justify-between  px-4 items-center bg-primary-700 text-white top-0 w-full z-[100] "
        style={{ backgroundColor: "#1B264F" }}
      >
        <Link className="logo w-40 pb-4" href="/">
          <Logo />
        </Link>
        <button
          className={`md:hidden w-10 h-10 bg-white border border-gray-20 rounded-full grid place-items-center transition-opacity ${
            sidebarOpen ? "opacity-0" : "!opacity-100"
          }`}
          onClick={()=> setSideBarOpen(!sidebarOpen)} // Use a função toggleSidebar para alterar o estado da barra lateral
        >
          <List size={24} color="#000" />
        </button>
      </div>

  );
};

export default Navbar;
