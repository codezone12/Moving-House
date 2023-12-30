const Tips = () => {

    return (<div>

        <div className="py-28  h-fit   bg-[#f5f4f0]">

            <div class="">
                <h3 className="text-5xl font-medium ">Cleaning <span className=" text-purple-500 ">Tips </span> & <span className='text-sky-400'>News</span> </h3>

                {/* line content */}
                <div className="w-full mt-8  flex justify-center items-center">
                    <p className=" border-black border-2 w-20 hover:w-[550PX] text-center transition-all duration-300 transform origin-center scale-100 delay-200 hover:border-gray-400" ></p>
                </div>


            </div>

            {/* Box contetnt */}

            <div className="   mt-14  mx-24  h-fit   flex  overflow-hidden pb-24  ">
                {/* column one */}
                <div className="md:w-1/2 flex flex-col gap-4  justify-between items-start mr-7">

                    {/* first item */}
                    <div className="group relative overflow-hidden h-[65vh] bg-[#fff] w-fit top-4 transition-all duration-800 ease-in-out hover:h-[80vh]">
                        <div className="relative">
                            <img
                                src="img/d2.jpeg"
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
                                <p className="text-3xl font-medium mt-2">Cleaning with vingear -21 </p>
                                <p className="text-3xl font-medium mt-2">effective tips</p>
                            </div>
                        </div>
                    </div>


                    <div className="group relative overflow-hidden h-[65vh] bg-[#fff] w-fit top-4 transition-all duration-800 ease-in-out hover:h-[80vh]">
                        <div className="relative">
                            <img
                                src="img/d1.jpeg"
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
                                <p className="text-3xl font-medium mt-2">Avoid black mold in</p>
                                <p className="text-3xl font-medium mt-2">bathroom</p>
                            </div>
                        </div>
                    </div>



                </div>

                {/* column two */}

                <div className="md:w-1/2 flex flex-col justify-between items-center ">

                    {/* first item */}

                    <div className="h-[60vh] mx-16   w-fit "> {/* main box */}
                        {/* image box */}
                        <div class="hover:animate-svg">
                            <svg viewBox="0 0 280 325" class="cfbIs2Ub ahI90hC" style={{ fill: "#d1dce7" }}>
                                <path d="M140 0L280 85.0667V242.918L140 324.8L0 242.918L2.77158e-05 82.4067L140 0Z"></path>
                            </svg>
                        </div>


                        {/* Content  box */}
                        <div className="flex items-center justify-center flex-col bg-transparent relative bottom-80 p-16 h-64">

                            <p className="text-xl font-bold">CLEANING</p>


                            <p className=" border-black border-b w-20 text-center " ></p>
                            <p className="text-3xl  mt-2">Clogged drain -</p>
                            <p className="text-3xl  mt-2" >how to unclog it</p>
                            <p className="text-3xl  mt-2" >yourself</p>
                        </div>

                    </div>

                    <div className="group relative overflow-hidden h-[65vh] bg-[#fff] w-fit top-4 transition-all duration-800 ease-in-out hover:h-[80vh]">
                        <div className="relative">
                            <img
                                src="img/d3.jpeg"
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
                                <p className="text-3xl font-medium mt-2">Hemfrid's own cleaning</p>
                                <p className="text-3xl font-medium mt-2">Products</p>
                            </div>
                        </div>
                    </div>




                </div>

            </div>


            {/* Button */}

            <button className="px-5 py-3 text-lg font-semibold rounded-lg overflow-hidden relative group cursor-pointer bg-[#044946]  hover:scale-105 duration-[700ms]">
                <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-[#1fa299] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
                    MORE TIPS
                </span>
            </button>








        </div>

    </div>);

}

export default Tips;