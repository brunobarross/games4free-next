"use client";

import React, {useContext} from "react";
import Logo from "./Logo";
import { List } from "phosphor-react";
// import { GlobalContext } from "../context/context";

const Navbar = () => {
    // const { sidebarOpen, setSideBarOpen } = useContext(GlobalContext);



  return (
    <>
      {/* <div
        className="h-20 flex justify-between md:hidden px-4 items-center bg-primary-700 text-white fixed top-0 w-full z-[100]"
        style={{ backgroundColor: "#1B264F" }}
      >
        <div className="logo w-40 pb-4">
          <Logo />
        </div>
        <button
          className={`w-10 h-10 bg-white border border-gray-20 rounded-full grid place-items-center transition-opacity ${
            sidebarOpen ? "opacity-0" : "opacity-100"
          }`}
          onClick={()=> setSideBarOpen(!sidebarOpen)} // Use a função toggleSidebar para alterar o estado da barra lateral
        >
          <List size={24} color="#000" />
        </button>
      </div> */}
    </>
  );
};

export default Navbar;
