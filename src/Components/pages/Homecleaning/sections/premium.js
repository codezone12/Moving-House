const Premium = () => {


    return (<div className="h-screen bg-[#eae8e1] overflow-clip border-indigo-500 border-1">

        <div className="flex   flex-row-reverse overflow-hidden">
            {/* first content */}
            <div className="">
                <div className=" my-36 mx-24   text-black text-5xl font-medium font-['Young Serif']   ">




                    <p class=" text-start "><span className="text-red-800 font-bold ">Flytt<span className="text-blue-600">Stad</span></span><span className="font-bold text-green-800">&Altervining</span></p>
                    <div className="w-full  flex justify-start mt-8">

                        <p className=" border-black border-2 w-20 text-center " ></p>

                    </div >
                    <div className="text-base my-5">
                        <p>More than just cleaning, we help you solve the whole everyday</p>
                        <p>puzzle with everything from ironing and washing to changing</p>
                        <p>the sheets and collecting the children's toys. Tell us about your</p>
                        <p className="text-start">wishes and we will take care of the rest.</p>
                    </div >
                    <div className="text-base text-start">
                        <p> Read more about <span className="underline font-semibold">FlyttStad&Altervining Premium.</span> </p>
                    </div>
                </div>

            </div>


            {/* second content */}



            <div className="    w-[50vw] absolute start-0 overflow-hidden">
                <img src="img/left.jpeg" className=" w-[100vw] h-[600px] " alt="pic_image" />

            </div>




        </div>


    </div>
    );

}

export default Premium;