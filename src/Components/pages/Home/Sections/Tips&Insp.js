const Tipsinsp = () => {
  return (
    <div className="  h-fit   bg-[#f5f4f0] font-['Roboto']">
      <div class="">
        <h3 className="text-5xl font-medium pt-28">Tips & inspiration?</h3>

        <div className="w-full  flex justify-center mt-8">
          <p className=" border-black border-b w-20 text-center hover:w-[250PX] hover:border-yellow-500  transition-all duration-300 transform origin-center scale-100"></p>
        </div>
      </div>
      <div></div>

      <div className="   mt-14 mx-24  h-fit   flex  overflow-hidden pb-24  ">
        <div className="flex flex-col justify-between items-start mr-7 gap-4">
          <div className="group relative overflow-hidden h-[65vh] bg-[#fff] w-fit top-4 transition-all duration-800 ease-in-out hover:h-[80vh] rounded-3xl">
            <div className="relative">
              <img
                src="https://images.ctfassets.net/37vwfxlcawdb/1TfE1UU6y8uJw1qSaSGma6/2ff488f042edf4fe6a7ce60a33c3abca/Startsida.jpg?q=50&fm=jpg&w=800"
                className="w-[700px] h-80"
                alt="Pic"
              />
            </div>

            <div className="overflow-hidden h-0 transition-all duration-800 ease-in-out group-hover:h-[30vh] delay-200 p-8">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">CLEANING</p>
                <p className="border-black border-b w-20 text-center mt-4"></p>
              </div>

              <div className="flex items-center justify-center flex-col p-8">
                <p className="text-3xl font-medium mt-2">
                  Get the patio ready for{" "}
                </p>
                <p className="text-3xl font-medium mt-2">Winter</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden h-[65vh] bg-[#fff] w-fit top-4 transition-all duration-800 ease-in-out hover:h-[80vh] rounded-3xl">
            <div className="relative">
              <img
                src="https://images.ctfassets.net/37vwfxlcawdb/1TfE1UU6y8uJw1qSaSGma6/2ff488f042edf4fe6a7ce60a33c3abca/Startsida.jpg?q=50&fm=jpg&w=800"
                className="w-[700px] h-80"
                alt="Pic"
              />
            </div>

            <div className="overflow-hidden h-0 transition-all duration-800 ease-in-out group-hover:h-[30vh] delay-200 p-8">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">CLEANING ORGANIZATION</p>
                <p className="border-black border-b w-20 text-center mt-4"></p>
              </div>

              <div className="flex items-center justify-center flex-col p-8">
                <p className="text-3xl font-medium mt-2">
                  More fluency in everyday
                </p>
                <p className="text-3xl font-medium mt-2">life-5 simple tips</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden h-[65vh] bg-[#fff] w-fit top-4 transition-all duration-800 ease-in-out hover:h-[80vh] rounded-3xl">
            <div className="relative">
              <img
                src="https://images.ctfassets.net/37vwfxlcawdb/4l8RDAxaEze1utGrkmIWcl/fd7bd29adbf662cdd8182b695e1973d9/Sta_d-.jpg?q=50&fm=jpg&w=800"
                className="w-[700px] h-80"
                alt="Pic"
              />
            </div>

            <div className="overflow-hidden h-0 transition-all duration-800 ease-in-out group-hover:h-[40vh] delay-200 p-8">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">CLEANING</p>
                <p className="border-black border-b w-20 text-center mt-4"></p>
              </div>

              <div className="flex items-center justify-center flex-col p-8">
                <p className="text-3xl font-medium mt-2">
                  Dansih hygge at home -
                </p>
                <p className="text-3xl font-medium mt-2">
                  small details that make a
                </p>
                <p className="text-3xl font-medium mt-2">difference</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-start gap-4 ">
          <div className="group relative overflow-hidden h-[65vh] bg-[#fff] w-fit top-4 transition-all duration-800 ease-in-out hover:h-[80vh] rounded-3xl">
            <div className="relative">
              <img
                src="https://images.ctfassets.net/37vwfxlcawdb/4l8RDAxaEze1utGrkmIWcl/fd7bd29adbf662cdd8182b695e1973d9/Sta_d-.jpg?q=50&fm=jpg&w=800"
                className="w-[700px] h-80"
                alt="Pic"
              />
            </div>
            <div className="overflow-hidden h-0 transition-all duration-800 ease-in-out group-hover:h-[30vh] delay-200 p-8">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">CLEANING</p>
                <p className="border-black border-b w-20 text-center mt-4"></p>
              </div>

              <div className="flex items-center justify-center flex-col p-8">
                <p className="text-3xl font-medium mt-2">
                  Clean your oven quickly
                </p>
                <p className="text-3xl font-medium mt-2">and easily</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button>
        <div className=" w-full flex items-center justify-center  pb-32  ">
          <div className="text-xl font-bold   rounded-md cursor-pointer border-black border  bg-transparent p-4 w-44 hover:scale-105 duration-[700ms]">
            <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-orange-400 transition duration-[700ms] group-hover:text-white ease"></span>
            MORE TIPS
          </div>
        </div>
      </button>
    </div>
  );
};

export default Tipsinsp;
