"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Links } from "../data/Links";

export default function Header() {
  const [activateSidebar, setSidebar] = useState<boolean>(false);
  return (
    <>
      <header className="lg:hidden py-3 border-b-2 border-main-grey">
        <div className="container mx-auto px-5">
          <div className="header-wrapper flex items-center gap-10">
            <button onClick={() => setSidebar(true)}>
              <Image
                src="/images/menu-icon.svg"
                alt=""
                width={32}
                height={32}
              />
            </button>
            <span className="text-[20px] text-primary">Dashboard</span>
          </div>
        </div>
      </header>
      <aside className={`fixed bg-white z-10 w-full h-full left-0 top-0 p-5 transition-all ease-in-out duration-500 ${activateSidebar ? "" : "-translate-x-full"}`}>
        <div className="text-end">
          <button
            onClick={() => setSidebar(false)}
            className="text-[24px]"
          >
            ❌
          </button>
        </div>
        <ul className="mt-7">
          {Links.map((item, index) => (
            <li
              key={index}
              className="mb-2 pb-2 border-b border-gray-600"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
