import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import RadioBox from "./sections/RadioBox";

const Book_By_Call = () => {
  const [price, setPrice] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [doorCode, setDoorCode] = useState("");
  const [campaignCode, setCampaignCode] = useState("");
  const [agreeToOffers, setAgreeToOffers] = useState(false);
  const [wantCleaning, setWantCleaning] = useState("");
  const [HavePets, setHavePets] = useState("");

  const handleCleaningChange = (value) => {
    setWantCleaning(value);
  };

  const location = useLocation();
  const data = location?.state?.data;
  console.log("data received", data);
  useEffect(() => {
    setCity(data ? data[0] : "");
  }, [data]);
  const totalPrice = useMemo(() => {
    if (price <= 0) {
      setPrice(0);
    }

    if (price === "" || price === 0) {
      return null;
    }

    let basePrice = 0;

    if (price >= 1 && price <= 39) {
      basePrice = 1469;
    } else if (price >= 40 && price <= 59) {
      basePrice = 1789;
    } else if (price >= 60 && price <= 89) {
      basePrice = 2109;
    } else if (price >= 90 && price <= 139) {
      basePrice = 2689;
    } else if (price >= 140 && price <= 149) {
      basePrice = 3259;
    } else {
      return "The price is based on your home's unique conditions and will be presented during the free meeting.";
    }

    const cleaningPrice = wantCleaning === "yes" ? 1410 : 0;
    const finalPrice =
      wantCleaning === "yes"
        ? (basePrice + cleaningPrice).toString()
        : basePrice.toString();

    console.log("total price", finalPrice);

    return finalPrice;
  }, [price, wantCleaning]);

  const handleSubmit = async () => {
    const response = await axios.post("/api", {
      price,
      firstName,
      lastName,
      email,
      confirmEmail,
      mobileNumber,
      street,
      city,
      doorCode,
      campaignCode,
      agreeToOffers,
    });
    // Other Operation of our choise like toasts etc
  };

  return (
    <div className="container pt-10">
      <div className="pt-20 pr-80 font-normal text-5xl flex items-center justify-center">
        Home Cleaning
      </div>
      <div className="w-full my-8  flex justify-center items-center">
        <p className=" border-black mr-80 border w-20 text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100"></p>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "70% 30%", gap: "30px" }}
        className="mx-auto mb-10"
      >
        <div className="mx-auto w-2/3">
          <div className="mb-4">
            <label
              htmlFor="sqm"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Living area (sqm)*
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              id="sqm"
              name="sqm"
              className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
            />
          </div>

          <div className="p-4 pl-0 pr-0">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xl font-semibold">
                How Often Do You Want Cleaning
              </p>
            </div>
            <div className="border rounded-md mb-2 p-5 bg-white border-[#d5d2c4]">
              {/* Yes Radio Button */}
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="yes"
                  className="cursor-pointer flex items-center justify-between w-full"
                >
                  <p className="text-xl font-normal">Every Week</p>
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
                  <p className="text-left">Every Other Week</p>
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
          <div className="w-15 border-2 border-gray-300 flex items-center justify-center font-bold my-4"></div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xl font-bold">Do you have any pets?</p>
            </div>
            <div className="flex flex-col items-start">
              {/* Checkboxes for Dog, Cat, Other Animal */}
              <label htmlFor="dog" className="flex items-center">
                <input
                  type="checkbox"
                  id="dog"
                  name="pet"
                  className="h-7 w-7 flex items-center justify-center mb-3 mt-2"
                />
                <span className="ml-2 text-xl ml-6">Dog(s)</span>
              </label>

              <label htmlFor="cat" className="flex items-center">
                <input
                  type="checkbox"
                  id="cat"
                  name="pet"
                  className="h-7 w-7 flex items-center justify-center mb-3 mt-2"
                />
                <span className="ml-2 text-xl ml-6">Cat(s)</span>
              </label>

              <label htmlFor="otherAnimal" className="flex items-center">
                <input
                  type="checkbox"
                  id="otherAnimal"
                  name="pet"
                  className="h-7 w-7 flex items-center justify-center mb-3 mt-2"
                />
                <span className="ml-2 text-xl ml-6">Other Pets(s)</span>
              </label>
            </div>
          </div>

          <div className="rounded-lg my-5">
            <label
              className="text-sm flex text-left font-bold mb-2"
              htmlFor="date"
            >
              Select start date*
            </label>
            <input
              style={{ height: "62px" }}
              type="date"
              id="date"
              name="date"
              className="block w-full px-4 border py-2 rounded-lg text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500 border-gray-400"
            />
          </div>
          <div className="border-t my-2 border-gray-300"></div>
          <div className="flex text-left text-3xl font-medium my-3">
            {" "}
            Contact details{" "}
          </div>
          {/* First Name */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-left text-gray-700 text-lg font-bold mb-2"
            >
              First name*
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="firstName"
              name="firstName"
              className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-left text-gray-700 text-lg font-bold mb-2"
            >
              Last name*
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="lastName"
              name="lastName"
              className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left text-gray-700 text-lg font-bold mb-2"
            >
              Email*
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
            />
          </div>

          {/* Confirm Email */}
          <div className="mb-4">
            <label
              htmlFor="confirmEmail"
              className="block text-left text-gray-700 text-lg font-bold mb-2"
            >
              Confirm email*
            </label>
            <input
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label
              htmlFor="mobileNumber"
              className="block text-left text-gray-700 text-lg font-bold mb-2"
            >
              Mobile number*
            </label>
            <input
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
            />
          </div>

          {/* Street */}
          <div className="mb-4">
            <label
              htmlFor="street"
              className="block text-left text-gray-700 text-lg font-bold mb-2"
            >
              Street*
            </label>
            <input
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              type="text"
              id="street"
              name="street"
              className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-left text-gray-700 text-lg font-bold mb-2"
            >
              City*
            </label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              id="city"
              name="city"
              className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
            />
          </div>

          {/* Door Code */}
          <div className="mb-4">
            <label
              htmlFor="doorCode"
              className="block text-left text-gray-700 text-lg font-bold mb-2"
            >
              Door code
            </label>
            <input
              value={doorCode}
              onChange={(e) => setDoorCode(e.target.value)}
              type="text"
              id="doorCode"
              name="doorCode"
              className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
            />
          </div>

          {/* Campaign Code */}
          <div className="mb-4">
            <label
              htmlFor="campaignCode"
              className="block text-left text-gray-700 text-lg font-bold mb-2"
            >
              Campaign code
            </label>
            <input
              value={campaignCode}
              onChange={(e) => setCampaignCode(e.target.value)}
              type="text"
              id="campaignCode"
              name="campaignCode"
              className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border-gray-400"
            />
          </div>
          <p className="text-2xl text-left mb-4 font-semibold">Approval</p>
          <div className="mb-4 pr-10 my-auto flex">
            <input
              type="checkbox"
              id="agreeToOffers"
              name="agreeToOffers"
              checked={agreeToOffers}
              onChange={() => setAgreeToOffers(!agreeToOffers)}
              className="mr-2 h-8 w-8 flex text-start mt-4"
            />
            <label
              htmlFor="agreeToOffers"
              className="text-xl flex text-start my-auto"
            >
              I agree to receive custom offers from you based on the information
              I have shared.
            </label>
          </div>
          <div className="flex justify-center">
            {/* "Contact Me" button */}
            <button
              className="bg-black hover:bg-black text-white font-bold py-4 px-14 rounded relative group overflow-hidden"
              onClick={handleSubmit}
            >
              <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease flex justify-center text-center"></span>
              <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
                Contact Me
              </span>
            </button>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#d1dce7",
              width: "300px",
              height: "auto",
            }}
          >
            <div className="d-flex flex-col py-7">
              <p
                className="text-left ml-3 mb-1"
                style={{
                  fontSize: "22px",
                  fontFamily: "Tiempos Headline,serif",
                }}
              >
                Summary
              </p>
              <p
                className="px-3"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span className="text-lg ">Home cleaning</span>
                <span className="text-xl font-medium">
                  {wantCleaning === "no" ? "Every Other Week" : "Every Week"}
                </span>
              </p>
              <div className="border-t my-2 border-gray-400 w-4/5 mx-auto"></div>
              <p className="text-xl font-semibold text-left my-auto pl-3 py-2">
                Selected start date
              </p>
              <p className="text-lg text-left px-5 mt-3">
                {data ? data[1] : ""}
              </p>
              <div className="border-t my-2 border-gray-400 w-4/5 mx-auto"></div>
              <p className="text-lg text-left px-5 mt-3">Starting price</p>
              <p className="text-xs text-left px-5 mt-3">with RUT-deduction</p>
              {totalPrice !== null && (
                <>
                  <p
                    className={
                      typeof totalPrice === "number"
                        ? "text-xl text-left font-medium font-semibold px-5 mt-3"
                        : "text-lg text-left px-5 mt-3"
                    }
                  >
                    SEK {totalPrice}/month*
                  </p>
                  {typeof totalPrice === "number" && (
                    <p className="text-xs text-left px-5 mt-3">
                      *The price is based on the information you have provided.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Book_By_Call;
