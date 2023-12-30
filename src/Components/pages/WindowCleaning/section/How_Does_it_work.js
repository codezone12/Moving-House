const Work=()=>{

    return (
        <div>

{/* <div className="w-full bg-cover "style={{ backgroundImage: "url('https://images.ctfassets.net/37vwfxlcawdb/4O2QGPHHml4qRJa29CYTXb/0b5bbc12687421dafbd7685898fd3eb3/Fonster-blomma-16-9.jpg?q=50&fm=webp&w=2560')", height: "45vw" }}>
</div> */}


<div class="h-fit bg-[#d1dce7] ">
    <h3 className="text-5xl font-medium pt-28"><span className="animate-pulse duration-200 text-gray-500">How </span>does it <span className="text-green-500">work</span></h3>
    
 {/* line content */}
 <div className="w-full  flex justify-center mt-8">
 
 <p className=" border-black border-2 w-20 hover:w-[550PX] text-center transition-all duration-300 transform origin-center scale-100 delay-200 hover:border-gray-400" ></p>

 
 </div>
 
 {/* row begins */}
 <div className="   mt-14 mx-24 h-fit    pb-24  ">
 
     <div className="flex md:flex-row  flex-col gap-4 justify-between">
 {/* first row */}
 <div className="flex flex-col ">
     <div className=" flex  flex-col items-center justify-center">
         <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full  hover:bg-white rotations">        
             <img src="https://images.ctfassets.net/37vwfxlcawdb/lsgSreXcBk5IAF61oitpa/c140e462eeacdd57de4147f29141fdd6/Hemfrid_Piktogram_Boka_online_64x64px-01.svg"  className="h-12"  alt="img_icon"/>                 
         </div>  
         <h1 className="font-bold mt-9 text-lg leading-10">BOOK ONLINE </h1>
     </div>      
 <p  className="text-base ">Schedule a cleaning day directly with us! <br /> State how many windows you want to <br/>have cleaned and which type of window <br/> they are.</p>
 </div>
 
 {/* second row */}
 <div className="flex flex-col ">
 
 
     <div className=" ml-1 flex  flex-col items-center justify-center">
         <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full  hover:bg-white rotations">
      
             <img src="https://images.ctfassets.net/37vwfxlcawdb/2R9E1GsuoX27qaAe1YO2gB/d6880e276d8f8e5ac2cbed8440a957bb/Hemfrid_Piktogram_Kontorssta__d_64x64px-01.svg"  className="h-12"  alt="img_icon"/>   
       
         </div>
             
         <h1 className="font-bold mt-9 text-lg leading-10">BEFORE WE COME</h1>
       
     </div>
  
  
     <p  className="text-base">Move furniture and remove objects from <br /> window sills. And if you have them, leave<br />out the keys for window locks. <br /> should be.</p>
 
 </div>
 
 
 {/* Third row */}
 
 <div className="flex  flex-col">
 
 
     <div className=" ml-1 flex  flex-col items-center justify-center">
         <div className="bg-[hsla(0,0%,100%,.4)]  self-center   h-36 w-36 flex items-center justify-center rounded-full  hover:bg-white rotations">
 
       
             <img src="https://images.ctfassets.net/37vwfxlcawdb/1NZbAfmuZTsGAuLez0utEC/dba8be94dd3c2ad48c39dde3296aea63/Hemfrid_Piktogram_Fo__nsterputs_64x64px-01.svg"  className="h-12"  alt="img_icon"/>   
          
     
         </div>
     
     
        
         <h1 className="font-bold mt-9 text-lg leading-10">CLEANED AND READY!
        </h1>
       
     </div>
  
  
     
 <p  className="text-base">Our professionals will clean your <br /> windows of splashes and dirt, so you can <br/>enjoy your beautiful view again!   </p>
 
 
     
 
 
 
 </div>
 
 
  </div>
 
 </div>
 {/* row ends */}
 
 </div>

        </div>
    );

}

export default  Work;