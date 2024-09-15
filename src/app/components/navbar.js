import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
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
        <div>
          <ul className="hidden sm:flex">
            <Link href="/services">
              <li className="ml-10  hover:border-b text-xl">Services</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10  hover:border-b text-xl">Contact</li>
            </Link>
            <Link href="/about">
              <li className="ml-10  hover:border-b text-xl">About</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25}/>
        </div>
      </div>
    </nav>
  );
}
