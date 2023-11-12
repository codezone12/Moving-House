import React from 'react'
import ExclimatryMark from '../../../Assets/images/exclimaterymar.png'
import '../../../Assets/css/window_cleaning.css'
import PositiveIcon from '../../../Assets/images/PositiveIcon.png'
import NegativeIcon from '../../../Assets/images/NegativeIcon.png'



const WindowCleaning = () => {
    return (
        <div className="container mx-auto my-auto pt-10 mb-20" style={{ maxWidth: "70%" }}>
            <div style={{ display: 'grid', gridTemplateColumns: '70% 30%', gap: '30px' }}>
                <div className='text-center'>
                    <div className="pt-20 font-normal text-5xl">Window Cleaning</div>
                    <div className="w-full mt-8  flex justify-center items-center mb-5">

                        <p className=" border-black border w-20 text-center " ></p>

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
                        <div className='flex border rounded-md mb-4 p-5 border-[#d5d2c4]'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 17 26" width="17"><path d="m13.8461538 24h-12.69230765c-.73478365 0-1.15384615-.447-1.15384615-1.2v-21.6c0-.753.4190625-1.2 1.15384615-1.2h12.69230765c.7347837 0 1.1538462.447 1.1538462 1.2v21.6c0 .753-.4190625 1.2-1.1538462 1.2z" fill="none" stroke="#1e1e1e" stroke-width="1.5" transform="translate(1 1)" /></svg>
                                <p className='text-xl font-semibold ml-4'>Without mullions</p>
                            </div>
                            <div className='flex items-center' style={{ marginLeft: 'auto' }}>
                                <a href='#'>
                                    <button className='negative-icon opacity-40 '>-</button>
                                </a>
                                <p className='text-2xl font-semibold mx-4 items-center'>1</p>
                                <a href='#'>
                                    <button className='plus-icon bg-black'>+</button>
                                </a>
                            </div>
                        </div>
                        <div className='flex border rounded-md mb-4 p-5 border-[#d5d2c4]'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 17 26" width="17"><g fill="none" fill-rule="evenodd" stroke="#1e1e1e" stroke-width="1.5" transform="translate(1 1)"><path d="m13.8461538 24h-12.69230765c-.73478365 0-1.15384615-.447-1.15384615-1.2v-21.6c0-.753.4190625-1.2 1.15384615-1.2h12.69230765c.7347837 0 1.1538462.447 1.1538462 1.2v21.6c0 .753-.4190625 1.2-1.1538462 1.2z" /><g stroke-linecap="round"><path d="m0 16.2h12.3699095" /><path d="m0 7.8h15" /><path d="m7.18934911.12307692v23.63076928" /></g></g></svg>
                                <p className='text-xl font-semibold ml-4'>With mullions</p>
                            </div>
                            <div className='flex items-center' style={{ marginLeft: 'auto' }}>
                                <a href='#'>
                                    <button className='negative-icon opacity-40 '>-</button>
                                </a>
                                <p className='text-2xl font-semibold mx-4 flex items-center'>1</p>
                                <a href='#'>
                                    <button className='plus-icon bg-black'>+</button>                                </a>
                            </div>
                        </div>
                        <div className='flex border rounded-md mb-4 p-5 border-[#d5d2c4]'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 17 26" width="17"><g fill="none" fill-rule="evenodd" stroke="#1e1e1e" stroke-width="1.5" transform="translate(1 1)"><path d="m13.8461538 24h-12.69230765c-.73478365 0-1.15384615-.447-1.15384615-1.2v-21.6c0-.753.4190625-1.2 1.15384615-1.2h12.69230765c.7347837 0 1.1538462.447 1.1538462 1.2v21.6c0 .753-.4190625 1.2-1.1538462 1.2z" /><path d="m3 7.2h11.3699095" stroke-linecap="round" /></g></svg>
                                <p className='text-xl font-semibold ml-4'>Overhanged windows</p>
                            </div>
                            <div className='flex items-center' style={{ marginLeft: 'auto' }}>
                                <a href='#'>
                                    <button className='negative-icon opacity-40 '>-</button>
                                </a>
                                <p className='text-2xl font-semibold mx-4'>1</p>
                                <a href='#'>
                                    <button className='plus-icon bg-black'>+</button>                                </a>
                            </div>
                        </div>
                        <div className='flex border rounded-md mb-4 p-5 border-[#d5d2c4]'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 26 26" width="26"><g fill="none" fill-rule="evenodd" stroke="#1e1e1e" stroke-width="1.5" transform="translate(1 1)"><path d="m22.5480862 23.7538462h-21.2194462c-.66658461 0-1.20516923-.5395693-1.20516923-1.2061539v-21.21846153c0-.66658462.53858462-1.20615385 1.20516923-1.20615385h21.2194462c.6665846 0 1.2061538.53956923 1.2061538 1.20615385v21.21846153c0 .6665846-.5395692 1.2061539-1.2061538 1.2061539z" /><g stroke-linecap="round"><path d="m.12307692 14.7692308h23.63076928" /><path d="m8 3.46153846v10.81538464" /><path d="m15.3846154.12307692v14.15384618" /></g></g></svg>
                                <p className='text-xl font-semibold ml-4'>Glassed Balcony</p>
                            </div>
                            <div className='flex items-center' style={{ marginLeft: 'auto' }}>
                                <a href='#'>
                                    <button className='negative-icon opacity-40 '>-</button>
                                </a>
                                <p className='text-2xl font-semibold mx-4'>1</p>
                                <a href='#'>
                                    <button className='plus-icon bg-black'>+</button>                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 rounded-lg p-4">
                        <p className="text-2xl text-left mb-5 font-semibold">Should something be added?</p>
                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                id="frame_wash"
                                name="pets"
                                className="mr-4 h-6 w-6 cursor-pointer"
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
                                className="mr-4 h-6 w-6 cursor-pointer"
                            />
                            <label className="text-lg cursor-pointer" htmlFor="ladder">
                                Ladder needed
                            </label>
                        </div>
                        <p className="text-2xl text-left mb-5 font-semibold">Is there anything else we need to know?</p>
                        <div className="flex items-center mb-6">
                            <input
                                type="text"
                                name=""
                                className="border w-full rounded-md mb-4 p-5 border-[#d5d2c4]"
                            />
                        </div>
                        <p className=" border-[#d6d2c4] border"></p>
                    </div>

                    <div className="mt-3 rounded-lg p-4">
                        <p className="text-2xl text-left mb-5 font-semibold">Do you have pets at home?</p>
                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                id="cat"
                                name="pets"
                                className="mr-4 h-6 w-6 cursor-pointer"
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
                                className="mr-4 h-6 w-6 cursor-pointer"
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
                                className="mr-4 h-6 w-6 cursor-pointer"
                            />
                            <label className="text-lg cursor-pointer" htmlFor="other">
                                Other animal
                            </label>
                        </div>
                    </div>




                    <div className='border rounded-md mb-2 p-5 border-[#d5d2c4]'>
                        <div className="flex mb-6">
                            <label className="text-2xl cursor-pointer" htmlFor="open">
                                I open for Hemfrid
                            </label>
                            <input
                                type="radio"
                                name="handover"
                                value={'open'}
                                className="w-7 ml-auto" id='open'
                            />
                        </div>
                        <p className="mb-2 border-[#d6d2c4] border"></p>
                        <div className="flex mb-6">
                            <label className="text-2xl cursor-pointer text-left" htmlFor="leave">
                                I leave the key at Hemfrid's office no later than 12 a working day before
                            </label>
                            <input
                                type="radio"
                                name="handover"
                                value={'leave'}
                                className="w-9 ml-auto" id='leave'
                            />
                        </div>
                        <p className="mb-2 border-[#d6d2c4] border"></p>
                        <div className="flex mb-6">
                            <label className="text-2xl cursor-pointer" htmlFor="customer">
                                I am already a customer and have left the key before
                            </label>
                            <input
                                type="radio"
                                name="handover"
                                value={'customer'}
                                className=" w-7 ml-auto" id='customer'
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
                <div className='mt-20' style={{ backgroundColor: '#d1dce7', width: '300px', height: '250px' }}>
                    <div className='d-flex flex-col mt-5'>
                        <p className='text-xl'>Welcome to a simpler life</p>
                        <p className='text-base text-left px-5 mt-3'>We look forward to taking care of your home. During the start-up meeting, we will go over your home and your wishes. The price is based on your unique conditions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindowCleaning