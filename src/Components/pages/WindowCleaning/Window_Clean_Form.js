import React, { useState } from 'react'
import ExclimatryMark from '../../../Assets/images/exclimaterymar.png'
import '../../../Assets/css/window_cleaning.css'



const WindowCleaning = () => {
    const [numberOfWindows, setNumberOfWindows] = useState(0);
    const [showWithoutMullions, setShowWithoutMullions] = useState(0);
    const [showWithMullions, setShowWithMullions] = useState(0);
    const [showOverhangedWindows, setShowOverhangedWindows] = useState(0);
    const [showGlassedBalcony, setShowGlassedBalcony] = useState(0);
    const [handover, setHandover] = useState('');

    const handleHandoverChange = (value) => {
        setHandover(value);
      };
      
    return (
        <div className="container mx-auto my-auto pt-10 mb-20" style={{ maxWidth: "70%" }}>
            <div style={{ display: 'grid', gridTemplateColumns: '70% 30%', gap: '30px' }}>
                <div className='text-center'>
                    <div className="pt-20 font-normal text-5xl" style={{ fontFamily: "Tiempos Headline,serif" }}>Window Cleaning</div>
                    <div className="w-full mt-8  flex justify-center items-center mb-5">
                        <p className=" border-black border w-20 text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100" ></p>
                    </div>
                    <div className='mt-20'>
                        <div className='flex space-x-2 mt-5 text-left'>
                            <p className='text-2xl font-semibold mr-4'>
                                The number of windows you want us to clean*
                            </p>
                            <p className='text-sm font-medium' style={{ marginLeft: 'auto' }}>
                                <a href='#' className='flex'>
                                    <img src={ExclimatryMark} alt="" className='w-4 h-4 self-center' />
                                    <p>This is how we count windows</p>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className='container mt-4'>
                        <div className='border rounded-md mb-4 p-5 border-[#d5d2c4] bg-[#FFFFFF]'>
                            <div className='flex'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 17 26" width="17"><path d="m13.8461538 24h-12.69230765c-.73478365 0-1.15384615-.447-1.15384615-1.2v-21.6c0-.753.4190625-1.2 1.15384615-1.2h12.69230765c.7347837 0 1.1538462.447 1.1538462 1.2v21.6c0 .753-.4190625 1.2-1.1538462 1.2z" fill="none" stroke="#1e1e1e" stroke-width="1.5" transform="translate(1 1)" /></svg>
                                    <p className='text-xl font-normal ml-4'>Without mullions</p>
                                </div>
                                <div className='flex items-center' style={{ marginLeft: 'auto' }}>
                                    <button className='negative-icon opacity-40 ' onClick={() => setShowWithoutMullions(showWithoutMullions > 0 ? showWithoutMullions - 1 : 0)}>-</button>
                                    <p className='text-2xl font-semibold mx-4 items-center'>{showWithoutMullions}</p>
                                    <button className='plus-icon bg-black' onClick={() => setShowWithoutMullions(showWithoutMullions + 1)}>+</button>
                                </div>
                            </div>
                            {showWithoutMullions > 0 && (<div>

                                <div>
                                    <div className="w-full mt-4 flex justify-center items-center">
                                        <p className=" border-gray-200 border w-full text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100" ></p>
                                    </div>
                                    <p className='text-xl text-left font-semibold my-3'>How many sides need cleaning?*</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-lg flex gap-2 font-normal'>
                                        <input type="radio" name="sides" value={'Double-sided – 4 sides'} className=" w-7 ml-auto" id='double-side' />
                                        <label className="text-lg cursor-pointer" htmlFor="double-side">{"Double-sided – 4 sides"}</label>
                                    </p>
                                    <p className='text-lg flex gap-2 font-normal'>
                                        <input type="radio" name="sides" value={'Single-sided – 2 sides'} className="w-7 ml-auto" id='single-side' />
                                        <label className="text-lg cursor-pointer" htmlFor="single-side"> {"Single-sided – 2 sides"}</label>
                                    </p>
                                </div>
                            </div>
                            )}
                        </div>
                        <div className='border rounded-md mb-4 p-5 border-[#d5d2c4] bg-[#FFFFFF]'>
                            <div className='flex'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 17 26" width="17"><g fill="none" fill-rule="evenodd" stroke="#1e1e1e" stroke-width="1.5" transform="translate(1 1)"><path d="m13.8461538 24h-12.69230765c-.73478365 0-1.15384615-.447-1.15384615-1.2v-21.6c0-.753.4190625-1.2 1.15384615-1.2h12.69230765c.7347837 0 1.1538462.447 1.1538462 1.2v21.6c0 .753-.4190625 1.2-1.1538462 1.2z" /><g stroke-linecap="round"><path d="m0 16.2h12.3699095" /><path d="m0 7.8h15" /><path d="m7.18934911.12307692v23.63076928" /></g></g></svg>
                                    <p className='text-xl font-normal ml-4'>With mullions</p>
                                </div>
                                <div className='flex items-center' style={{ marginLeft: 'auto' }}>
                                    <button className='negative-icon opacity-40 ' onClick={() => setShowWithMullions(showWithMullions > 0 ? showWithMullions - 1 : 0)}>-</button>
                                    <p className='text-2xl font-semibold mx-4 flex items-center'>{showWithMullions}</p>
                                    <button className='plus-icon bg-black' onClick={() => setShowWithMullions(showWithMullions + 1)}>+</button>
                                </div>
                            </div>
                            {showWithMullions > 0 && (<div>

                                <div>
                                    <div className="w-full mt-4 flex justify-center items-center">
                                        <p className=" border-gray-200 border w-full text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100" ></p>
                                    </div>
                                    <p className='text-xl text-left font-semibold my-3'>How many sides need cleaning?*</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-lg flex gap-2 font-normal'>
                                        <input type="radio" name="sides" value={'Double-sided – 4 sides'} className=" w-7 ml-auto" id='double-side' />
                                        <label className="text-lg cursor-pointer" htmlFor="double-side">{"Double-sided – 4 sides"}</label>
                                    </p>
                                    <p className='text-lg flex gap-2 font-normal'>
                                        <input type="radio" name="sides" value={'Single-sided – 2 sides'} className="w-7 ml-auto" id='single-side' />
                                        <label className="text-lg cursor-pointer" htmlFor="single-side"> {"Single-sided – 2 sides"}</label>
                                    </p>
                                </div>
                            </div>
                            )}
                        </div>
                        <div className='border rounded-md mb-4 p-5 border-[#d5d2c4] bg-[#FFFFFF]'>
                            <div className='flex'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 17 26" width="17"><g fill="none" fill-rule="evenodd" stroke="#1e1e1e" stroke-width="1.5" transform="translate(1 1)"><path d="m13.8461538 24h-12.69230765c-.73478365 0-1.15384615-.447-1.15384615-1.2v-21.6c0-.753.4190625-1.2 1.15384615-1.2h12.69230765c.7347837 0 1.1538462.447 1.1538462 1.2v21.6c0 .753-.4190625 1.2-1.1538462 1.2z" /><path d="m3 7.2h11.3699095" stroke-linecap="round" /></g></svg>
                                    <p className='text-xl font-normal ml-4'>Overhanged windows</p>
                                </div>
                                <div className='flex items-center' style={{ marginLeft: 'auto' }}>
                                    <button className='negative-icon opacity-40 ' onClick={() => setShowOverhangedWindows(showOverhangedWindows > 0 ? showOverhangedWindows - 1 : 0)}>-</button>
                                    <p className='text-2xl font-semibold mx-4'>{showOverhangedWindows}</p>
                                    <button className='plus-icon bg-black' onClick={() => setShowOverhangedWindows(showOverhangedWindows + 1)}>+</button>
                                </div>
                            </div>
                            {showOverhangedWindows > 0 && (<div>

                                <div>
                                    <div className="w-full mt-4 flex justify-center items-center">
                                        <p className=" border-gray-200 border w-full text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100" ></p>
                                    </div>
                                    <p className='text-xl text-left font-semibold my-3'>How many sides need cleaning?*</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-lg flex gap-2 font-normal'>
                                        <input type="radio" name="sides" value={'Double-sided – 4 sides'} className=" w-7 ml-auto" id='double-side' />
                                        <label className="text-lg cursor-pointer" htmlFor="double-side">{"Double-sided – 4 sides"}</label>
                                    </p>
                                    <p className='text-lg flex gap-2 font-normal'>
                                        <input type="radio" name="sides" value={'Single-sided – 2 sides'} className="w-7 ml-auto" id='single-side' />
                                        <label className="text-lg cursor-pointer" htmlFor="single-side"> {"Single-sided – 2 sides"}</label>
                                    </p>
                                </div>
                            </div>
                            )}
                        </div>
                        <div className='border rounded-md mb-4 p-5 border-[#d5d2c4] bg-[#FFFFFF]'>
                            <div className='flex'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 26 26" width="26"><g fill="none" fill-rule="evenodd" stroke="#1e1e1e" stroke-width="1.5" transform="translate(1 1)"><path d="m22.5480862 23.7538462h-21.2194462c-.66658461 0-1.20516923-.5395693-1.20516923-1.2061539v-21.21846153c0-.66658462.53858462-1.20615385 1.20516923-1.20615385h21.2194462c.6665846 0 1.2061538.53956923 1.2061538 1.20615385v21.21846153c0 .6665846-.5395692 1.2061539-1.2061538 1.2061539z" /><g stroke-linecap="round"><path d="m.12307692 14.7692308h23.63076928" /><path d="m8 3.46153846v10.81538464" /><path d="m15.3846154.12307692v14.15384618" /></g></g></svg>
                                    <p className='text-xl font-normal ml-4'>Glassed Balcony</p>
                                </div>
                                <div className='flex items-center' style={{ marginLeft: 'auto' }}>
                                    <button className='negative-icon opacity-40' onClick={() => setShowGlassedBalcony(showGlassedBalcony > 0 ? showGlassedBalcony - 1 : 0)}>-</button>
                                    <p className='text-2xl font-semibold mx-4'>{showGlassedBalcony}</p>
                                    <button className='plus-icon bg-black' onClick={() => setShowGlassedBalcony(showGlassedBalcony + 1)}>+</button>
                                </div>
                            </div>
                            {showGlassedBalcony > 0 && (<div>
                                <div>
                                    <div className="w-full mt-4 flex justify-center items-center">
                                        <p className=" border-gray-200 border w-full text-center hover:w-[400PX] hover:border-gray-500  transition-all duration-300 transform origin-center scale-100" ></p>
                                    </div>
                                    <p className='text-xl text-left font-semibold my-3'>Type of balcony?*</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-lg flex gap-2 font-normal'>
                                        <input type="radio" name="sides" value={'Glassed balcony'} className=" w-7 ml-auto" id='Glassed-balcony' />
                                        <label className="text-lg cursor-pointer" htmlFor="Glassed-balcony">{"Glassed balcony"}</label>
                                    </p>
                                    <p className='text-lg flex gap-2 font-normal'>
                                        <input type="radio" name="sides" value={'Glass railing only'} className="w-7 ml-auto" id='Galss-railing' />
                                        <label className="text-lg cursor-pointer" htmlFor="Galss-railing"> {"Glass railing only"}</label>
                                    </p>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-3 rounded-lg p-4">
                        <p className="text-2xl text-left mb-5 font-semibold">Should something be added?</p>
                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                id="frame_wash"
                                name="pets"
                                className="mr-4 h-6 w-6 cursor-pointer border-gray-400 rounded-xl"
                            />
                            <label className="text-lg cursor-pointer" htmlFor="frame_wash">
                                Clean window frames
                            </label>
                        </div>

                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                id="ladder"
                                name="pets"
                                className="mr-4 h-6 w-6 cursor-pointer border-gray-400 rounded-xl"
                            />
                            <label className="text-lg cursor-pointer" htmlFor="ladder">
                                Ladder needed
                            </label>
                        </div>
                        <p className="text-2xl text-left mb-2 font-normal">Is there anything else we need to know?</p>
                        <div className="flex items-center mb-6">
                            <input
                                type="text"
                                name=""
                                className="border w-full rounded-md mb-4 p-5 border-[#d5d2c4]"
                            />
                        </div>
                        <p className=" border-[#d6d2c4] border ms-2"></p>
                    </div>

                    <div className="mt-3 rounded-lg p-4">
                        <p className="text-xl text-left mb-5 font-semibold">Do you have pets ?</p>
                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                id="cat"
                                name="pets"
                                className="mr-4 h-6 w-6 cursor-pointer border-gray-400 rounded-xl"
                            />
                            <label className="text-lg cursor-pointer" htmlFor="cat">
                                Cat
                            </label>
                        </div>

                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                id="dog"
                                name="pets"
                                className="mr-4 h-6 w-6 cursor-pointer border-gray-400 rounded-xl"
                            />
                            <label className="text-lg cursor-pointer" htmlFor="dog">
                                Dog
                            </label>
                        </div>
                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                id="other"
                                name="pets"
                                className="mr-4 h-6 w-6 cursor-pointer border-gray-400 rounded-xl"
                            />
                            <label className="text-lg cursor-pointer" htmlFor="other">
                                Other animal
                            </label>
                        </div>
                    </div>



                    <h4 className='font-semibold text-left mb-3 text-xl'>Access*</h4>
                    <div className='border rounded-md mb-2 p-5 border-[#d5d2c4]'>
                        {/* Radio Button 1 */}
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="open" className="cursor-pointer flex items-center justify-between w-full" >
                                <p className='text-xl font-normal'>I will open the door for Hemfrid</p>
                                <div className={`w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center ${handover === 'open' ? 'bg-black' : 'bg-white'}`} >
                                    {handover === 'open' && (
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                    )}
                                </div>
                            </label>
                            <input
                                type="radio"
                                id="open"
                                name="handover"
                                checked={handover === 'open'}
                                onChange={() => handleHandoverChange('open')}
                                className="hidden"
                            />
                        </div>

                        <p className="mb-2 border-[#d6d2c4] border"></p>

                        {/* Radio Button 2 */}
                        <div className="flex my-auro">
                            <label className="text-xl cursor-pointer flex items-center jutify-between w-full font-normal" htmlFor="leave">
                                <p className='text-left'>I will leave the keys at the Hemfrid office 12 pm the work day before, at the latest</p>
                                <div className={`w-8 h-7 rounded-full border border-gray-300 flex items-center justify-center ${handover === 'leave' ? 'bg-black' : 'bg-white'}`} >
                                    {handover === 'leave' && (
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                    )}
                                </div>
                            </label>
                            <input
                                type="radio"
                                name="handover"
                                value={'leave'}
                                checked={handover === 'leave'}
                                onChange={() => handleHandoverChange('leave')}
                                className="hidden" id='leave'
                            />
                        </div>

                        <p className="mb-2 border-[#d6d2c4] border"></p>

                        {/* Radio Button 3 */}
                        <div className="flex my-auto">
                            <label className="text-xl cursor-pointer flex items-center justify-between w-full font-normal" htmlFor="customer">
                                <p className='text-left'>I'm a customer and have already left my keys</p>
                                <div className={`w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center ${handover === 'customer' ? 'bg-black' : 'bg-white'}`} >
                                    {handover === 'customer' && (
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                    )}
                                </div>
                            </label>
                            <input
                                type="radio"
                                name="handover"
                                value={'customer'}
                                checked={handover === 'customer'}
                                onChange={() => handleHandoverChange('customer')}
                                className="hidden" id='customer'
                            />
                        </div>
                    </div>

                    <p className="text-4 text-left italic my-2"><a href='#' className='font-semibold underline'>Here</a> you will find the address and opening hours of your nearest Hemfrid office where you can hand over the key.</p>
                    <div className='mt-10' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <button style={{ padding: '15px 50px 15px 50px' }} className="bg-[#000] font-bold uppercase text-white p-5 rounded text-bold">
                            Move On
                        </button>
                    </div>
                </div>
                <div className='mt-20 pb-5' style={{ backgroundColor: '#d1dce7', width: '300px', height: 'fit-content' }}>
                    <div className='flex-col mt-5 px-5'>
                        <p className='text-2xl text-normal text-[#003b5c] text-left' style={{ fontFamily: 'Tiempos Headline,serif' }}>Your booking</p>
                    </div>
                    <div className='flex mt-5 px-5'>
                        <p className='text-lg text-normal text-[#003b5c] text-left flex-1'>Fönsterputs</p>
                        <p className='text-gl font-bold text-[#003b5c]'>1105 kr</p>
                    </div>
                    <div className="w-full mt-3 flex justify-center px-5 items-center mb-5">

                        <p className=" border-[#003b5c] border opacity-10 w-full text-center " ></p>

                    </div>
                    <div className='flex mt-5 px-5'>
                        <p className='text-normal text-normal text-[#003b5c] px-1 bg-[#e8eef3] border text-left' style={{ display: "inline-block" }}>Discount code</p>
                        <p className='text-xl font-semibold text-right flex-1 text-[#003b5c]'>-221 kr</p>
                    </div>
                    <div className="w-full mt-3 flex justify-center px-5 items-center mb-5">

                        <p className=" border-[#003b5c] border opacity-10 w-full text-center " ></p>

                    </div>
                    <div className='mt-5 px-5'>
                        <p className='text-xl font-semibold text-[#003b5c] text-left'>Date and time</p>
                        <p className='text-xl text-left font-semibold'>-</p>
                    </div>
                    <div className="w-full mt-3 flex justify-center px-5 items-center mb-5">

                        <p className=" border-[#003b5c] border opacity-10 w-full text-center " ></p>

                    </div>
                    <div className='flex mt-5 px-5'>
                        <div className='flex-1'>
                            <p className='text-lg text-[#003b5c] text-left flex-1'>Total</p>
                            <p className='text-sm text-[#003b5c] text-left flex-1 ms-1'>with RUT-deduction</p>
                        </div>
                        <p className='text-xl font-semibold text-[#003b5c] my-auto'>-221 kr</p>
                    </div>
                    <div className="w-full mt-3 flex justify-center px-5 items-center mb-5">

                        <p className=" border-[#003b5c] border opacity-10 w-full text-center " ></p>

                    </div>
                    <div className='flex mt-5 px-5'>
                        <p className='text-normal text-normal text-[#003b5c] text-left' style={{ display: "inline-block" }}>Discount code</p>
                        <p className='text-normal font-normal text-right flex-1 text-[#003b5c] underline'>FP1123</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindowCleaning