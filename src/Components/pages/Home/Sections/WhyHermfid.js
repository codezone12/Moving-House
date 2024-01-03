import { Link } from "react-router-dom";

const WhyHermified = () => {

    return (

        <div class="h-fit bg-[#e2c6bb] font-['Roboto']">
            <h3 className="text-5xl font-medium pt-28 on ">Why <span className="text-red-500">SFA?</span></h3>

            {/* line content */}
            <div class="w-full flex justify-center mt-8 relative group ">
                <p class="border-black hover:border-white border-2 w-20 hover:w-[250PX] text-center transition-all duration-300 transform origin-center scale-100 "></p>
            </div>
            {/* row begins */}
            <div className="   mt-14 mx-24 h-fit    pb-24  ">

                <div className="flex sm:flex-row flex-col justify-between">
                    {/* first row */}
                    <div className="flex my-3 sm:my-0 flex-col ">


                        <div className=" ml-1 flex  flex-col items-center justify-center  ">
                            <Link to={"/Moving_Home"} >

                                <div className="bg-[hsla(0,0%,100%,.5)]  self-center  hover:bg-white   h-36 w-36 flex items-center justify-center rounded-full rotations">
                                    <img
                                        src='img/h1.svg'
                                        className="h-12" alt="img_icon" />
                                </div>
                            </Link>
                            <h1 className="font-bold mt-9 text-lg leading-10  hover:delay-1000 hover:duration-500 hover:ease-linear">CUSTOMIZED FOR YOU</h1>
                        </div>
                        <p className="text-base">Our work is always tailored to your <br /> needs  and wishes.</p>

                    </div>

                    {/* second row */}
                    <div className="flex flex-col my-3 sm:my-0 ">
                        <div className=" ml-1 flex  flex-col items-center justify-center ">
                            <Link to={"/Window_clean"} >
                                <div className="bg-[hsla(0,0%,100%,.5)]  self-center  hover:bg-white   h-36 w-36 flex items-center justify-center rounded-full rotations">
                                    <img
                                        src='img/h3.svg' className="h-12" alt="img_icon" />
                                </div>
                            </Link>
                            <h1 className="font-bold mt-9 text-lg leading-10 ">FAIR TERMS AND CONDITIONS</h1>
                        </div>
                        <p className="text-base">We have collective agreements with <br />  secure terms, insurance and contractual <br />pension for our employees. The way it <br /> should be.</p>
                    </div>


                    {/* Third row */}

                    <div className="flex  my-3 sm:my-0 flex-col">
                        <div className=" ml-1 flex  flex-col items-center justify-center">
                            <Link to={"/Deep_Clean"} >
                                <div className="bg-[hsla(0,0%,100%,.5)]  self-center  hover:bg-white   h-36 w-36 flex items-center justify-center rounded-full rotations">
                                    <img
                                        src='img/de3.svg' className="h-12" alt="img_icon" />
                                </div>
                            </Link>
                            <h1 className="font-bold mt-9 text-lg leading-10 ">ALWAYS INSURED</h1>
                        </div>
                        <p className="text-base">Both your home and our employees are <br /> 100% insured.</p>






                    </div>


                </div>

            </div>
            {/* row ends */}

        </div>
    );



}

export default WhyHermified;