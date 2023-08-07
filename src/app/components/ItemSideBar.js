'use client'
import React from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function ItemSideBar(props) {
  const pathname = usePathname();
  const isActive = pathname === props.link;


  return (
    <Link href={props.link}
        className={`${
          isActive ? "bg-white text-black" : "text-white"
        } inline-flex w-full cursor-pointer items-center rounded-tr-lg rounded-br-lg py-5 px-4 text-base transition-all`}
        >
        {props.name}

    </Link>
  );
}

export default ItemSideBar;
