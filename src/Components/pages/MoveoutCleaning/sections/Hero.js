import { useRef, useState } from "react";
import { ZIPCODES } from "../../../Constants/Constant";
import { useNavigate } from "react-router";
import { Button, Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import SelectArrow from "../../../Gernal_Components/SelectArrow";
import MovingHome from "../../../../Assets/images/New Images/Moving_8.jpeg";
const MHero = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [selectedValue, setSelectValue] = useState("1");
  const [sqmValue, setSqmValue] = useState(0);
  const [postCodevalue, setPostCodeValue] = useState(null);

  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);
  const [moreOptions, setMoreOptions] = useState(false);
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

  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };

  const handleChangesqmValue = (event) => {
    setSqmValue(event.target.value);
  };

  const handelClickContinue = () => {
    navigate("/moving_out_service", {
      state: {
        data: {
          city,
        },
      },
    });
  };
  const handleNavigate = () => {
    setMoreOptions(true);
    // Add your logic here for handling the navigation
    // navigate("/moving_out_service", {
    //   state: {
    //     data: {
    //       city,
    //     },
    //   },
    // });
  };
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(${MovingHome})`,
      }}
    >
      <div className=" mr-auto pt-48 md:px-28  text-white text-5xl font-medium font-['Young Serif'] ">
        {moreOptions ? (
          <>
            <div className="bg-[#f5f4f0] rounded-xl  py-6  h-auto max-w-lg ">
              <div className="text-[#1e1e1e] text-4xl px-6 text-center Tiempos-font">
                How can we simplify your move?
              </div>
              <div className="flex mt-3 justify-center">
                <span className="w-16 bg-black h-[1px]"></span>
              </div>
              <div className="w-auto px-16 mx-auto mt-6">
                <p className="text-[#1e1e1e] text-lg font-normal text-center">
                  Where you live in <strong>Marsta</strong>, Hemfrid offers the
                  following services
                </p>
              </div>
              <div className="px-6  mt-5">
                <Select
                  className="flex justify-center items-center text-[#1e1e1e] "
                  onChange={handleChangeSelect}
                  icon={<SelectArrow />}
                  bg={"white"}
                  size={"lg"}
                >
                  <option value="1" selected>
                    Moving service & Move out cleaning
                  </option>
                  <option value="2">MoveOut Cleaning</option>
                  {/* <option value="option3">Option 3</option> */}
                </Select>
              </div>
              <div className="mt-3 px-6 ">
                <p className="text-[#1e1e1e] text-lg">
                  {selectedValue === "1"
                    ? "Moving to"
                    : "How big is your home?"}
                </p>
              </div>
              <div className="px-6 mb-3 relative">
                {Number(selectedValue) === 1 ? (
                  <Input
                    bg={"white"}
                    placeholder="Postcode"
                    value={postCodevalue}
                    onChange={(e) => setPostCodeValue(e.target.value)}
                    className="text-[#1e1e1e] text-center bottom-1 outline-none focus-visible:border-none "
                  />
                ) : (
                  <>
                    <Input
                      bg={"white"}
                      value={`${sqmValue}`}
                      type="number"
                      placeholder="Postcode"
                      className="text-[#1e1e1e] relative text-center bottom-1 outline-none focus-visible:border-none"
                      onChange={handleChangesqmValue}
                    />
                    <span className="absolute text-[#1e1e1e] text-base  right-48 top-5 z-10">
                      sqm
                    </span>
                  </>
                )}
              </div>
              <hr />
              <div className="px-6 mt-4">
                <Button
                  size={"lg"}
                  width="100%"
                  colorScheme="teal"
                  onClick={handelClickContinue}
                >
                  CONTINUE
                </Button>
              </div>
            </div>
            <div className="text-base text-left flex mt-3 gap-2">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                class="uiyb_O3 cfwk5OWE"
              >
                <g>
                  <path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path>
                  <path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path>
                </g>
              </svg>
              Window cleaning included
            </div>
            <div className="text-left text-base max-w-md mt-4 h-40">
              Terms and conditions: The offer applies to move out cleaning
              performed before 29/2, 2024. The discount cannot be combined with
              other promotions or offers.
            </div>
          </>
        ) : (
          <>
            <p className="text-start">Get help with</p>

            <p class="  text-start mt-1 text-gray-700 ">Cleaning when</p>
            <p class="  text-start mt-1 text-fuchsia-800 ">Moving</p>
            <div className="flex w-1/2 md:w-2/5 hover:shadow-lg text-lg font-bold hover:border-none hover:text-green-500 transform hover:scale-90 transition-transform delay-200">
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
              onClick={handleNavigate}
              disabled={isButtonDisabled}
              className={`flex justify-center items-center w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:text-green-500 transform hover:scale-90 transition-transform delay-200"
              }`}
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
                    <span className="text-orange-200 font-bold ml-2 mr-1">
                      50%
                    </span>
                  </p>
                  <p> discount on your first invoice</p>
                </div>
                <div className="my-6 text-base text-start">
                  <p>
                    Use the code{" "}
                    <span className="font-bold text-black text-lg">OKT50</span>{" "}
                    to activate the offer.
                  </p>
                </div>

                <div className="my-6 text-lg text-start hover:shake">
                  <i>
                    <span className="font-bold text-black">Terms:</span>Offer
                    valid for new customers only. Your first home <br />{" "}
                    cleaning must be done no later than November 30,2023. <br />
                    The discount cannot be combined with other promotions or
                    offer.{" "}
                  </i>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MHero;
