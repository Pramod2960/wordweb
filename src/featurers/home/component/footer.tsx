"use client";

import Link from "next/link";
import Image from "next/image";
// import LoginDialog from "./login-dialog";

export const Footer = () => {

const date = new Date();
const year = date.getFullYear();  //2025

  return (
    <footer className=" z-5  bg-[#27374D] pb-5">
      <div
        className="
      container
      flex flex-col flex-wrap
      px-4
      py-4    
      mx-auto
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
    "
      >
        <div className="flex-shrink-0 w-64 md:mt-5 mx-auto text-left md:mx-0 md:text-left">
          <div className="flex flex-row md:flex-col gap-2 items-left items-center justify-center ">
            <div className="">
              <Image src="/logo_white.png" alt="logo" height={50} width={50} />
            </div>
            <Link href={"/"}>
              <h3 className=" ml-1 text-gray-300 scroll-m-20 text-base md:text-2xl font-medium tracking-tight ">
              WordWeb <sup>ES</sup>
              </h3>
            </Link>
            <div className=" hidden md:flex mt-0 text-gray-400  text-sm items-center pr-5 justify-end ">
        Ⓒ 2023 - {year}  WordWeb <sup>ES</sup>
      </div>
          </div>
        </div>

        <div className="justify-between w-full mt-4 text-center lg:flex  flex sd:flex-wrap">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2 text-left">
             <ul className="mb-0 space-y-2 text-sm list-none">
              <li>
                <Link
                  href={"/aboutus"}
                  className="text-gray-300 hover:underline cursor-pointer"
                >About Us
                </Link>
              </li>
             
              <li>
                <Link
                  href={"/word-nature"}
                  className="text-gray-300 hover:underline cursor-pointer"
                >
                  Word Nature
                </Link>
              </li>
              <li>
                <Link
                  href={"/primary-sources"}
                  className="text-gray-300 hover:underline cursor-pointer"
                >
                  Primary Sources
                </Link>
              </li>
             
              <li>
                <Link
                  href={"/project-rationale"}
                  className="text-gray-300 hover:underline cursor-pointer"
                >
                  Project Rationale
                </Link>
              </li>
             
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2 text-left">
            <ul className="mb-0 space-y-2 text-sm list-none">
              
            <li>
                <Link
                  href={"/objectives"}
                  className="text-gray-300 hover:underline cursor-pointer"
                >
                  Objectives
                </Link>
              </li>
            
             
              
              <li>
                <Link
                  href={"/person"}
                  className="text-gray-300 hover:underline cursor-pointer"
                >
                  Project Team
                </Link>
              </li>
              <li>
                <Link
                  href={"/methodology"}
                  className="text-gray-300 hover:underline cursor-pointer"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  href={"/quality"}
                  className="text-gray-300 hover:underline cursor-pointer"
                >
                  Quality Assurance
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2 text-left">
            <ul className="mb-0 space-y-2 text-sm list-none">
              <li>
                <Link
                  href={"/contact"}
                  className="text-gray-300 hover:underline cursor-pointer"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href={"/faq"}
                  className="text-gray-300 hover:underline cursor-pointer"
                >
                  FAQs
                </Link>
              </li>
              <li>
                {/* <LoginDialog /> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" md:hidden flex mt-0 text-gray-400  mb-5 text-sm items-center pr-5 justify-center ">
        Ⓒ 2023 - 2026 Shadbshala{" "}
      </div>
    </footer>
  );
};
