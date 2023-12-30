import React, { useEffect, useRef, useState } from "react";
import { ZIPCODES } from "../../../Constants/Constant";
import Booking from "../../Booking/Booking";
import { useNavigate } from "react-router";
import Image1 from "../../../../Assets/images/New Images/Cleaning_9.jpeg";
import Image2 from "../../../../Assets/images/New Images/Moving_8.jpeg";
import Image3 from "../../../../Assets/images/New Images/Cleaning_3.jpeg";
import Image4 from "../../../../Assets/images/New Images/Cleaning_6.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// const silderImages = [Image1, Image2, Image3, Image4];
const Hero = () => {
  const [text, setText] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const phrases = [" Home", " Deep", " Window", " Move out"];
  const [show, setShow] = useState(false);
  const [hideInitialForm, setHideInitialForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showSquareMeterInput, setShowSquareMeterInput] = useState(false);
  const [squareMeter, setSquareMeter] = useState("");
  const zipcodeRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let currentIndex = 0;
  const colorMapping = {
    " Home": "white",
    " Deep": "indigo",
    " Window": "gray",
    " Move out": "pink",
  };

  useEffect(() => {
    const typeText = () => {
      if (currentIndex < phrases.length) {
        setText(phrases[currentIndex]);
        currentIndex++;
      } else {
        currentIndex = 0;
        setText(phrases[currentIndex]);
        currentIndex++;
      }
    };

    const interval = setInterval(typeText, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const enteredZipCode = e.target.value;
    const isValidZipCode = /^[0-9]{1,5}$/.test(enteredZipCode);
    const filteredCity = ZIPCODES.filter(
      (item) => item?.zipcode == enteredZipCode
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

  const textColor = colorMapping[text] || "black";
  const navigate = useNavigate();

  const handleCitySelection = () => {
    setHideInitialForm(true);
  };

  const handleServiceSelect = (selectedService) => {
    setSelectedService(selectedService);
    setShowSquareMeterInput(true);
  };

  const handleSquareMeterInputChange = (e) => {
    setSquareMeter(e.target.value);
  };
  const handleRef = () => {
    zipcodeRef.current.focus();
  };
  const handleNavigate = () => {
    let route = "/Booking"; // Default route for Home Cleaning

    switch (selectedService) {
      case "Home Cleaning":
        route = "/Booking";
        break;
      case "Window Cleaning":
        route = "/window_cleaning";
        break;
      case "Deep Cleaning":
        route = "/deep_cleaning";
        break;
      case "Move Out Cleaning":
        route = "/moving_service";
        break;
      default:
        // Default to /Booking if the selected service is not recognized
        route = "/Booking";
    }

    navigate(route, {
      state: {
        data: {
          city,
          selectedService,
          squareMeter,
        },
      },
    });
  };

  const isButtonDisabled = !city || !code;
  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        // loop={true}

        navigation={{
          prevEl: ".prevButton_swiper",
          nextEl: ".nextButton_swiper",

        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div
            className="bg-cover"
            style={{
              backgroundImage: `url(${Image1})`,
            }}
          >
            <div className="text-start mr-auto pt-40 md:px-28 px-10 text-white text-5xl font-medium font-['Young Serif'] ">
              {/* <p className="">
                More <span className="text-yellow-500">quality of</span>
              </p>
              <p className=" mt-1">
                <span className="text-yellow-500">life</span> this fall
              </p> */}
              <span
                className="text-left font-bold"
                style={{ color: colorMapping[text] || "black" }}
              >
                {text}
              </span>
              <div className="">
                <span className="text-green-600">Cleaning</span>
              </div>
              {!hideInitialForm && (
                <>
                  {" "}
                  <div className="fixed-input-container flex w-1/2 md:w-2/5 hover:shadow-lg hover:shadow-black text-lg font-bold hover:border-none hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <input
                      className="flex-1 bg-white focus:border-none focus:outline-none text-black text-right text-lg p-3 rounded-l-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                      type="number"
                      placeholder="ENTER ZIPCODE"
                      value={code}
                      maxLength="5"
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
                  <div
                    className="w-2/5 border-0"
                    style={{ marginTop: "-10px" }}
                  >
                    {!show && code.length >= 1 && code.length <= 4 && (
                      <p className="text-red-500 text-xs text-center mt-2">
                        This is not a valid zip code.
                      </p>
                    )}

                    {!show && code.length === 5 && (
                      <p className="text-red-500 text-xs text-center mt-2">
                        Unfortunately, none of our services are available in the
                        area.
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <button
                      className={`text-center text-['#fff']`}
                      onClick={handleCitySelection}
                      disabled={isButtonDisabled}
                    >
                      CHOOSE SERVICES
                    </button>
                    <p className="text-center text-4xl  self-end absolute end-0 mr-4 ">
                      <svg
                        height="20"
                        viewBox="0 0 9 15"
                        width="20"
                        class="csw9N_C5 fiwAtSA"
                        style={{ stroke: "#fff" }}
                      >
                        <path
                          d="m.958.995 6.51 6.51-6 6"
                          fill="none"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </>
              )}
              {hideInitialForm && (
                <div>
                  <select
                    value={selectedService}
                    onChange={(e) => handleServiceSelect(e.target.value)}
                    className="flex-1 w-2/5 text-black text-lg p-3 rounded-lg placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Home Cleaning">Home Cleaning</option>
                    <option value="Window Cleaning">Window Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Move Out Cleaning">Move Out Cleaning</option>
                  </select>
                  {showSquareMeterInput && (
                    <div className="flex w-1/2 md:w-2/5">
                      <input
                        type="number"
                        value={squareMeter}
                        onChange={handleSquareMeterInputChange}
                        className="flex-1 bg-white focus:border-none focus:outline-none text-black text-right text-lg p-3 rounded-l-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                        placeholder="Enter Square Meter"
                      />

                      <div className="flex-1 flex items-center justify-between bg-white focus:border-none focus:outline-none text-black text-lg p-3 rounded-r-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500">
                        {squareMeter && (
                          <>
                            <p className="text-left"> sqm </p>
                            <p className="text-right">
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
                  )}
                  <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <button
                      className={`text-center text-['#fff']`}
                      onClick={handleNavigate}
                      disabled={!selectedService || !squareMeter}
                    >
                      CHOOSE SERVICES
                    </button>
                    <p className="text-center text-4xl  self-end absolute end-0 mr-4 ">
                      <svg
                        height="20"
                        viewBox="0 0 9 15"
                        width="20"
                        class="csw9N_C5 fiwAtSA"
                        style={{ stroke: "#fff" }}
                      >
                        <path
                          d="m.958.995 6.51 6.51-6 6"
                          fill="none"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </div>
              )}
              <div className="text-2xl mt-10 pb-8 flex items-start font-normal">
                {/* <ul>
                  <li className="">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block  mr-2"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Customized for you &nbsp;
                  </li>
                  <li className="mt-4">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block  mr-2"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Collective agreement
                  </li>
                  <li className="mt-4 ">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block mr-3"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Insured &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp;
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="bg-cover"
            style={{
              backgroundImage: `url(${Image2})`,
            }}
          >
            <div className="text-start mr-auto pt-40 md:px-28 px-10 text-white text-5xl font-medium font-['Young Serif'] ">
              {/* <p className="">
                More <span className="text-yellow-500">quality of</span>
              </p>
              <p className=" mt-1">
                <span className="text-yellow-500">life</span> this fall
              </p> */}
              <span
                className="text-left font-bold"
                style={{ color: colorMapping[text] || "black" }}
              >
                {text}
              </span>
              <div className="">
                <span className="text-green-600">Cleaning</span>
              </div>
              {!hideInitialForm && (
                <>
                  {" "}
                  <div className="flex w-1/2 md:w-2/5  hover:shadow-black text-lg font-bold hover:border-none hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <input
                      className="flex-1 bg-white focus:border-none focus:outline-none text-black text-right text-lg p-3 rounded-l-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                      type="number"
                      placeholder="ENTER ZIPCODE"
                      value={code}
                      maxLength="5"
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
                  <div
                    className="w-2/5 border-0"
                    style={{ marginTop: "-10px" }}
                  >
                    {!show && code.length >= 1 && code.length <= 4 && (
                      <p className="text-red-500 text-xs text-center mt-2">
                        This is not a valid zip code.
                      </p>
                    )}

                    {!show && code.length === 5 && (
                      <p className="text-red-500 text-xs text-center mt-2">
                        Unfortunately, none of our services are available in the
                        area.
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <button
                      className={`text-center text-['#fff']`}
                      onClick={handleCitySelection}
                      disabled={isButtonDisabled}
                    >
                      CHOOSE SERVICES
                    </button>
                    <p className="text-center text-4xl  self-end absolute end-0 mr-4 ">
                      <svg
                        height="20"
                        viewBox="0 0 9 15"
                        width="20"
                        class="csw9N_C5 fiwAtSA"
                        style={{ stroke: "#fff" }}
                      >
                        <path
                          d="m.958.995 6.51 6.51-6 6"
                          fill="none"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </>
              )}
              {hideInitialForm && (
                <div>
                  <select
                    value={selectedService}
                    onChange={(e) => handleServiceSelect(e.target.value)}
                    className="flex-1 w-2/5 text-black text-lg p-3 rounded-lg placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Home Cleaning">Home Cleaning</option>
                    <option value="Window Cleaning">Window Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Move Out Cleaning">Move Out Cleaning</option>
                  </select>
                  {showSquareMeterInput && (
                    <div className="flex w-1/2 md:w-2/5">
                      <input
                        type="number"
                        value={squareMeter}
                        onChange={handleSquareMeterInputChange}
                        className="flex-1 bg-white focus:border-none focus:outline-none text-black text-right text-lg p-3 rounded-l-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                        placeholder="Enter Square Meter"
                      />

                      <div className="flex-1 flex items-center justify-between bg-white focus:border-none focus:outline-none text-black text-lg p-3 rounded-r-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500">
                        {squareMeter && (
                          <>
                            <p className="text-left"> sqm </p>
                            <p className="text-right">
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
                  )}
                  <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <button
                      className={`text-center text-['#fff']`}
                      onClick={handleNavigate}
                      disabled={!selectedService || !squareMeter}
                    >
                      CHOOSE SERVICES
                    </button>
                    <p className="text-center text-4xl  self-end absolute end-0 mr-4 ">
                      <svg
                        height="20"
                        viewBox="0 0 9 15"
                        width="20"
                        class="csw9N_C5 fiwAtSA"
                        style={{ stroke: "#fff" }}
                      >
                        <path
                          d="m.958.995 6.51 6.51-6 6"
                          fill="none"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </div>
              )}
              <div className="text-2xl mt-10 pb-8 flex items-start font-normal">
                {/* <ul>
                  <li className="">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block  mr-2"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Customized for you &nbsp;
                  </li>
                  <li className="mt-4">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block  mr-2"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Collective agreement
                  </li>
                  <li className="mt-4 ">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block mr-3"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Insured &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp;
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="bg-cover"
            style={{
              backgroundImage: `url(${Image3})`,
            }}
          >
            <div className="text-start mr-auto pt-40 md:px-28 px-10 text-white text-5xl font-medium font-['Young Serif'] ">
              {/* <p className="">
                More <span className="text-yellow-500">quality of</span>
              </p>
              <p className=" mt-1">
                <span className="text-yellow-500">life</span> this fall
              </p> */}
              <span
                className="text-left font-bold"
                style={{ color: colorMapping[text] || "black" }}
              >
                {text}
              </span>
              <div className="">
                <span className="text-green-600">Cleaning</span>
              </div>
              {!hideInitialForm && (
                <>
                  {" "}
                  <div className="flex w-1/2 md:w-2/5  hover:shadow-black text-lg font-bold hover:border-none hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <input
                      className="flex-1 bg-white focus:border-none focus:outline-none text-black text-right text-lg p-3 rounded-l-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                      type="number"
                      placeholder="ENTER ZIPCODE"
                      value={code}
                      maxLength="5"
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
                  <div
                    className="w-2/5 border-0"
                    style={{ marginTop: "-10px" }}
                  >
                    {!show && code.length >= 1 && code.length <= 4 && (
                      <p className="text-red-500 text-xs text-center mt-2">
                        This is not a valid zip code.
                      </p>
                    )}

                    {!show && code.length === 5 && (
                      <p className="text-red-500 text-xs text-center mt-2">
                        Unfortunately, none of our services are available in the
                        area.
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <button
                      className={`text-center text-['#fff']`}
                      onClick={handleCitySelection}
                      disabled={isButtonDisabled}
                    >
                      CHOOSE SERVICES
                    </button>
                    <p className="text-center text-4xl  self-end absolute end-0 mr-4 ">
                      <svg
                        height="20"
                        viewBox="0 0 9 15"
                        width="20"
                        class="csw9N_C5 fiwAtSA"
                        style={{ stroke: "#fff" }}
                      >
                        <path
                          d="m.958.995 6.51 6.51-6 6"
                          fill="none"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </>
              )}
              {hideInitialForm && (
                <div>
                  <select
                    value={selectedService}
                    onChange={(e) => handleServiceSelect(e.target.value)}
                    className="flex-1 w-2/5 text-black text-lg p-3 rounded-lg placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Home Cleaning">Home Cleaning</option>
                    <option value="Window Cleaning">Window Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Move Out Cleaning">Move Out Cleaning</option>
                  </select>
                  {showSquareMeterInput && (
                    <div className="flex w-1/2 md:w-2/5">
                      <input
                        type="number"
                        value={squareMeter}
                        onChange={handleSquareMeterInputChange}
                        className="flex-1 bg-white focus:border-none focus:outline-none text-black text-right text-lg p-3 rounded-l-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                        placeholder="Enter Square Meter"
                      />

                      <div className="flex-1 flex items-center justify-between bg-white focus:border-none focus:outline-none text-black text-lg p-3 rounded-r-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500">
                        {squareMeter && (
                          <>
                            <p className="text-left"> sqm </p>
                            <p className="text-right">
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
                  )}
                  <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <button
                      className={`text-center text-['#fff']`}
                      onClick={handleNavigate}
                      disabled={!selectedService || !squareMeter}
                    >
                      CHOOSE SERVICES
                    </button>
                    <p className="text-center text-4xl  self-end absolute end-0 mr-4 ">
                      <svg
                        height="20"
                        viewBox="0 0 9 15"
                        width="20"
                        class="csw9N_C5 fiwAtSA"
                        style={{ stroke: "#fff" }}
                      >
                        <path
                          d="m.958.995 6.51 6.51-6 6"
                          fill="none"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </div>
              )}
              <div className="text-2xl mt-10 pb-8 flex items-start font-normal">
                {/* <ul>
                  <li className="">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block  mr-2"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Customized for you &nbsp;
                  </li>
                  <li className="mt-4">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block  mr-2"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Collective agreement
                  </li>
                  <li className="mt-4 ">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block mr-3"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Insured &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp;
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="bg-cover"
            style={{
              backgroundImage: `url(${Image4})`,
            }}
          >
            <div className="text-start mr-auto pt-40 md:px-28 px-10 text-white text-5xl font-medium font-['Young Serif'] ">
              {/* <p className="">
                More <span className="text-yellow-500">quality of</span>
              </p>
              <p className=" mt-1">
                <span className="text-yellow-500">life</span> this fall
              </p> */}
              <span
                className="text-left font-bold"
                style={{ color: colorMapping[text] || "black" }}
              >
                {text}
              </span>
              <div className="">
                <span className="text-green-600">Cleaning</span>
              </div>
              {!hideInitialForm && (
                <>
                  {" "}
                  <div className="flex w-1/2 md:w-2/5  hover:shadow-black text-lg font-bold hover:border-none hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <input
                      className="flex-1 bg-white focus:border-none focus:outline-none text-black text-right text-lg p-3 rounded-l-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                      type="number"
                      placeholder="ENTER ZIPCODE"
                      value={code}
                      maxLength="5"
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
                  <div
                    className="w-2/5 border-0"
                    style={{ marginTop: "-10px" }}
                  >
                    {!show && code.length >= 1 && code.length <= 4 && (
                      <p className="text-red-500 text-xs text-center mt-2">
                        This is not a valid zip code.
                      </p>
                    )}

                    {!show && code.length === 5 && (
                      <p className="text-red-500 text-xs text-center mt-2">
                        Unfortunately, none of our services are available in the
                        area.
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <button
                      className={`text-center text-['#fff']`}
                      onClick={handleCitySelection}
                      disabled={isButtonDisabled}
                    >
                      CHOOSE SERVICES
                    </button>
                    <p className="text-center text-4xl  self-end absolute end-0 mr-4 ">
                      <svg
                        height="20"
                        viewBox="0 0 9 15"
                        width="20"
                        class="csw9N_C5 fiwAtSA"
                        style={{ stroke: "#fff" }}
                      >
                        <path
                          d="m.958.995 6.51 6.51-6 6"
                          fill="none"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </>
              )}
              {hideInitialForm && (
                <div>
                  <select
                    value={selectedService}
                    onChange={(e) => handleServiceSelect(e.target.value)}
                    className="flex-1 w-2/5 text-black text-lg p-3 rounded-lg placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Home Cleaning">Home Cleaning</option>
                    <option value="Window Cleaning">Window Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Move Out Cleaning">Move Out Cleaning</option>
                  </select>
                  {showSquareMeterInput && (
                    <div className="flex w-1/2 md:w-2/5">
                      <input
                        type="number"
                        value={squareMeter}
                        onChange={handleSquareMeterInputChange}
                        className="flex-1 bg-white focus:border-none focus:outline-none text-black text-right text-lg p-3 rounded-l-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
                        placeholder="Enter Square Meter"
                      />

                      <div className="flex-1 flex items-center justify-between bg-white focus:border-none focus:outline-none text-black text-lg p-3 rounded-r-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500">
                        {squareMeter && (
                          <>
                            <p className="text-left"> sqm </p>
                            <p className="text-right">
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
                  )}
                  <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
                    <button
                      className={`text-center text-['#fff']`}
                      onClick={handleNavigate}
                      disabled={!selectedService || !squareMeter}
                    >
                      CHOOSE SERVICES
                    </button>
                    <p className="text-center text-4xl  self-end absolute end-0 mr-4 ">
                      <svg
                        height="20"
                        viewBox="0 0 9 15"
                        width="20"
                        class="csw9N_C5 fiwAtSA"
                        style={{ stroke: "#fff" }}
                      >
                        <path
                          d="m.958.995 6.51 6.51-6 6"
                          fill="none"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </div>
              )}
              <div className="text-2xl mt-10 pb-8 flex items-start font-normal">
                {/* <ul>
                  <li className="">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block  mr-2"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Customized for you &nbsp;
                  </li>
                  <li className="mt-4">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block  mr-2"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Collective agreement
                  </li>
                  <li className="mt-4 ">
                    {" "}
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      color="white"
                      class="uiyb_O3 cfwk5OWE inline-block mr-3"
                      style={{ fill: "white" }}
                    >
                      <g>
                        <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                        <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                      </g>
                    </svg>{" "}
                    Insured &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp;
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
