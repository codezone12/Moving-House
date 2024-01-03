import { Link } from "react-router-dom";

const StepS = () => {


    return (<div>

        <div class="h-fit bg-[#e2c6bb] ">
            <h3 className="text-5xl font-medium pt-28"><span className="animate-pulse duration-200 text-gray-500"><span className="font-bold text-white-800">3</span> Steps</span><span> to a simpler <span className="animate-bounce text-orange-600">Everyday life</span></span></h3>

            {/* line content */}
            <div className="w-full  flex justify-center mt-8">

                <p className=" border-black border-2 w-20  hover:w-[600PX] text-center transition-all duration-300 transform origin-center scale-100 delay-200 hover:border-gray-100" ></p>

            </div>

            {/* row begins */}
            <div className="   mt-14 mx-24 h-fit    pb-24  ">

                <div className="flex sm:flex-row flex-col justify-between">
                    {/* first row */}
                    <div className="flex my-3 sm:my-0 flex-col ">


                        <div className=" ml-1 flex  flex-col items-center justify-center">
                            <Link to={'/'} >
                                <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full hover:bg-white rotations">
                                    <img
                                        src="img/h3.svg"
                                        className="h-12" alt="img_icon" />
                                </div>
                            </Link>
                            <h1 className="font-bold mt-9 text-lg leading-10">INITIAL MEETING</h1>


                        </div>



                        <p className="text-base">At a physical or digital meeting, you tell <br /> us what you want help with and how you <br /> want it done. </p>





                    </div>

                    {/* second row */}
                    <div className="flex flex-col my-3 sm:my-0 ">


                        <div className=" ml-1 flex  flex-col items-center justify-center">
                            <Link to={"/README.mdMoving_Home"} >
                                <div className="bg-[hsla(0,0%,100%,.4)] hover:bg-white self-center   h-36 w-36 flex items-center justify-center rounded-full rotations">


                                    <img
                                        src="img/wi.svg"

                                        className="h-12" alt="img_icon" />


                                </div>

                            </Link>

                            <h1 className="font-bold mt-9 text-lg leading-10">INITIAL DEEP CLEANING</h1>

                        </div>


                        <p className="text-base">We often start with an initial cleaning to <br />  give your home the best possible start. </p>






                    </div>


                    {/* Third row */}

                    <div className="flex  my-3 sm:my-0 flex-col">


                        <div className=" ml-1 flex  flex-col items-center justify-center">
                            <Link to={"/Deep_Clean"}>
                                <div className="bg-[hsla(0,0%,100%,.4)] hover:bg-white self-center   h-36 w-36 flex items-center justify-center rounded-full rotations">


                                    <img
                                        src="img/ha.svg"
                                        className="h-12" />


                                </div>
                            </Link>



                            <h1 className="font-bold mt-9 text-lg leading-10">ENJOY YOUR CLEAN HOME
                            </h1>

                        </div>



                        <p className="text-base">You can also use your cleaning service <br /> hours for other things, like window <br />
                            cleaning and laundry and more.
                        </p>






                    </div>


                </div>

            </div>
            {/* row ends */}

        </div>
    </div>);

}

export default StepS;