const Work=()=>{

    return (
        <div>


        
        
        <div class="h-fit bg-[#d1dce7] ">
            <h3 className="text-5xl font-medium pt-28">How does it <span className='text-purple-500'>Work</span></h3>
            
         {/* line content */}
         <div className="w-full  flex justify-center mt-8">
         
         <p className=" border-black border-2 w-20 hover:w-[550PX] text-center transition-all duration-300 transform origin-center scale-100 delay-200 hover:border-gray-400" ></p>
         
         </div>
         
         {/* row begins */}
         <div className="   mt-14 mx-24 h-fit    pb-24  ">
         
             <div className="flex sm:flex-row flex-col justify-between">
         {/* first row */}
         <div className="flex my-3 sm:my-0 flex-col ">
         
         
             <div className=" ml-1 flex  flex-col items-center justify-center">
                 <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full  hover:bg-white rotations">

                     <img src="https://images.ctfassets.net/37vwfxlcawdb/lsgSreXcBk5IAF61oitpa/c140e462eeacdd57de4147f29141fdd6/Hemfrid_Piktogram_Boka_online_64x64px-01.svg"  className="h-12"  alt="img_icon"/>                
                 </div>
             
             
                
                 <h1 className="font-bold mt-9 text-lg leading-10">BOOK ONLINE </h1>
               
             </div>
          
          
             
         <p  className="text-base">
Simply book online to get a quote that <br /> fits your needs..</p>
         
         
             
         
         
         
         </div>
         
         {/* second row */}
         <div className="flex flex-col my-3 sm:my-0 ">
         
         
             <div className=" ml-1 flex  flex-col items-center justify-center">
                 <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full  hover:bg-white rotations">
         
               
                     <img src="https://images.ctfassets.net/37vwfxlcawdb/NNOembCSzySTh6zEwVfCi/1f035c76c864d50936a3d2e36ee6a3f8/Hemfrid_Piktogram_Sta__dat_och_klart_64x64px-01.svg"  className="h-12"  alt="img_icon"/>   
                  
             
                 </div>
             
             
                
                 <h1 className="font-bold mt-9 text-lg leading-10">SPARKLING CLEAN</h1>
               
             </div>
          
          
             <p  className="text-base">We put extra energy into your kitchen <br /> and bathroom, as we know that these<br />often need a little extra love. </p>
         
         
             
         
         
         
         </div>
         
         
         {/* Third row */}
         
         <div className="flex  my-3 sm:my-0 flex-col">
         
         
             <div className=" ml-1 flex  flex-col items-center justify-center">
                 <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full  hover:bg-white rotations">
         
               
                     <img src="https://images.ctfassets.net/37vwfxlcawdb/5R1EJRc30edcy8XNZoZCRK/653f0523404fd441b98921cafdbacb97/Hemfrid_Piktogram_Pusselbitar_64x64px-01.svg"  className="h-12"  alt="img_icon"/>   
                  
             
                 </div>
             
             
                
                 <h1 className="font-bold mt-9 text-lg leading-10">CUSTOMIZED TO YOU
                </h1>
             </div>
          
          
             
         <p  className="text-base">Of course, you can add more steps to <br />your cleaning tasks, such as cleaning <br/>windows and ovens.   </p>
         
         
             
         
         
         
         </div>
         
         
          </div>
         
         </div>
         {/* row ends */}
         
         </div>
        
                </div>
    );

}

export default  Work;