import React from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
const Contact = () => {
    return (
        <div>
            <div className="">
                <IndexNavbar />
            </div>

            <section className="pb-20 relative block bg-blueGray-800">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-blueGray-800 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>

                <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                    <h1 className="text-4xl mt-5 font-bold text-white text-center">
                      Contact With Us
                    </h1>
                    {/* <div className="flex flex-wrap mt-12 justify-center">
                        <div className="w-full lg:w-3/12 px-4 text-center">
                            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <i className="fas fa-medal text-xl"></i>
                            </div>
                            <h6 className="text-xl mt-5 font-semibold text-white">
                            Sales Inquiries
                            </h6>
                            <p className="mt-2 mb-4 text-blueGray-400">
                            Interested in learning more about Maruf Management? Get in touch with us using the form below.
                            </p>
                        </div>
                        <div className="w-full lg:w-3/12 px-4 text-center">
                            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <i className="fas fa-poll text-xl"></i>
                            </div>
                            <h5 className="text-xl mt-5 font-semibold text-white">
                                Grow your market
                            </h5>
                            <p className="mt-2 mb-4 text-blueGray-400">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                        </div>
                        <div className="w-full lg:w-3/12 px-4 text-center">
                            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <i className="fas fa-lightbulb text-xl"></i>
                            </div>
                            <h5 className="text-xl mt-5 font-semibold text-white">
                                Launch time
                            </h5>
                            <p className="mt-2 mb-4 text-blueGray-400">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                        </div>
                    </div> */}
                </div>
            </section>
            <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">
                                        Sales Inquiries
                                    </h4>
                                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                        Interested in learning more about Maruf Management? Get in touch with us using the form below.
                                    </p>
                                    <div className="relative w-full mb-3 mt-8">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="full-name"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Full Name"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="message"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            rows="4"
                                            cols="80"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="Type a message..."
                                        />
                                    </div>
                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;