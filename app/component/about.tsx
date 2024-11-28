import Image from "next/image";
import React from "react";

export default function About() {
    return (
        <div id="About">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            About Me
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            I’m Shifa Siddiqui, a web developer and graphic designer with a strong academic background. I completed my matriculation from The Ideal Grammar School, Karachi, and my FSc from the Sindh Board. I specialize in creating user-friendly websites and engaging graphic designs.

                            Currently, I’m learning Artificial Intelligence through the Governors IT Initiative to enhance my technical skills. I’m passionate about staying on top of emerging trends and continuously improving my craft.

                            Feel free to explore my portfolio, and let’s connect for potential opportunities!
                        </p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <a href="/app/public/assists/cv/Shifa.pdf" download="Shifa_CV.pdf">
                                <button className="inline-flex text-white  bg-gray-900 body-font hover:bg-gray-500 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                                    View CV
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-cover object-center rounded mx-auto"
                            width={300}
                            height={300}
                            alt="Abt pic"
                            src={require("@/app/public/assists/Pictures stuff/pexels-cottonbro-4254255.jpg")}
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}