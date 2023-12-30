import {IoIosArrowForward} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './cleaningsub.css'

const MovingSub = ({setisHover}) => {

    return ( 
        <div className='absolute w-full bg-gray-100 top-16 left-0 z-50 flex flex-col items-start '
                        onMouseEnter={() => setisHover("Moving")}
                        onMouseLeave={() => setisHover('')}
                    >
                        <div className='flex flex-col gap-y-10 pl-64 py-8 w-1/2'>
                        <Link className='text-2xl text-start flex items-end'>
                            <img className="w-10 hover:shake" src="https://images.ctfassets.net/37vwfxlcawdb/5e2SSlRP2Oxtwh7V8TMlBU/61d589d79881b8faef21103b039c2263/Hemfrid_Piktogram_Flytthja__lp_64x64px-01.svg"  alt="" />
                               <p className='px-4'>Everything For Your Move</p> 
                               <IoIosArrowForward className='ml-auto w-9 h-9'/>
                               </Link>
<ul className='grid grid-cols-2 gap-8 text-xl'>
  <Link to='/Home_clean' className='col-span-1 border-b-2 border-gr1 py-2 flex hover:border-rounded'>
    <li className="square-border hover:font-semibold">Moving Service</li>
    <IoIosArrowForward className='ml-auto w-7 h-7' />
  </Link>
  <Link to='/Moving_Home' className='col-span-1 border-b-2 border-gr1 py-2 flex'>
  <li className="square-border">
    <span>Move Out Cleaning</span>
    <IoIosArrowForward className='ml-auto w-7 h-7' />
  </li>
</Link>

</ul>
                            
</div>
</div>
     );
}
 
export default MovingSub;