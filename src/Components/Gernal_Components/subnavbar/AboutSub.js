import { IoIosArrowForward } from "react-icons/io";
import "./cleaningsub.css";
import { Link } from "react-router-dom";

const CleaningSub = ({ setisHover }) => {
  return (
    <div
      className="absolute w-full bg-gray-100 top-16 right-0 z-50 flex flex-col items-end transition-all duration-700"
      onMouseEnter={() => setisHover("About")}
      onMouseLeave={() => setisHover("")}
    >
      <div className="flex flex-col gap-y-10 px-24 py-8 w-1/2 ">
        <ul className="grid grid-cols-2 gap-8 text-xl">
          <Link
            to="/Home_clean"
            className="col-span-1 border-b-2 border-gr1 py-2 flex hover:border-rounded"
          >
            <li className="square-border hover:font-semibold">About Hemfrid</li>
            <IoIosArrowForward className="ml-auto w-7 h-7" />
          </Link>
          <Link
            to="/Window_clean"
            className="col-span-1 border-b-2 border-gr1 py-2 flex"
          >
            <li className="square-border hover:font-semibold">
            Life at Hemfrid
            </li>
            <IoIosArrowForward className="ml-auto w-7 h-7" />
          </Link>
          <Link
            to="/Deep_Clean"
            className="col-span-1 border-b-2 border-gr1 py-2 flex"
          >
            <li className="square-border hover:font-semibold">Our locations</li>
            <IoIosArrowForward className="ml-auto w-7 h-7" />
          </Link>
          <Link
            to="/Moving_Home"
            className="col-span-1 border-b-2 border-gr1 py-2 flex"
          >
            <li className="square-border hover:font-semibold">
            Work with us
            </li>
            <IoIosArrowForward className="ml-auto w-7 h-7" />
          </Link>
          <Link
            to="/contact"
            className="col-span-1 border-b-2 border-gr1 py-2 flex"
          >
            <li className="square-border hover:font-semibold">
            Contact us
            </li>
            <IoIosArrowForward className="ml-auto w-7 h-7" />
          </Link>
          <Link
            to="/Moving_Home"
            className="col-span-1 border-b-2 border-gr1 py-2 flex"
          >
            <li className="square-border hover:font-semibold">
            FAQ’s
            </li>
            <IoIosArrowForward className="ml-auto w-7 h-7" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CleaningSub;
