import Link from "next/link";
import Image from "next/image";

export default function Project() {
    return (
        <div id="Projects">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            My Projects
                        </h1>
                    </div>
                    <div className="flex flex-wrap -mt-12 ">
                        {/* ---------------------------PROJECT 1----------------------- */}
                        <div className="lg:w-1/2 sm:w-1/1 px-8 py-3 cursor-pointer ">
                            <div className="flex relative">
                                <Image
                                    alt="resturant website "
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl border-slate-400 border-4"
                                    src={require("@/app/public/assists/Pictures stuff/Resturant web.jpg")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:rounded-3xl hover:bg-gray-200">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Resturant Website
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Resturant Website
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2 ">
                                        The multi pages resturant website is created by using Html and Custom Css.
                                    </p>
                                    <Link href="https://resturant-website-tan.vercel.app" target="_blank">
                                        <p className="leading-relaxed py-2 text-blue-500 hover:underline">View Project.. </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* --------------------------------PROJECT 2-------------------------- */}
                        <div className="lg:w-1/2 sm:w-1/1 px-8 py-3 cursor-pointer ">
                            <div className="flex relative">
                                <Image
                                    alt="marks calculator"
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl border-slate-400 border-4"
                                    src={require("@/app/public/assists/Pictures stuff/Marks.Calculator.jpg")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:rounded-3xl hover:bg-gray-200">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Marks Calculator
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Marks Calculator
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        The calcualtor is created for calculating marks with percentage. It is created by using html , css and javascript.
                                    </p>
                                    <Link href="https://marks-calculator-eta.vercel.app" target="_blank">
                                        <p className="leading-relaxed py-2 text-blue-500 hover:underline">View Project.. </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* -------------------------------PROJECT 3----------------------------- */}
                        <div className="lg:w-1/2 sm:w-1/1 px-8 py-3 cursor-pointer ">
                            <div className="flex relative">
                                <Image
                                    alt="mathematical calculator"
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl border-slate-400 border-4"
                                    src={require("@/app/public/assists/Pictures stuff/Simple.Calculator.jpg")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:rounded-3xl hover:bg-gray-200">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Calculator
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Mathematical Calcuator
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        The calculator is created by using html , css and javascript. It can solve mathematical operations.
                                    </p>
                                    <Link href="https://calculator-html-css-js-xi.vercel.app" target="_blank">
                                        <p className="leading-relaxed py-2 text-blue-500 hover:underline">View Project.. </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* --------------------------------PROJECT 4-------------------------- */}
                        <div className="lg:w-1/2 sm:w-1/1 px-8 py-3 cursor-pointer ">
                            <div className="flex relative">
                                <Image
                                    alt="marks calculator"
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl border-slate-400 border-4"
                                    src={require("@/app/public/assists/Pictures stuff/Resume.jpg")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:rounded-3xl hover:bg-gray-200">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Dynamic Resume Builder
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Resume Builder
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        Dynamic resume builder with Editable, Shareable and Download as a Pdf features.
                                    </p>
                                    <Link href="https://dynamic-resume-psi-ten.vercel.app" target="_blank">
                                        <p className="leading-relaxed py-2 text-blue-500 hover:underline">View Project.. </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}