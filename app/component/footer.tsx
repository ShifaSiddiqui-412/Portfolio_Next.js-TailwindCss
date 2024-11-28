import React from "react";
import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";



export default function Footer() {
    return (

        <div className="bg-slate-400">
            <footer className="text-gray-600 body-font">
                <div className="bg-gray-900">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

                        <span className="ml-3 text-xl text-slate-400">ShifaSid*</span>

                        <p className="text-sm text-slate-400 sm:ml-6 sm:mt-0 mt-4 ">© 2024  —
                            <Link href="https://www.google.com" target="-blank" rel="noopener noreferrer" className="text-slate-400 hover:text-lg ml-1">@shifasiddiqui</Link>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <Link href="https://www.facebook.com" target="-blank" className="text-2xl  text-slate-400  hover:text-blue-500">
                                <ImFacebook2 />
                            </Link>
                            <Link href="https://www.youtube.com" target="-blank" className="text-3xl -my-1 ml-4 text-slate-400 hover:text-red-600">
                                <ImYoutube />
                            </Link>
                            <Link href="https://www.linkedIn.com" target="-blank" className="text-2xl ml-4 text-slate-400 hover:text-blue-700">
                                <ImLinkedin />
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}