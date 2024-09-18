"use client";
import { useState } from "react";
import { useScrollEffect } from "/hooks/useScrollEffect";
import "/src/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";
import LogoRed from "/public/logoRed.png";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollingDown, background } = useScrollEffect();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-24 lg:h-28 transition-transform duration-700 ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        backgroundColor: background,
        transition: "transform 0.5s ease-out, background-color 0.5s ease-out",
        // boxShadow: shadow,
      }}
    >
      <div className="flex justify-between items-center h-full w-full xl:px-4 2xl:px-16">
        <Link href="/">
          <div className="relative w-40 h-40 md:w-56 md:h-48 lg:w-72 lg:h-64">
            <Image
              src={Logo}
              alt="logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </Link>
        <div className="hidden sm:flex items-center px-2">
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
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24 px-3">
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
        {/** !!!!!!!!!! MOBILE DESIGN !!!!!!!!!!!! */}
        <div className="absolute top-0 left-4 -mt-8 w-40 h-40 sm:w-48 sm:h-40 md:w-56 md:h-48 lg:w-72 lg:h-64">
          <Image
            src={LogoRed}
            alt="logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="flex w-full items-center justify-end closeBtn transition-opacity">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={29} className="text-white" />
          </div>
        </div>
        <div className="flex-col mt-20">
          <ul className="w-full">
            <Link href="/services">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-5 cursor-pointer text-white text-xl border-b border-white"
              >
                Services
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-5 cursor-pointer text-white text-xl border-b border-white"
              >
                About
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-5 cursor-pointer text-white text-xl border-b border-white"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="py-10">
          <div className="bottom-0 left-0 right-0 flex items-center text-nowrap w-full">
            <a href="tel:+1234567890" className="w-full">
              <button className="bg-red-700 text-white text-2xl w-full rounded-full button">
                Call us
              </button>
            </a>
          </div>
          <div className="flex items-center space-x-4 justify-center mt-4">
            <AiOutlineInstagram size={40} className="cursor-pointer text-white" />
            <AiOutlineFacebook size={40} className="cursor-pointer text-white" />
            <AiOutlineTwitter size={40} className="cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
