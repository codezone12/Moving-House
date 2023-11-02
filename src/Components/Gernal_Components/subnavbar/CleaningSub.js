import {IoIosArrowForward} from 'react-icons/io';
import './cleaningsub.css'
import { Link } from 'react-router-dom';

const CleaningSub = ({setisHover}) => {

    return ( 
        <div className='absolute w-full bg-gray-100 top-16 left-0 z-50 flex flex-col items-start transition-all duration-700'
                        onMouseEnter={() => setisHover("Cleaning")}
                        onMouseLeave={() => setisHover('')}
                    >
                        <div className='flex flex-col gap-y-10 px-24 py-8 w-1/2 '>
                            <Link className='text-2xl text-start flex items-end'>
                            <img className="w-10 hover:shake" src="https://images.ctfassets.net/37vwfxlcawdb/40uG0fMTP0zEqxAaNXwlSH/93887b204bd4f0da127e8ddabd5cc082/Hemfrid_Piktogram_Storsta__dning_64x64px-01.svg"  alt="" />
                               <p className='px-4'>Everything For Your Home</p> 
                               <IoIosArrowForward className='ml-auto w-9 h-9'/>
                               </Link>
<ul className='grid grid-cols-2 gap-8 text-xl'>
  <Link to='/Home_clean' className='col-span-1 border-b-2 border-gr1 py-2 flex hover:border-rounded'>
    <li className="square-border hover:font-semibold">Home Cleaning</li>
    <IoIosArrowForward className='ml-auto w-7 h-7' />
  </Link>
  <Link to='/Window_clean' className='col-span-1 border-b-2 border-gr1 py-2 flex'>
    <li className="square-border hover:font-semibold">Window Cleaning</li>
    <IoIosArrowForward className='ml-auto w-7 h-7' />
  </Link>
  <Link to='/Deep_Clean' className='col-span-1 border-b-2 border-gr1 py-2 flex'>
    <li className="square-border hover:font-semibold">Deep Cleaning</li>
    <IoIosArrowForward className='ml-auto w-7 h-7' />
  </Link>
  <Link to='/Moving_Home' className='col-span-1 border-b-2 border-gr1 py-2 flex'>
    <li className="square-border hover:font-semibold">Move Out Cleaning</li>
    <IoIosArrowForward className='ml-auto w-7 h-7' />
  </Link>
</ul>



</div>

</div>
     );
}
 
export default  CleaningSub;