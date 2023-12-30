import { Link } from "react-router-dom";
const WorkAtHemfird=()=>{

return(

    <div>

<div className="bg-[#d1dce7] border-indigo-500 text-[#003b5c]   relative font-['Roboto'] ">

<div className="pt-24 text-5xl  ">Do you want to work at <br /> <span className="text-green-500">Hemfrid?</span> </div>
<div className="w-full mt-8  flex justify-center items-center">

 <p className=" border-[#003b5c] border-2 w-20 text-center hover:w-[400PX] hover:border-yellow-500 transition-all duration-300 transform origin-center scale-100" ></p>
 
</div>
<div className="mt-8 text-xl  leading-7  ">
 <p>Cleaners, movers, business developers, marketers and many more work</p>
 <p>with us. We are always looking for new colleagues to help us on our</p>
 <p>journey. Is it you? Read more about our vacancies on our careers page.</p>

</div>

<button className="my-14 px-5 py-3 text-lg font-semibold rounded-lg overflow-hidden relative group cursor-pointer bg-[#58274f]  hover:scale-105 duration-[700ms]">
                <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
                TO THE CARRER PAGE
                </span>
            </button>
{/* <div className=" text-[#003b5c] font-bold mt-14 flex items-center justify-center">
    <p className="bg-white p-4 w-64 rounded-lg mb-24">TO THE CARRER PAGE</p>
    </div> */}

</div>
    </div>
);


}

export default WorkAtHemfird;