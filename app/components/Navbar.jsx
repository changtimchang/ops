import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 border border-b-2 border-slate-200">
      <div className="">
        <Image src={logo} alt="company logo" className="w-30 " />
      </div>
      <div className="font-bold text-3xl">최적생산 AI예측</div>
      <div className="">
        <Link
          href="/login"
          className="rounded-full px-4 py-2 bg-[#4f61d8] text-white hover:bg-black">
          logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
