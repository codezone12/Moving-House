const MWork=()=>{

    return (
        <div>
        
        <div class="h-fit bg-[#c4d0c7] ">
            <h3 className="text-5xl font-medium pt-28">How does it <span className="text-fuchsia-800">Work</span></h3>
            
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
                 <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full hover:bg-white rotations">
         
               
                     <img src="https://images.ctfassets.net/37vwfxlcawdb/2R9E1GsuoX27qaAe1YO2gB/d6880e276d8f8e5ac2cbed8440a957bb/Hemfrid_Piktogram_Kontorssta__d_64x64px-01.svg"  className="h-12"  alt="img_icon"/>   
                  
             
                 </div>
             
             
                
                 <h1 className="font-bold mt-9 text-lg leading-10">ALL ROOMS </h1>
               
             </div>
          
          
             
         <p  className="text-base">
         All rooms are thoroughly cleaned from <br /> floor to ceiling. We dust, vacuum and <br/> wipe. </p>
         
         
             
         
         
         
         </div>
         
         {/* second row */}
         <div className="flex flex-col my-3 sm:my-0 ">
         
         
             <div className=" ml-1 flex  flex-col items-center justify-center">
                 <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full hover:bg-white rotations">
         
               
                     <img src="https://images.ctfassets.net/37vwfxlcawdb/NNOembCSzySTh6zEwVfCi/1f035c76c864d50936a3d2e36ee6a3f8/Hemfrid_Piktogram_Sta__dat_och_klart_64x64px-01.svg"  className="h-12"  alt="img_icon"/>   
                  
             
                 </div>
             
             
                
                 <h1 className="font-bold mt-9 text-lg leading-10">SPARKLING CLEAN</h1>
               
             </div>
          
          
             <p  className="text-base">We put extra energy into your kitchen <br /> and bathroom, as we know that these<br />often need a little extra love. </p>
         
         
             
         
         
         
         </div>
         
         
         {/* Third row */}
         
         <div className="flex  my-3 sm:my-0 flex-col">
         
         
             <div className=" ml-1 flex  flex-col items-center justify-center">
                 <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full hover:bg-white rotations">
         
               
                     <img src="https://images.ctfassets.net/37vwfxlcawdb/1NZbAfmuZTsGAuLez0utEC/dba8be94dd3c2ad48c39dde3296aea63/Hemfrid_Piktogram_Fo__nsterputs_64x64px-01.svg"  className="h-12"  alt="img_icon"/>   
                  
             
                 </div>
             
             
                
                 <h1 className="font-bold mt-9 text-lg leading-10">WINDOW CLEANING
                </h1>
               
             </div>
          
          
             
         <p  className="text-base">aturally, window cleaning is included in <br />your move-out cleaning, since we know<br/>that this is the detail that makes a <br/> difference! </p>
         
         
             
         
         
         
         </div>
         
         
          </div>
         
         </div>
         {/* row ends */}
         
         </div>
        
                </div>
    );

}
export default MWork;