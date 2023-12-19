import { useState } from "react";
import { Link } from "react-router-dom";
import CleaningSub from "./subnavbar/CleaningSub";
import MovingSub from "./subnavbar/MovingSub";
import AboutSub from "./subnavbar/AboutSub";
const Navbar = () => {
  const [isHover, setisHover] = useState("");
  const names = [
    "Cleaning",
    "Moving",
    "Gardening",
    "More Services",
    "More Bussiness",
    "Our locations",
    "About Hemrfied",
  ];
  return (
    <>
      <nav className="w-screen bg-[#FFF] h-[75px] mt-[.3px] z-50  flex items-center px-5   justify-between fixed">
        <Link to="/" className="cursor-pointer">
          <img
            src="/img/logo2.png"
            className="custom-height-18 bg-[#FFF] hover:scale-95 transition duration-300 ease-in-out"
            alt=""
            srcSet=""
          />
        </Link>

        {/* <ul className="hidden lg:flex  cursor-pointer mr-16  lg:text-lg lg:ml-3 xl:text-lg 2xl:text-xl    md:text-sm pr-9 relative">
                    {names.map((item, i) => (
                        <li
                            onMouseEnter={() => setisHover(item)}
                            onMouseLeave={() => setisHover("")}
                            className=" flex relative  py-3  ">
                            <p className="mx-4 py-2 w-fit xl:mx-4 transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r      before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700  ">
                                {item}</p>
                            <BiSolidDownArrow className="w-5 h-5 " />
                        </li>
                    ))}
                </ul> */}
        <ul className="hidden lg:flex cursor-pointer mr-16   lg:text-lg lg:ml-3 xl:text-lg 2xl:text-xl    md:text-sm pr-9 relative">
          <p
            onMouseEnter={() => setisHover("Cleaning")}
            onMouseLeave={() => setisHover("")}
            className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r      before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700 hover:font-semibold "
          >
            <li className="mx-4 w-fit xl:mx-4   2xl:mx-4">Cleaning</li>
          </p>
          <p
            onMouseEnter={() => setisHover("Moving")}
            onMouseLeave={() => setisHover("")}
            className="inline-block relative  py-3 2xl:mx-4"
          >
            <li className="mx-4 xl:mx-4  2xl:mx-8 transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700 hover:font-semibold">
              Moving
            </li>
          </p>
          <p className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700 hover:font-semibold">
            <li className="mx-4 xl:mx-4 2xl:mx-4 inline-block ">Gardening</li>
          </p>
          <p className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700 hover:font-semibold">
            <li className="mx-2 xl:mx-3 2xl:mx-4 inline-block  ">
              More Services
            </li>
          </p>

          <p className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700 hover:font-semibold">
            <li
              className="mx-2 xl:mx-3
                         2xl:mx-4 inline-block  "
            >
              More Bussiness
            </li>
          </p>
          <p className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700 hover:font-semibold">
            <li className="mx-2 xl:mx-3 2xl:mx-4 inline-block  ">
              Our locations
            </li>
          </p>

          <p
            onMouseEnter={() => setisHover("About")}
            onMouseLeave={() => setisHover("")}
            className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700 hover:font-semibold"
          >
            <li className="mx-2 ">About Hemrfied</li>
          </p>
        </ul>

        {isHover && isHover === "Cleaning" && (
          <CleaningSub setisHover={setisHover} />
        )}
        {isHover && isHover === "About" && <AboutSub setisHover={setisHover} />}
        {isHover && isHover === "Moving" && (
          <MovingSub setisHover={setisHover} />
        )}

        <div className="lg:flex items-center mr-3   hidden  2xl:text-2xl">
          <p className="cursor-pointer inline-block  mx-2">SV </p>

          <div className="inline-block border-r border-zinc-400   h-12 mx-2"></div>

          <p className="cursor-pointer  inline-block font-[700] border-opacity-[0.2] mx-2  ">
            EN
          </p>
        </div>

        <div class="lg:hidden text-5xl cursor-pointer mr-8">
          <p href="#">&#8801;</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
