import React, { useState } from "react";
import "../../../Assets/css/window_cleaning.css";
import CrossIcon from "../../Gernal_Components/CrossIcon";
import { useNavigate } from "react-router";

const MovingOutService = () => {
  const navigate = useNavigate()
  const [handover, setHandover] = useState("open");
  const [wantCleaning, setWantCleaning] = useState("yes");
  const [sqm, setSqm] = useState(0);
  const [ovenCleaning, setOvenCleaning] = useState(0);
  const [fridgeCleaning, setFridgeCleaning] = useState(0);
  const handleHandoverChange = (value) => {
    setHandover(value);
  };

  const handleCleaningChange = (value) => {
    setWantCleaning(value);
  };
  return (
    <div
      className="container mx-auto my-auto pt-10 mb-20"
      style={{ maxWidth: "70%" }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "70% 30%", gap: "30px" }}
      >
        <div className="text-center px-2">
          <div className="flex justify-end">
            <CrossIcon  handleClickCrossIcon={() => navigate("/Moving_Home")}/>
          </div>
          <div
            className=" mt-2 font-normal text-5xl"
            style={{ fontFamily: "Tiempos Headline,serif" }}
          >
           Move Out Cleaning
          </div>
          <div className="w-full mt-8  flex justify-center items-center mb-5">
            <p className=" border-black border w-20 text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100"></p>
          </div>
          <div className="p-4">
            <p className="text-xl font-semibold text-left ms-1 my-4">Do you have a self-cleaning oven?*</p>
            <div className="border rounded-md mb-2 p-5 bg-white border-[#d5d2c4]">
              {/* Yes Radio Button */}
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="yes"
                  className="cursor-pointer flex items-center justify-between w-full"
                >
                  <p className="text-xl font-normal">Yes</p>
                  <div
                    className={`w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center ${
                      wantCleaning === "yes" ? "bg-black" : "bg-white"
                    }`}
                  >
                    {wantCleaning === "yes" && (
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
                  id="yes"
                  name="cleaning"
                  checked={wantCleaning === "yes"}
                  onChange={() => handleCleaningChange("yes")}
                  className="hidden"
                />
              </div>

              <p className="mb-2 border-[#d6d2c4] border"></p>

              {/* No Radio Button */}
              <div className="flex">
                <label
                  className="text-xl cursor-pointer flex justify-between items-center mt-1 w-full my-auto font-normal"
                  htmlFor="no"
                >
                  <p className="text-left">No</p>
                  <div
                    className={`w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center ${
                      wantCleaning === "no" ? "bg-black" : "bg-white"
                    }`}
                  >
                    {wantCleaning === "no" && (
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
                  id="no"
                  name="cleaning"
                  value={"no"}
                  checked={wantCleaning === "no"}
                  onChange={() => handleCleaningChange("no")}
                  className="hidden"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-lg p-4">
            <label
              htmlFor="message"
              className="text-xl font-semibold flex justify-left mb-2 font-normal ms-1"
            >
              Additional comments (e.g. stone materials)
            </label>
            <div className="flex items-center mb-3">
              <input
                type="text"
                name=""
                id="message"
                className="border w-full mx-1 rounded-md mb-4 p-5 border-[#d5d2c4]"
              />
            </div>
          </div>

          <div className="p-4">
            <h4 className="font-semibold text-left mb-3 text-xl">Access*</h4>

            <div className="border rounded-md mb-2 p-5 bg-white border-[#d5d2c4]">
              {/* Radio Button 1 */}
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="open"
                  className="cursor-pointer flex items-center justify-between w-full"
                >
                  <p className="text-xl font-normal">
                    I will open the door for Hemfrid
                  </p>
                  <div
                    className={`w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center ${
                      handover === "open" ? "bg-black" : "bg-white"
                    }`}
                  >
                    {handover === "open" && (
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
                  id="open"
                  name="handover"
                  checked={handover === "open"}
                  onChange={() => handleHandoverChange("open")}
                  className="hidden"
                />
              </div>

              <p className="mb-2 border-[#d6d2c4] border"></p>

              {/* Radio Button 2 */}
              <div className="flex my-auro">
                <label
                  className="text-xl cursor-pointer flex items-center jutify-between w-full font-normal"
                  htmlFor="leave"
                >
                  <p className="text-left">
                    I will leave the keys at the Hemfrid office 12 pm the work
                    day before, at the latest
                  </p>
                  <div
                    className={`w-8 h-7 rounded-full border border-gray-300 flex items-center justify-center ${
                      handover === "leave" ? "bg-black" : "bg-white"
                    }`}
                  >
                    {handover === "leave" && (
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
                  name="handover"
                  value={"leave"}
                  checked={handover === "leave"}
                  onChange={() => handleHandoverChange("leave")}
                  className="hidden"
                  id="leave"
                />
              </div>

              <p className="mb-2 border-[#d6d2c4] border"></p>

              {/* Radio Button 3 */}
              <div className="flex my-auto">
                <label
                  className="text-xl cursor-pointer flex items-center justify-between w-full font-normal"
                  htmlFor="customer"
                >
                  <p className="text-left">
                    I'm a customer and have already left my keys
                  </p>
                  <div
                    className={`w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center ${
                      handover === "customer" ? "bg-black" : "bg-white"
                    }`}
                  >
                    {handover === "customer" && (
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
                  name="handover"
                  value={"customer"}
                  checked={handover === "customer"}
                  onChange={() => handleHandoverChange("customer")}
                  className="hidden"
                  id="customer"
                />
              </div>
            </div>

            <p className="text-4 text-left italic my-2">
              <a href="#" className="font-semibold underline">
                Here
              </a>{" "}
              you will find the address and opening hours of your nearest
              Hemfrid office where you can hand over the key.
            </p>
            <div
              className="mt-10"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <button
                style={{ padding: "15px 50px 15px 50px" }}
                className="bg-[#000] font-bold uppercase text-white p-5 rounded text-bold"
              >
                Next
              </button>
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
              Your booking
            </p>
          </div>
          <div className="flex mt-5 px-5">
            <p className="text-lg text-normal text-[#003b5c] text-left flex-1">
            Flyttstädning
            </p>
            <p className="text-gl font-bold text-[#003b5c]">2 898 kr</p>
          </div>
          <div className="flex mt-5 px-5">
            <p className="text-lg text-normal text-[#003b5c] text-left flex-1">
            Materialkostnad
            </p>
            <p className="text-gl font-bold text-[#003b5c]">25 kr</p>
          </div>
          <div className="w-full mt-3 flex justify-center px-5 items-center mb-5">
            <p className=" border-[#003b5c] border opacity-10 w-full text-center "></p>
          </div>
          <div className="mt-5 px-5">
            <p className="text-xl font-semibold text-[#003b5c] text-left">
              Date and time
            </p>
            <p className="text-xl text-left font-semibold">-</p>
          </div>
          <div className="w-full mt-3 flex justify-center px-5 items-center mb-5">
            <p className=" border-[#003b5c] border opacity-10 w-full text-center "></p>
          </div>
          <div className="flex mt-5 px-5">
            <div className="flex-1">
              <p className="text-lg text-[#003b5c] text-left flex-1">Total</p>
              <p className="text-sm text-[#003b5c] text-left flex-1 ms-1">
                with RUT-deduction
              </p>
            </div>
            <p className="text-xl font-semibold text-[#003b5c] my-auto">
            2 923 kr
            </p>
          </div>
          <div className="w-full mt-3 flex justify-center px-5 items-center mb-5">
            <p className=" border-[#003b5c] border opacity-10 w-full text-center "></p>
          </div>
          <div className="flex mt-5 mb-3 px-5">
            <p
              className="text-normal text-normal underline text-[#003b5c] text-left"
              style={{ display: "inline-block" }}
            >
             Add discount code
            </p>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingOutService;
