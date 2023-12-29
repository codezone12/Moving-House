const Letus = () => {

    return (

        <>
            {/* first content */}
            <div className=" bg-[#eae8e1] ">
                <div class="flex flex-col-reverse lg:flex-row items-center justify-between relative">
                    <div className="py-4 lg:ml-20 text-black text-5xl font-medium font-['Young Serif']  lg:ml-28  xl:ml-24  2xl:ml-36">
                        <p>Let us help you with </p>
                        <p class="  text-start mt-1 ">everyday life!</p>
                        <div className="flex justify-start w-full">
                            <input className="bg-white focus:border-none focus:outline-none w-full text-black text-center text-lg p-3 rounded-md mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 hover:shadow-lg hover:shadow-black hover:bg-white transform hover:scale-90 transition-transform delay-200 hover:placeholder-gray-500" placeholder="ENTER ZIPCODE" />
                        </div>
                        <div className="flex justify-center items-center w-full bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md transform hover:scale-90 transition-transform delay-200">


                            <p className="text-center text-white hover:text-green-500">CHOOSE SERVICES</p>

                            <p className="text-center text-4xl  self-end absolute end-0 mr-4 "><svg height="20" viewBox="0 0 9 15" width="20" class="csw9N_C5 fiwAtSA" style={{ stroke: "#fff" }}   ><path d="m.958.995 6.51 6.51-6 6" fill="none" stroke-width="2"></path></svg></p>

                        </div>
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