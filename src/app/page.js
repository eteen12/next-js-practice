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
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl text-white text-wrap text-center">
          Plumbing Services in Kelowna
        </h1>
        <p className="text-lg text-white">Est 2020</p>
      </div>

      {/* Content to enable scrolling */}
      <div className="relative z-30 bg-gray-800 text-white py-8">
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
