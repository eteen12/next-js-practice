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

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Dark Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity ease-in duration-300 ${
          menuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-10`}
        onClick={handleNav} // Closes the menu when overlay is clicked
      />

      {/* Main Navbar */}
      <nav className={`fixed w-full h-24 shadow-xl bg-white z-20 ${menuOpen ? 'opacity-40 shadow-2xl' : 'bg-white'}`}>
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <Link href="/">
            <Image
              src={Logo}
              width={165}
              height={150}
              alt="logo"
              className="cursor-pointer"
              priority
            />
          </Link>
          <div className="hidden sm:flex">
            <ul className="flex space-x-10">
              <Link href="/services">
                <li className="hover:border-b text-xl">Services</li>
              </Link>
              <Link href="/contact">
                <li className="hover:border-b text-xl">Contact</li>
              </Link>
              <Link href="/about">
                <li className="hover:border-b text-xl">About</li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} className="text-blue-500" />
          </div>
        </div>
      </nav>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 w-[60%] sm:hidden h-screen bg-[#ecf0f3] p-10 transition-transform ease-in duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <div className="flex w-full items-center justify-end mb-10">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={30} className="text-blue-500" />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="w-full text-center">
            <Link href="/services">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-blue-500 text-2xl"
              >
                Services
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-blue-500 text-2xl"
              >
                About
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-blue-500 text-2xl"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center space-x-5 justify-center mt-28">
          <AiOutlineInstagram size={50} className="cursor-pointer text-blue-500" />
          <AiOutlineFacebook size={50} className="cursor-pointer text-blue-500" />
          <AiOutlineTwitter size={50} className="cursor-pointer text-blue-500" />
        </div>
      </div>
    </>
  );
}
