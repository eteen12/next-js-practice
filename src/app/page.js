import NavBar from "./components/navbar";
import Image from "next/image";
import BackgroundImage from "/public/background.jpg";
import MobileBackgroundImage from "/public/backgroundMobile.jpg";
import "/src/app/globals.css";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="relative z-50">
        <NavBar />
      </div>
      <div className="hidden sm:block">
        <Image
          src={BackgroundImage}
          className="object-cover brightness-75 z-10"
          fill
          alt="Background Image "
          priority
        />
      </div>
      <div className="block sm:hidden">
        <Image
          src={MobileBackgroundImage}
          className="object-cover brightness-75 z-10"
          fill
          alt="Mobile Background Image"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-start justify-center min-h-screen px-7 lg:px-10 xl:px-14 2xl:px-24 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white text-wrap">
          Kelownas Trusted <br /> Plumbing Professionals
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-white">
          Est 2020
        </p>
        <div className="flex space-x-4 mt-6">
          <a
            href="#"
            className="bg-transparent text-white px-6 py-2 border border-white text-lg "
          >
            Services
          </a>
          <a
            href="#"
            className="bg-red-700 text-white px-6 py-2 border border-red-700 text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Content to enable scrolling */}
      <div className="relative z-30 bg-white text-black py-8">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-4">More Content Below</h2>
          <p className="mb-4">
            This is additional content to demonstrate scrolling. Add as much
            text as you need to test scrolling behavior.
          </p>
          {/* Repeat or add more content here */}
          {[...Array(50)].map((_, i) => (
            <p key={i} className="mb-2">
              This is line {i + 1} of the content for scrolling test.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
