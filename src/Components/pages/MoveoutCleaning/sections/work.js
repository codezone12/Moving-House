import { Link } from "react-router-dom";

const MWork = () => {

    return (
        <div>

            <div className="h-fit bg-[#c4d0c7] ">
                <h3 className="text-5xl font-medium pt-28">How does it <span className="text-red-600">Work</span></h3>

                {/* line content */}
                <div className="w-full mt-8  flex justify-center items-center">
                    <p className=" border-black border-2 w-20 hover:w-[550PX] text-center transition-all duration-300 transform origin-center scale-100 delay-200 hover:border-gray-400" ></p>
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
                                            src="img/n3.svg" className="h-12" alt="img_icon" />


                                    </div>
                                </Link>


                                <h1 className="font-bold mt-9 text-lg leading-10">ALL ROOMS </h1>

                            </div>



                            <p className="text-base">
                                All rooms are thoroughly cleaned from <br /> floor to ceiling. We dust, vacuum and <br /> wipe. </p>






                        </div>

                        {/* second row */}
                        <div className="flex flex-col my-3 sm:my-0 ">


                            <div className=" ml-1 flex  flex-col items-center justify-center">
                                <Link to={"/Deep_Clean"} >
                                    <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full hover:bg-white rotations">


                                        <img
                                            src="img/wi.svg" className="h-12" alt="img_icon" />


                                    </div>
                                </Link>


                                <h1 className="font-bold mt-9 text-lg leading-10">SPARKLING CLEAN</h1>

                            </div>


                            <p className="text-base">We put extra energy into your kitchen <br /> and bathroom, as we know that these<br />often need a little extra love. </p>






                        </div>


                        {/* Third row */}

                        <div className="flex  my-3 sm:my-0 flex-col">


                            <div className=" ml-1 flex  flex-col items-center justify-center">
                                <Link to={"/Home_clean"} >
                                    <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full hover:bg-white rotations">


                                        <img
                                            src="img/wi2.svg" className="h-12" alt="img_icon" />


                                    </div>
                                </Link>


                                <h1 className="font-bold mt-9 text-lg leading-10">WINDOW CLEANING
                                </h1>

                            </div>



                            <p className="text-base">aturally, window cleaning is included in <br />your move-out cleaning, since we know<br />that this is the detail that makes a <br /> difference! </p>






                        </div>


                    </div>

                </div>
                {/* row ends */}

            </div>

        </div>
    );

}
export default MWork;