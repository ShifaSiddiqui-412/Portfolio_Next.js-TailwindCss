import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font hover:bg-gray-500 ">
                <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
                    <Image
                        className="lg:w-2/6 md:w-3/6 sm:w-3/6 w-5 mb-10 object-cover object-center rounded-2xl h-50"
                        alt="hero"
                        width="100"
                        height="100"
                        src={require('@/app/public/assists/Pictures stuff/pexels-shvetsa-3987111.jpg')}
                    />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            I am a Web Developer, UI/UX Designer , Graphic Designer and Learning AI.
                        </h1>
                        <p className="leading-relaxed mb-8">
                        </p>
                        <div className="flex justify-center">
                            <Link href="#Contact">
                                <button className="inline-flex text-white  border-0 py-2 px-6 focus:outline-double bg-gray-400 hover:bg-gray-700 rounded text-lg ml-4">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}