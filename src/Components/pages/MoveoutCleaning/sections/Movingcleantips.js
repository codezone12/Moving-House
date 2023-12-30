const MovingTips = () => {

    return (
    <div>

        <div className="py-28  h-fit   bg-[#f5f4f0]">

            <div className="">
                <h3 className="text-5xl font-medium ">Cleaning <span className=" text-gray-700 ">Tips </span> & <span className='text-fuchsia-800'>News</span></h3>

                {/* line content */}
                <div className="w-full mt-8  flex justify-center items-center">
          <p className=" border-black border-2 w-20 hover:w-[550PX] text-center transition-all duration-300 transform origin-center scale-100 delay-200 hover:border-gray-400" ></p>
        </div>


            </div>

            {/* Box contetnt */}

            <div className="   mt-14  mx-24  h-fit   flex  overflow-hidden pb-24  ">
                {/* column one */}
                <div className="md:w-1/2 flex flex-col gap-4 justify-between items-start mr-7">

                    {/* first item */}
                    <div className="group relative overflow-hidden h-[65vh] bg-[#fff] w-fit top-4 transition-all duration-800 ease-in-out hover:h-[80vh]">
                        <div className="relative">
                            <img
                                src="img/m4.jpeg"
                                className="w-[700px] h-80"
                                alt="Pic"
                            />
                        </div>

                        <div className="overflow-hidden h-0 transition-all duration-800 ease-in-out group-hover:h-[30vh] delay-200 p-8">
                            <div className="flex flex-col items-center">
                                <p className="text-xl font-bold">Moving</p>
                                <p className="border-black border-b w-20 text-center mt-4"></p>
                            </div>

                            <div className="flex items-center justify-center flex-col p-8">
                                <p className="text-3xl font-medium mt-2">Trendsenser:Frida's best </p>
                                <p className="text-3xl font-medium mt-2">open hosue tips </p>
                            </div>
                        </div>
                    </div>


                    <div className="group relative overflow-hidden h-[65vh] bg-[#fff] w-fit top-4 transition-all duration-800 ease-in-out hover:h-[80vh]">
            <div className="relative">
              <img
src="img/m2.jpeg"       
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
                <p className="text-3xl font-medium mt-2">Wash windows with</p>
                <p className="text-3xl font-medium mt-2">homemade window</p>
                <p className="text-3xl font-medium mt-2">cleaner</p>
              </div>
            </div>
          </div>



                </div>

                {/* column two */}

                <div className="md:w-1/2  flex flex-col justify-between items-center  ">

                    {/* first item */}

                    <div className="h-[60vh] mx-16   w-fit "> {/* main box */}
                        {/* image box */}
                        <div className="hover:animate-svg">
                            <svg viewBox="0 0 280 325" class="cfbIs2Ub ahI90hC" style={{ fill: "#d1dce7" }}>
                                <path d="M140 0L280 85.0667V242.918L140 324.8L0 242.918L2.77158e-05 82.4067L140 0Z"></path>
                            </svg>
                        </div>


                        {/* Content  box */}
                        <div className="flex items-center justify-center flex-col bg-transparent relative bottom-80 p-16 h-64">

                            <p className="text-xl font-bold">CLEANING</p>


                            <p className=" border-black border-b w-20 text-center " ></p>
                            <p className="text-3xl  mt-2">Clean with -</p>
                            <p className="text-3xl  mt-2" >bicarbonate</p>
                        </div>

                    </div>

                    <div className="group relative overflow-hidden h-[65vh] bg-[#fff] w-fit top-4 transition-all duration-800 ease-in-out hover:h-[80vh]">
                        <div className="relative">
                            <img
src="img/m3.jpeg"                                className="w-[700px] h-80"
                                alt="Pic"
                            />
                        </div>

                        <div className="overflow-hidden h-0 transition-all duration-800 ease-in-out group-hover:h-[30vh] delay-200 p-8">
                            <div className="flex flex-col items-center">
                                <p className="text-xl font-bold">CLEANING.MOVING</p>
                                <p className="border-black border-b w-20 text-center mt-4"></p>
                            </div>

                            <div className="flex items-center justify-center flex-col p-8">
                                <p className="text-3xl font-medium mt-2">Checklist for move out </p>
                                <p className="text-3xl font-medium mt-2">cleaning</p>
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

export default MovingTips;



// const Movingtip=()=>{
//     return (
// <>

//         <div className="h-[330px]  overflow-clip">
// <img src="https://images.ctfassets.net/37vwfxlcawdb/3LevsEqCuwhJBpizNqhkvj/813ba238477269b45ae4a3076f8a9872/Golv-tra-16-9.jpg?q=60&fm=jpg&w=2560"  className="h-[500px] w-full"/>
// </div>


// <div className="py-24  h-fit bg-[#f5f4f0]">
        
// <div class="">
//     <h3 className="text-5xl font-medium ">Moving & cleaning tips!</h3>
    
//  {/* line content */}
//  <div className="w-full  flex  justify-center mt-8">
 
//     <p className=" border-black border-b w-20 text-center " ></p>
 
//  </div>


//     </div>

//  {/* Box contetnt */}

//  <div className="mt-14  mx-24  h-fit flex overflow-hidden pb-24  ">
// {/* column one */}
// <div className="flex flex-col justify-between items-start mr-7">

// {/* first item */}

// <div  className="h-[90vh] bg-[#fff] w-fit "> {/* main box */}
//     {/* image box */}
// <div>
// <img src="https://images.ctfassets.net/37vwfxlcawdb/4qhLTEnSWdhB2h0MdsqoPn/8b2510f8ff20190ab4b8c9da7c4f57be/MicrosoftTeams-image__13_.png?q=50&fm=jpg&w=800" className="h-80" alt="Pic" />
// </div>

// {/* Content  box */}
// <div className="flex items-center justify-center flex-col  h-52">

//   <p className="text-xl font-bold">MOVING</p>


//     <p className=" border-black border-b w-20 text-center mt-4" ></p>
//     <p className="text-3xl font-medium mt-2">Trendsenser:Frida's best </p>
//     <p  className="text-3xl font-medium mt-2" >open hosue tips</p>
// </div>


// </div>

// <div  className="h-[90vh] bg-[#fff] w-fit relative top-14"> {/* main box */}
//     {/* image box */}
// <div>
// <img src="https://images.ctfassets.net/37vwfxlcawdb/6YcKFsdnCvokGoU3cbS2A8/83c7397a8fc81d02560bd72fd7877536/MicrosoftTeams-image__6_.png?q=50&fm=jpg&w=800" className="w-[700px] h-80" alt="Pic" />
// </div>

// {/* Content  box */}



// <div className="flex items-center justify-center flex-col  h-52">

//     <p className="text-xl font-bold">CLEANING</p>
  
  
//       <p className=" border-black border-b w-20 text-center mt-4" ></p>
//       <p className="text-3xl font-medium mt-2">Wash windows with</p>
//       <p  className="text-3xl font-medium mt-2" >homemade window</p>
//       <p  className="text-3xl font-medium mt-2" >cleaner</p>
//   </div>





// </div>



// </div>

// {/* column two */}

// <div className="flex flex-col justify-between items-start ">

//     {/* first item */}
    
//     <div  className="h-[60vh] mx-16   w-fit "> {/* main box */}
//         {/* image box */}
//     <div className="">
//     <svg viewBox="0 0 280 325" class="cfbIs2Ub ahI90hC" style={{fill:"#d1dce7"}} ><path d="M140 0L280 85.0667V242.918L140 324.8L0 242.918L2.77158e-05 82.4067L140 0Z"></path></svg>
//     </div>
    
//     {/* Content  box */}
//     <div className="flex items-center justify-center flex-col bg-transparent relative bottom-80 p-16 h-64">

//         <p className="text-xl font-bold">CLEANING</p>
      
      
//           <p className=" border-black border-b w-20 text-center mt-4 " ></p>
//           <p className="text-3xl  mt-4">Clena with  </p>
//           <p  className="text-3xl  mt-2" >bicarbonate</p>
         
//       </div>
    
//     </div>
    
//     <div  className="h-[90vh] bg-[#fff] w-fit relative bottom-20"> {/* main box */}
//         {/* image box */}
//     <div>
//     <img src="https://images.ctfassets.net/37vwfxlcawdb/2U5sXRr86S3NTGvsbTgiHL/79da9aed5d9e41c482e315d209db4a7b/kok-1-1.jpg?q=50&fm=jpg&w=800" className="h-80 w-[700px]" alt="Pic" />
//     </div>
    
//     {/* Content  box */}
//     <div className="flex items-center justify-center flex-col   h-52">

//         <p className="text-xl font-bold">CLEANING.MOVING</p>
      
      
//           <p className=" border-black border-b w-20 text-center mt-4" ></p>
//           <p className="text-3xl font-medium mt-2">Checklist for move out  </p>
//           <p  className="text-3xl font-medium mt-2" >cleaning</p>
         
//       </div>
    
    
//     </div>
    
    
    
//     </div>

//     </div>

    
// {/* Button */}

// <button className="px-5 py-3 text-lg font-semibold rounded-lg overflow-hidden relative group cursor-pointer bg-[#044946]  hover:scale-105 duration-[700ms]">
//                 <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-[#1fa299] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
//                 <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
//                     MORE TIPS
//                 </span>
//             </button>



    
//     </div>


//     </>
//     );


// }

// export default Movingtip;