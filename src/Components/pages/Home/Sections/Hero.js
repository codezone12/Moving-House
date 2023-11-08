
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ZIPCODES } from '../../../Constants/Constant';
import rightIcon from '../../../../Assets/images/tick_icon.png'
import wrongIcon from '../../../../Assets/images/Cross_red_circle.png'
import Booking from '../../Booking/Booking';
import { useLocation, useNavigate } from 'react-router';
const Hero = ({ history }) => {
  const [text, setText] = useState('');
  const [city, setCity] = useState('')
  const phrases = [' Home', ' Deep', ' Window', ' Move out'];
  const [code, setCode] = useState('')
  const [show, setShow] = useState(false)
  const zipcodeRef = useRef()
  let currentIndex = 0;
  const colorMapping = {
    ' Home': 'white',
    ' Deep': 'indigo',
    ' Window': 'gray',
    ' Move out': 'pink',
  };

  useEffect(() => {
    const typeText = () => {
      if (currentIndex < phrases.length) {
        setText(phrases[currentIndex]);
        currentIndex++;
      } else {
        currentIndex = 0;
        setText(phrases[currentIndex]);
        currentIndex++;
      }
    };

    const interval = setInterval(typeText, 3000);

    return () => clearInterval(interval);
  }, []);
  const handleInputChange = (e) => {
    const filteredCity = ZIPCODES.filter((item) => item?.zipcode == e.target.value)
    if (filteredCity) {
      setCode(e.target.value)
      setCity(filteredCity?.map((city => city.city)))
      setShow(true)
    }
    else {
      setCity('')
      setShow(false)
    }
  }
  const textColor = colorMapping[text] || 'black';
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/Booking', {
      state: {
        data: city
      }
    });
  }
  const handleRef = () => {
    zipcodeRef.current.focus()
  }
  return (
    <div className="bg-cover" style={{ backgroundImage: "url('https://images.ctfassets.net/37vwfxlcawdb/1TfE1UU6y8uJw1qSaSGma6/2ff488f042edf4fe6a7ce60a33c3abca/Startsida.jpg?q=50&fm=avif&w=1200')" }}>


      <div className="text-start mr-auto pt-48 md:px-28 px-10 text-white text-5xl font-medium font-['Young Serif'] ">


        <p className="">
          More <span className="text-yellow-500">quality of</span>
        </p>
        <p className=" mt-1">
          <span className="text-yellow-500">life</span> this fall
        </p>
        <span className='text-left font-bold' style={{ color: colorMapping[text] || 'black' }}>{text}</span>
        <div className=''>
          <span className='text-green-600'>Cleaning</span>
        </div>
        <div className="flex justify-start  w-1/2 md:w-2/5">
          <input className="bg-white focus:border-none focus:outline-none w-full text-black text-right text-lg p-3 rounded-l-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500"
            type='number' placeholder="ENTER ZIPCODE"
            value={code}
            ref={zipcodeRef}
            onChange={handleInputChange}
          />
          <div onClick={handleRef} className="flex justify-between bg-white focus:border-none focus:outline-none w-full text-black text-lg p-3 rounded-r-lg mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 transform transition-transform delay-200 hover:placeholder-gray-500">
            {show && <p className='text-left'>{city} </p>}
            {show && <p><img className='text-right' width="20px" height="10px" src={show ? rightIcon : wrongIcon} alt="tick_icon" /> </p>}
          </div>
        </div>
        <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">

          <button className="text-center text-['#fff']" onClick={handleNavigate} >CHOOSE SERVICES</button>
          <p className="text-center text-4xl  self-end absolute end-0 mr-4 "><svg height="20" viewBox="0 0 9 15" width="20" class="csw9N_C5 fiwAtSA" style={{ stroke: "#fff" }}   ><path d="m.958.995 6.51 6.51-6 6" fill="none" stroke-width="2"></path></svg></p>

        </div>
        <div className="text-2xl mt-10 pb-8 flex items-start font-normal">
          <ul>
            <li className="">  <svg height="28" width="28" viewBox="0 0 24 24" color='white' class="uiyb_O3 cfwk5OWE inline-block  mr-2" style={{ fill: "white" }}><g><path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path><path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path></g></svg>       Customized for you  &nbsp;</li>
            <li className="mt-4"> <svg height="28" width="28" viewBox="0 0 24 24" color='white' class="uiyb_O3 cfwk5OWE inline-block  mr-2" style={{ fill: "white" }}><g><path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path><path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path></g></svg>      Collective agreement</li>
            <li className="mt-4 ">  <svg height="28" width="28" viewBox="0 0 24 24" color='white' class="uiyb_O3 cfwk5OWE inline-block mr-3" style={{ fill: "white" }}><g><path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path><path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path></g></svg>                Insured &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</li>
          </ul>
        </div>
      </div>

    </div>

  );

}

export default Hero;