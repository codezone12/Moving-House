import React, { useState } from "react";

const MoveForm = () => {
  const [moveFromResidence, setMoveFromResidence] = useState("villa");
  const [moveToResidence, setMoveToResidence] = useState("villa");
  const [streetFrom, setStreetFrom] = useState("");
  const [streetTo, setStreetTo] = useState("");
  const [desc, setDesc] = useState("");
  const handleMoveFromResidenceChange = (value) => {
    setMoveFromResidence(value);
    // Additional logic if needed
  };

  const handleMoveToResidenceChange = (value) => {
    setMoveToResidence(value);
    // Additional logic if needed
  };
const handleSubmit = () => {
    console.log('Hello');
}
  const radioStyle =
    "w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center";

  return (
    <div
      className="container mx-auto my-auto pt-10 mb-20"
      style={{ maxWidth: "70%" }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "70% 30%", gap: "30px" }}
      >
        <div>
          <div
            className="pt-20 font-normal text-5xl"
            style={{ fontFamily: "Tiempos Headline,serif" }}
          >
            Moving service
          </div>
          <div className="w-full mt-8  flex justify-center items-center mb-5">
            <p className=" border-black border w-20 text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100"></p>
          </div>
          <div>
            <p className="text-2xl ms-1 font-semibold text-left my-2">
              Moving From
            </p>
            <div className="my-6">
              <label
                className="text-xl ms-1 flex justify-left font-semibold text-left my-2"
                style={{
                  fontFamily:
                    "Atlas Grotesk,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                }}
              >
                Street*
              </label>

              <input
                value={streetFrom}
                onChange={(e) => setStreetFrom(e.target.value)}
                type="text"
                id="streetFrom"
                name="streetFrom"
                className="w-full border rounded-md py-5 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
              />
            </div>
            <label
              className="text-xl ms-1 flex justify-left font-semibold text-left my-2 mt-4"
              style={{
                fontFamily:
                  "Atlas Grotesk,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
              }}
            >
              Type of residence*
            </label>
            <div className="border rounded-md mb-4 p-5 border-[#d5d2c4] bg-[#FFFFFF]">
              {/* Villa/Terraced house */}
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="villaMoveFrom"
                  className="cursor-pointer flex items-center justify-between w-full"
                >
                  <p className="text-xl font-normal">Villa/Terraced house</p>
                  <div
                    className={`${radioStyle} ${
                      moveFromResidence === "villa" ? "bg-black" : "bg-white"
                    }`}
                  >
                    {moveFromResidence === "villa" && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    )}
                  </div>
                </label>
                <input
                  type="radio"
                  id="villaMoveFrom"
                  name="moveFromResidence"
                  checked={moveFromResidence === "villa"}
                  onChange={() => handleMoveFromResidenceChange("villa")}
                  className="hidden"
                />
              </div>
              <div className="w-full my-4 flex justify-center items-center">
                <p className=" border-gray-200 border w-full text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100"></p>
              </div>
              {/* Apartment */}
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="apartmentMoveFrom"
                  className="cursor-pointer flex items-center justify-between w-full"
                >
                  <p className="text-xl font-normal">Apartment</p>
                  <div
                    className={`${radioStyle} ${
                      moveFromResidence === "apartment"
                        ? "bg-black"
                        : "bg-white"
                    }`}
                  >
                    {moveFromResidence === "apartment" && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    )}
                  </div>
                </label>
                <input
                  type="radio"
                  id="apartmentMoveFrom"
                  name="moveFromResidence"
                  checked={moveFromResidence === "apartment"}
                  onChange={() => handleMoveFromResidenceChange("apartment")}
                  className="hidden"
                />
              </div>
              <div className="w-full my-4 flex justify-center items-center">
                <p className=" border-gray-200 border w-full text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100"></p>
              </div>
              {/* Storage unit */}
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="storageMoveFrom"
                  className="cursor-pointer flex items-center justify-between w-full"
                >
                  <p className="text-xl font-normal">Storage unit</p>
                  <div
                    className={`${radioStyle} ${
                      moveFromResidence === "storage" ? "bg-black" : "bg-white"
                    }`}
                  >
                    {moveFromResidence === "storage" && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    )}
                  </div>
                </label>
                <input
                  type="radio"
                  id="storageMoveFrom"
                  name="moveFromResidence"
                  checked={moveFromResidence === "storage"}
                  onChange={() => handleMoveFromResidenceChange("storage")}
                  className="hidden"
                />
              </div>
            </div>
          </div>
          <div className="w-full my-8 flex justify-center items-center">
                <p className=" border-gray-300 border mx-2 w-full text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100"></p>
              </div>
          {/* Moving To Section */}
          <div>
            <p className="text-2xl ms-1 font-semibold text-left my-2 mt-3">
              Moving To
            </p>
            <div className="my-6">
              <label
                className="text-xl ms-1 flex justify-left font-semibold text-left my-2"
                style={{
                  fontFamily:
                    "Atlas Grotesk,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                }}
              >
                Street*
              </label>

              <input
                value={streetTo}
                onChange={(e) => setStreetTo(e.target.value)}
                type="text"
                id="streetTo"
                name="streetTo"
                className="w-full border rounded-md py-5 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
              />
            </div>
            <label
              className="text-xl ms-1 flex justify-left font-semibold text-left my-2 mt-4"
              style={{
                fontFamily:
                  "Atlas Grotesk,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
              }}
            >
              Type of residence*
            </label>

            {/* Villa/Terraced house */}
            <div className="border rounded-md mb-4 p-5 border-[#d5d2c4] bg-[#FFFFFF]">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="villaMoveTo"
                  className="cursor-pointer flex items-center justify-between w-full"
                >
                  <p className="text-xl font-normal">Villa/Terraced house</p>
                  <div
                    className={`${radioStyle} ${
                      moveToResidence === "villa" ? "bg-black" : "bg-white"
                    }`}
                  >
                    {moveToResidence === "villa" && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    )}
                  </div>
                </label>
                <input
                  type="radio"
                  id="villaMoveTo"
                  name="moveToResidence"
                  checked={moveToResidence === "villa"}
                  onChange={() => handleMoveToResidenceChange("villa")}
                  className="hidden"
                />
              </div>
              <div className="w-full my-4 flex justify-center items-center">
                <p className=" border-gray-200 border w-full text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100"></p>
              </div>
              {/* Apartment */}
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="apartmentMoveTo"
                  className="cursor-pointer flex items-center justify-between w-full"
                >
                  <p className="text-xl font-normal">Apartment</p>
                  <div
                    className={`${radioStyle} ${
                      moveToResidence === "apartment" ? "bg-black" : "bg-white"
                    }`}
                  >
                    {moveToResidence === "apartment" && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    )}
                  </div>
                </label>
                <input
                  type="radio"
                  id="apartmentMoveTo"
                  name="moveToResidence"
                  checked={moveToResidence === "apartment"}
                  onChange={() => handleMoveToResidenceChange("apartment")}
                  className="hidden"
                />
              </div>
              <div className="w-full my-4 flex justify-center items-center">
                <p className=" border-gray-200 border w-full text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100"></p>
              </div>
              {/* Storage unit */}
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="storageMoveTo"
                  className="cursor-pointer flex items-center justify-between w-full"
                >
                  <p className="text-xl font-normal">Storage unit</p>
                  <div
                    className={`${radioStyle} ${
                      moveToResidence === "storage" ? "bg-black" : "bg-white"
                    }`}
                  >
                    {moveToResidence === "storage" && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    )}
                  </div>
                </label>
                <input
                  type="radio"
                  id="storageMoveTo"
                  name="moveToResidence"
                  checked={moveToResidence === "storage"}
                  onChange={() => handleMoveToResidenceChange("storage")}
                  className="hidden"
                />
              </div>
            </div>
            <div>
            <p className="text-2xl ms-1 font-semibold text-left my-2 mt-4">
            Describe your move
            </p>
            <p className="text-xl ms-1 font-normal text-left italic my-2 mt-3">
            Here we want you to briefly describe your move and especially mention things you believe might affect the duration.
            </p>
            <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                type="text"
                id="desc"
                name="desc"
                className="w-full border my-5 rounded-md py-5 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
              />
                 <button
                                className="bg-black hover:bg-black text-white font-bold py-4 px-20 rounded relative group overflow-hidden"
                                onClick={handleSubmit}
                            >
                                  <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
                          
                                Next
                                </span>
                            </button>
                            <p className="text-sm mt-4">*Fill these fields to continue</p>
          </div>
          </div>
        </div>
        <div
          className="mt-20 pb-5"
          style={{
            backgroundColor: "#d1dce7",
            width: "300px",
            height: "fit-content",
          }}
        >
          <div className="flex-col mt-5 px-5">
            <p
              className="text-2xl text-normal text-[#003b5c] text-left"
              style={{ fontFamily: "Tiempos Headline,serif" }}
            >
              Your inquiry
            </p>
          </div>
          <div className="mt-5 px-5">
            <p className="text-lg font-bold text-[#003b5c] text-left flex-1">
            Moving from
            </p>
            <p className="text-lg text-normal text-[#003b5c] text-left flex-1">
            123 54, Farsta
            </p>
          </div>
          <div className="mt-5 px-5">
            <p className="text-lg font-bold text-[#003b5c] text-left flex-1">
            Moving To
            </p>
            <p className="text-lg text-normal text-[#003b5c] text-left flex-1">
            123 54, Farsta
            </p>
          </div>
          <div className="w-full mt-3 flex justify-center px-5 items-center mb-5">
            <p className=" border-[#003b5c] border opacity-10 w-full text-center "></p>
          </div>
          <div className="mt-2 px-5">
            <p className="text-xl font-semibold text-[#003b5c] text-left">
            Moving date
            </p>
            <p className="text-xl text-left font-semibold">-</p>
          </div>
          <div className="mt-2 px-5">
            <p className="text-xl font-semibold text-[#003b5c] text-left">
            Moving Out cleaning
            </p>
            <p className="text-xl text-left font-semibold">-</p>
          </div>
          <div className="w-full mt-3 flex justify-center px-5 items-center mb-5">
            <p className=" border-[#003b5c] border opacity-10 w-full text-center "></p>
          </div>
          <p
              className="text-normal text-normal text-[#003b5c] px-1 bg-white border text-left"
              style={{ display: "inline-block" }}
            >
            10% Move out cleaning
            </p>
        </div>
      </div>
    </div>
  );
};

export default MoveForm;
