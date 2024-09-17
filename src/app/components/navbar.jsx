"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState } from "react";
import { useScrollEffect } from "/hooks/useScrollEffect";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollingDown = useScrollEffect();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-28 lg:h-32 transition-transform duration-300 ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <div className="relative w-40 h-40 sm:w-48 sm:h-40 md:w-56 md:h-48 lg:w-72 lg:h-64">
            <Image
              src={Logo}
              alt="logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </Link>
        <div className="hidden sm:flex items-center">
          <ul className="flex items-center">
            <Link href="/services">
              <li className="ml-10 hover:border-b text-xl text-white lg:text-2xl">
                Services
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 hover:border-b text-xl text-white lg:text-2xl">
                Contact
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 hover:border-b text-xl text-white lg:text-2xl">
                About
              </li>
            </Link>
            <li className="ml-10">
              <a href="tel:+1234567890">
                <button className="bg-red-700 text-white lg:text-xl py-2 px-4 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                  Call Us
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} className="text-white" />
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-[100%] sm:hidden h-screen bg-[#080808] p-10 transition-opacity ease-in duration-500 ${
          menuOpen ? "opacity-100 visible z-50" : "opacity-0 invisible -z-50"
        }`}
        style={{
          position: "fixed",
          transition: "opacity 0.5s ease-out, visibility 0.5s ease-out",
        }}
      >
        <div className="flex w-full items-center justify-end ml-7 -mt-2 transition-opacity ">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={30} className="text-white" />
          </div>
        </div>
        <div className="flex-col  py-4">
          <ul className="w-full text-center">
            <Link href="/services">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-white text-2xl"
              >
                Services
              </li>
            </Link>
            <Link href="about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-white text-2xl"
              >
                About
              </li>
            </Link>
            <Link href="contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-white text-2xl"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center space-x-5 justify-center mt-">
          <AiOutlineInstagram size={50} className="cursor-pointer text-white" />
          <AiOutlineFacebook size={50} className="cursor-pointer text-white" />
          <AiOutlineTwitter size={50} className="cursor-pointer text-white" />
        </div>
        <div className="bottom-0 left-0 right-0 flex justify-center items-center p-4">
          <a href="tel:+1234567890">
            <button className="bg-red-700 text-white text-2xl py-2 px-36 rounded-full transition-colors duration-150 ease-in-out active:bg-blue-300">
              Call us
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
