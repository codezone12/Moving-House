import { useRef, useState } from "react";
import { ZIPCODES } from "../../../Constants/Constant";
import { useNavigate } from "react-router";
const Hero = () => {
  const [text, setText] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);
  const zipcodeRef = useRef();
  const handleRef = () => {
    zipcodeRef.current.focus();
  };
  const handleInputChange = (e) => {
    const filteredCity = ZIPCODES.filter(
      (item) => item?.zipcode == e.target.value
    );
    if (filteredCity.length > 0) {
      setCode(e.target.value);
      setCity(filteredCity[0]?.city);
      setShow(true);
    } else {
      setCode(e.target.value);
      setShow(false);
    }
  };
  const isButtonDisabled = !city || !code;
  const navigate = useNavigate();
  const handleNavigate = () => {
    // Add your logic here for handling the navigation
    navigate("/Booking", {
      state: {
        data: {
          city,
        },
      },
    });
  };

  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage:
          "url('https://images.ctfassets.net/37vwfxlcawdb/46LQQCY2RWA0EiWBlFxQyR/54772a23ef600af281aecae28cdd5160/home-cleaning1.jpg?q=50&fm=avif&w=1200')",
      }}
    >
      <div className=" mr-auto pt-48 md:px-28 px-10 text-white text-5xl font-medium font-['Young Serif'] ">
        <div className="hover:text-gray-600 ">
          <p className="text-start">Get a routine for</p>

          <p class="  text-start mt-1 ">
            your{" "}
            <span className="text-yellow-300">
              Home <span className="text-orange-600">Cleaning</span>
            </span>
          </p>
          {/* <p class="  text-start mt-1 "><span className="text-orange-400">Cleaning</span></p> */}
        </div>
        {/* <div className="flex justify-start  w-1/2 md:w-2/5">
                    <input className="bg-white focus:border-none focus:outline-none w-full text-black text-center text-lg p-3 rounded-md mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 hover:shadow-lg hover:shadow-black hover:bg-white transform hover:scale-90 transition-transform delay-200 hover:placeholder-gray-500" placeholder="ENTER ZIPCODE" />
                </div>
                <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">

                    <p className="text-center text-['#fff'] ">CONTINUE</p>




                </div> */}
        <div className="flex w-1/2 md:w-2/5 hover:shadow-lg hover:shadow-black text-lg font-bold hover:border-none hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
          <input
            className="flex-1 bg-white focus:border-none focus:outline-none text-black text-right text-lg p-3 rounded-l-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
            type="number"
            placeholder="ENTER ZIPCODE"
            value={code}
            ref={zipcodeRef}
            onChange={handleInputChange}
          />

          <div
            onClick={handleRef}
            className="flex-1 flex items-center justify-between bg-white focus:border-none focus:outline-none text-black text-lg p-3 rounded-r-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
          >
            {show && city && (
              <>
                <p className="text-left">{city} </p>
                <p>
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    class="fcNb"
                    style={{ fill: "green" }}
                  >
                    <g>
                      <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                      <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                    </g>
                  </svg>
                </p>
              </>
            )}
          </div>
        </div>
        <button
          disabled={isButtonDisabled}
          onClick={handleNavigate}
          className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200"
        >
          <p className="text-center text-['#fff']">CONTINUE </p>
        </button>
        <div className="text-xl mt-10 flex items-start font-normal">
          <div className="mt-5">
            <div class="flex items-center">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                color="white"
                class="uiyb_O3 cfwk5OWE"
                style={{ fill: "white" }}
                className="hover:shake hover:border-yellow-400"
              >
                <g>
                  <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                  <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                </g>
              </svg>
              <p class="ml-2">
                <span className="animate-bounce text-gray-200 font-bold">
                  Right Now!
                </span>
                <span className="text-orange-200 font-bold ml-2 mr-1">50%</span>
              </p>
              <p> discount on your first invoice</p>
            </div>
            <div className="my-6 text-base text-start">
              <p>
                Use the code{" "}
                <span className="font-bold text-black text-lg">OKT50</span> to
                activate the offer.
              </p>
            </div>

            <div className="my-6 text-lg text-start hover:shake">
              <i>
                <span className="font-bold text-black">Terms:</span>Offer valid
                for new customers only. Your first home <br /> cleaning must be
                done no later than November 30,2023. <br />
                The discount cannot be combined with other promotions or offer.{" "}
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
