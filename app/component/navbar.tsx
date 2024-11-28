import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDownload } from 'react-icons/fa6';


export default function Navbar() {
  return (
    <div className="bg-slate-300 h-16 z-50 sticky top-0">
      <header className="text-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap flex-col sm:flex-row md:flex-row items-center">
          <a className="flex title-font items-center font-bold text-gray-900 mb-4 md:mb-0">
            <Image height={100}
              width={100}
              alt={"ProPic"}
              src={require("@/app/public/assists/Pictures stuff/animated me.jpg")}
              className="w-16 h-17 rounded-r-full items-start"
            />
            <span className="ml-2 text-2xl hover:text-purple-900 place-items-start">Shifa Siddiqui</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-purple-900 cursor-pointer">Home</Link>
            <Link href={"#About"} className="mr-5 hover:text-purple-900 cursor-pointer">About</Link>
            <Link href={"#Skills"} className="mr-5 hover:text-purple-900 cursor-pointer">Skills</Link>
            <Link href={"#Projects"} className="mr-5 hover:text-purple-900 cursor-pointer">Projects</Link>
            <Link href={"#Contact"} className="mr-5 hover:text-purple-900 cursor-pointer">Contact</Link>
          </nav>
          <div>
            <a href="/app/public/assists/cv/Shifa" download="Shifa_CV.pdf">
              <button className="inline-flex items-center bg-gray-200 border-1  py-1 px-3 focus:outline-none hover:bg-slate-500 rounded-full text-center mb-7">
                Download CV
                <FaDownload className="text-xl ml-2" />
              </button>
            </a>
          </div>
        </div>
      </header>
    </div>

  )
}