
import { Link } from "react-router-dom";
import { SiMinutemailer } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { MdSubject } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

const Footer = () => {
    const [loading, setLoading] = useState(false);

    return (
        <footer className="bg-gray-900 pt-6 w-full flex flex-col items-center">

            <div
                id="contactUs"
                className="py-6 w-full max-w-5xl flex flex-col items-center lg:flex-row lg:justify-end  gap-y-10"
            >
                <div className="lg:mr-auto pr-4 flex flex-col items-start gap-6">
                    <h2 className="text-3xl font-semibold -tracking-[2px] opacity-25 text-white ">
                        Get Ecosystem updates in your inbox
                    </h2>
                    <h3 className="text-3xl font-semibold -tracking-[2px] text-white  opacity-100">
                        Quick Support
                    </h3>
                    <h4 className="text-white text-xl font-light opacity-80 text-start">
                        We're here for you, waiting to answer your queries, our team is happy to help you.
                    </h4>
                    <div className="flex gap-2">
                        <a
                            href="mailto:example@gmail.com"
                            className="hover:text-green-400 cursor-pointer flex transition duration-200 ease-in text-white "
                        >
                            <SiMinutemailer className="w-6 h-6 mr-2  text-green-400" />
                            info@hemfrid.se
                        </a>
                    </div>
                </div>
                <form className="flex bg-gr flex-col hover:scale-105 transition duration-300 rounded-xl w-11/12 lg:w-1/2 gap-6 py-3 px-4">
                    <h2 className=" text-gray-300 text-xl font-bold text-start ">
                        Get in touch with us!
                    </h2>
                    <div className="flex flex-col gap-y-5">
                        <div className="flex relative items-center ">
                            <BiUser className="absolute left-1 w-9 h-9 p-1 text-gray-500 hover:shake" />
                            <input
                                className="pl-12 rounded bg-gray-200 shadow-lg w-full  p-2 placeholder:text-gr1 "
                                type="text"
                                placeholder="Full name"
                                name="fullName"

                            />
                        </div>
                        <div className="flex relative items-center ">
                            <FiMail className=" absolute left-1 w-7 h-7 mr-2 text-gray-500 hover:shake" />
                            <input
                                className="pl-12 w-full rounded bg-gray-200 shadow-lg   p-2 placeholder:text-gr1 "
                                type="email"
                                placeholder="Email Address"
                                name="email"

                            />
                        </div>
                        <div className="flex relative items-center">
                            <MdSubject className="absolute left-1 w-7 h-7  mr-2 text-gray-500 hover:shake" />
                            <input
                                className="pl-12 w-full rounded bg-gray-200 shadow-lg  p-2 placeholder:text-gr1 "
                                type="text"
                                placeholder="Enter Your Subject"
                                name="subject"

                            />
                        </div>
                        <div className="flex relative items-center">
                            <AiOutlineMessage className="absolute left-1 top-2 w-7 h-7 mr-2 text-gray-500 hover:shake" />
                            <textarea
                                className="pl-12 w-full p-2 rounded bg-gray-200  shadow-lg   placeholder:text-gr1 "
                                placeholder="Message"
                                name="message"

                            ></textarea>
                        </div>
                        <button
                            className="text-white px-4 py-2 rounded-lg bg-sk hover:bg-sk1 transition duration-200"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>

            <div
                id="footer"
                className="text-start py-10 px-2 w-full border-y  border-gr1  max-w-6xl  grid lg:grid-cols-4 grid-cols-2 gap-4 text-white"
            >
                <div className="col-span-1 flex flex-col gap-5">
                    <h2 className="font-bold text-xl">Services</h2>

                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Everything for your home
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Moving_Home">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Everything for your move
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Moving_Home">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Everything for your yard
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Deep_Clean">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Everything for your business
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                </div>
                <div className="  col-span-1 flex flex-col gap-5">
                    <h2 className="  font-bold text-xl">Where to find us</h2>
                    <Link to="/contact">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Stockholm
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Gothenburg
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Västerås
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Malmö
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Uppsala
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Linköping
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Norrköping
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Mälardalen
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>

                </div>
                <div className="  col-span-1 flex flex-col gap-5">
                    <h2 className=" font-bold text-xl ">More information</h2>
                    {/* <Link to="mailto:intellsignals.entertainment@gmail.com">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Hemfrid App for iPhone
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link> */}
                    {/*   <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Hemfrid App for Android
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link> */}
                    {/*  <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Hemfrid's cleaning products
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link> */}
                    <Link to="/Deep_Clean">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Tips & inspiration
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Deep_Clean">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Life at Hemfrid
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Deep_Clean">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                About RUT
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Deep_Clean">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Sustainability
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Deep_Clean">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Our story
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                </div>

                <div className="col-span-1 flex flex-col gap-5">
                    <h2 className="font-bold text-xl">About us</h2>
                    <Link to="/Moving_Home">
                        <div className="relative inline-block group">
                            <span className="text-[#8c8c8c] font-semibold relative z-10 group-hover:text-red-500">
                                Phone: 010-555 85 00
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="https://mail.google.com/mail/u/0/#inbox">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                E-mail: info@hemfrid.se
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Moving_Home">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Partner
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Moving_Home">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Cleaning as salary benefit
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Moving_Home">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Careers
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Moving_Home">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Whistleblower
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Contact us
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Moving_Home">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                Media relations
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/Moving_Home">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                                FAQ’s
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="py-10 pl-2 w-full max-w-5xl text-white flex flex-wrap items-center ">
                <Link to={"/"}>
                    <img
                        src="/img/logo2.png"
                        alt="home"
                        className="w-40 h-auto hover:scale-95 transition duration-300 ease-in-out"
                    />
                </Link>
                <div
                    className="text-lg font-semibold rounded-lg py-3 px-4 ml-auto lg:mr-24 bg-sk hover:bg-sk1 transition duration-200"
                >
                    <Link to={'/contact'} >
                        <button type="submit">Book Now</button>
                    </Link>
                </div>

            </div>

            <div className="flex flex-col items-center w-full  pt-8  pb-3 bg-[#141617] gap-y-4 ">
                <div className="flex items-center gap-4">
                    <Link to="https://www.facebook.com/">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition-all duration-700">
                            <img src="/img/fa.png" alt="home" className="w-5 h-5" />
                        </div>
                    </Link>
                    <Link to="https://www.instagram.com">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                            <img src="/img/in.png" alt="home" className="w-5 h-5" />
                        </div>
                    </Link>
                    <Link to="https://www.linkedin.com">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                            <img src="/img/li.png" alt="home" className="w-5 h-5" />
                        </div>
                    </Link>
                    <Link to="https://x.com/">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                            <img src="/img/tw.png" alt="home" className="w-5 h-5" />
                        </div>
                    </Link>
                    <Link to="https://youtube.com/">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                            <img src="/img/yo.png" alt="home" className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
                <div className="relative w-full">
                    <p className="text-white text-center">
                        @copyright2023 FlyttStäd&Återvinning
                    </p>
                    <p
                        onClick={() => window.open("https://codezoone.netlify.app/")}
                        className="text-xs -mt-4 font-bold bg-white p-1 px-2 rounded-3xl relative md:absolute right-0 md:right-4 hover:cursor-pointer hover:font-bold text-center hover:bg-green-400 hover:text-white hover:scale-x-105 hover:duration-300"
                    >
                        <a href="https://codezoone.netlify.app/" target="_blank">
                            Developed By CodeZone
                        </a>
                    </p>
                </div>
            </div>
        </footer>

    );

}
export default Footer;