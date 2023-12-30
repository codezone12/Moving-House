import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { ZIPCODES } from "../../../Constants/Constant";

const Letus = () => {
    const [city, setCity] = useState("");
    const [code, setCode] = useState("");
    const zipcodeRef = useRef();
    const [hideInitialForm, setHideInitialForm] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [showSquareMeterInput, setShowSquareMeterInput] = useState(false);
    const [squareMeter, setSquareMeter] = useState("");
    const [show, setShow] = useState(false);
    const handleCitySelection = () => {
        setHideInitialForm(true);
    };
    const handleServiceSelect = (selectedService) => {
        setSelectedService(selectedService);
        setShowSquareMeterInput(true);
    };
    const navigate = useNavigate();
    const handleSquareMeterInputChange = (e) => {
        setSquareMeter(e.target.value);
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
    const handleRef = () => {
        zipcodeRef.current.focus();
    };

    const isButtonDisabled = !city || !code;


    return (

        <>
            {/* first content */}
            <div className=" bg-[#eae8e1] ">
                <div class="flex flex-col-reverse lg:flex-row items-center justify-between relative">
                    <div className="py-4 lg:ml-20 text-black text-5xl font-medium font-['Young Serif']  lg:ml-28  xl:ml-24  2xl:ml-36">
                        <p>Let us help you with </p>
                        <p class="  text-start mt-1 ">everyday life!</p>
                        {/*  <div className="flex justify-start w-full">
                        
                        </div>
                        <div className="flex justify-center items-center w-full bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md transform hover:scale-90 transition-transform delay-200">


                            <p className="text-center text-white hover:text-green-500">CHOOSE SERVICES</p>

                            <p className="text-center text-4xl  self-end absolute end-0 mr-4 "><svg height="20" viewBox="0 0 9 15" width="20" class="csw9N_C5 fiwAtSA" style={{ stroke: "#fff" }}   ><path d="m.958.995 6.51 6.51-6 6" fill="none" stroke-width="2"></path></svg></p>

                        </div> */}
                        <div>{!hideInitialForm && (
                            <>
                                {" "}
                                <div className="flex hover:shadow-lg hover:shadow-black text-lg font-bold hover:border-none hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
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
                                <div className="flex justify-center items-center  mt-4 p-5 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold  text-white rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
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
                                        className="flex-1 w-5/6  text-black text-lg p-4 rounded-lg placeholder-black font-bold cursor-pointer bg-opacity-90 transform transition-transform delay-200 hover:placeholder-gray-500"
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
                                        <div className="flex ">
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
                                    <div className="flex justify-center items-center  bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
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
                            )}</div>
                        <div className="text-xl mt-10 flex items-start font-normal">
                            <ul>
                                <li> <svg height="24" width="24" viewBox="0 0 24 24" color='white' class="uiyb_O3 cfwk5OWE inline-block  mr-2" style={{ fill: "black" }}><g><path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path><path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path></g></svg>       Customized for you  &nbsp;</li>
                                <li className="mt-4"> <svg height="24" width="24" viewBox="0 0 24 24" color='white' class="uiyb_O3 cfwk5OWE inline-block  mr-2" style={{ fill: "black" }}><g><path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path><path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path></g></svg>      Collective agreement</li>
                                <li className="mt-4 ">    <svg height="24" width="24" viewBox="0 0 24 24" color='white' class="uiyb_O3 cfwk5OWE inline-block mr-3" style={{ fill: "black" }}><g><path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path><path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path></g></svg>                Insured &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <img
                            src="img/img1.jpeg" />
                    </div>
                </div>
            </div>


            {/* second content */}

            <div className=" bg-[#d1dce7] ">


                <div class="flex flex-col lg:flex-row items-center justify-between relative">

                    <div class="w-full sm:w-1/2">
                        <img
                            src="img/img.jpeg" />                    </div>

                    <div className="text-start py-4 lg:pr-16 text-black text-5xl font-medium font-['Young Serif']  lg:ml-20  ">

                        <p className=" pt-2">How the RUT </p>

                        <p class="   m-1 text-green-500">deduction works</p>

                        <div className="text-base hover:scale-110 transition duration-500">
                            <p class="   mt-10 "   >It’s actually very simple. If you meet the conditions for RUT, you</p>
                            <p class="   mt-1 "  >only pay 50 percent of the labor cost. We give you quotes for our</p>
                            <p class="   mt-1 "  >services, and the prices for household services are always set</p>
                            <p class="   mt-1 "   >after RUT, so that it is easy for you to see how much the service</p>
                            <p class="   mt-1 "  >costs after the discount. When you receive the invoice, we will</p>
                            <p class="   mt-1 "  >arrange everything with the Swedish Tax Agency.</p>

                        </div>
                        <button className="mt-5 px-4 py-2 text-lg font-semibold rounded-lg overflow-hidden relative group cursor-pointer bg-[#044946]  hover:scale-105 duration-[700ms]">
                            <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-[#1fa299] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
                                FIND OUT MORE
                            </span>
                        </button>
                    </div>


                </div>



            </div>


        </>

    );


}

export default Letus;