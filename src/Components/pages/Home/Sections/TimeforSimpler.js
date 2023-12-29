
const TimeforSimple = () => {

    return (
        <div className="  bg-[#eae8e1] overflow-clip font-['Roboto']">

            <div className="flex flex-col-reverse lg:flex-row  items-center ">
                {/* first content */}

                <div className=" my-20 px-4 lg:px-20  text-black text-5xl font-medium font-['Young Serif']    ">
                    <p>Time for a simpler</p>
                    <p class="  text-start mt-1 ">everyday life?</p>
                    <div className="w-full  flex justify-start mt-8 hover:w-40">
                        <p className=" border-black border-2 w-20" ></p>
                    </div>
                    <div className="flex justify-start w-full">
                        <input className="bg-white focus:border-none focus:outline-none w-full text-black text-center text-lg p-3 rounded-md mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 hover:shadow-lg hover:shadow-black hover:bg-white transform hover:scale-90 transition-transform delay-200 hover:placeholder-gray-500" placeholder="POSTCODE" />
                    </div>
                    <div className="flex justify-center items-center  w-full bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">

                        <p className="text-center text-white ">CHOOSE SERVICES</p>

                        <p className="text-center text-4xl  self-end  absolute end-0  mr-4"><svg height="20" viewBox="0 0 9 15" width="20" class="csw9N_C5 fiwAtSA" style={{ stroke: "#fff" }}   ><path d="m.958.995 6.51 6.51-6 6" fill="none" stroke-width="2"></path></svg></p>
                    </div>
                </div>



                {/* second content */}
                <div className=" lg:ml-auto w-[50vw] lg:w-[47vw] overflow-hidden">
                    <img
                        src="img/img1.jpeg"
                        className=" w-[100vw]" alt="pic_image" />
                </div>

            </div>
        </div>

    );

}
export default TimeforSimple;