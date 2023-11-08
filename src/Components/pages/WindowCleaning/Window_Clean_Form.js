import React from 'react'
import ExclimatryMark from '../../../Assets/images/exclimaterymar.png'
import PhoneIcon from '../../../Assets/images/phone.svg'
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
                                <img src={PhoneIcon} alt="" className='w-6 h-7 self-center' />
                                <p className='text-xl font-semibold ml-4'>Without mullions</p>
                            </div>
                            <div className='flex' style={{ marginLeft: 'auto' }}>
                                <a href='#'>
                                    <img src={NegativeIcon} alt="" className='w-6 h-6 self-center rounded mt-1' />
                                </a>
                                <p className='text-2xl font-semibold mx-4'>1</p>
                                <a href='#'>
                                    <img src={PositiveIcon} alt="" className='w-6 h-6 self-center rounded mt-1' />
                                </a>
                            </div>
                        </div>
                        <div className='flex border rounded-md mb-4 p-5 border-[#d5d2c4]'>
                            <div className='flex'>
                                <img src={PhoneIcon} alt="" className='w-6 h-7 self-center' />
                                <p className='text-xl font-semibold ml-4'>With mullions</p>
                            </div>
                            <div className='flex' style={{ marginLeft: 'auto' }}>
                                <a href='#'>
                                    <img src={NegativeIcon} alt="" className='w-6 h-6 self-center rounded mt-1' />
                                </a>
                                <p className='text-2xl font-semibold mx-4'>1</p>
                                <a href='#'>
                                    <img src={PositiveIcon} alt="" className='w-6 h-6 self-center rounded mt-1' />
                                </a>
                            </div>
                        </div>
                        <div className='flex border rounded-md mb-4 p-5 border-[#d5d2c4]'>
                            <div className='flex'>
                                <img src={PhoneIcon} alt="" className='w-6 h-7 self-center' />
                                <p className='text-xl font-semibold ml-4'>Overhanged windows</p>
                            </div>
                            <div className='flex' style={{ marginLeft: 'auto' }}>
                                <a href='#'>
                                    <img src={NegativeIcon} alt="" className='w-6 h-6 self-center rounded mt-1' />
                                </a>
                                <p className='text-2xl font-semibold mx-4'>1</p>
                                <a href='#'>
                                    <img src={PositiveIcon} alt="" className='w-6 h-6 self-center rounded mt-1' />
                                </a>
                            </div>
                        </div>
                        <div className='flex border rounded-md mb-4 p-5 border-[#d5d2c4]'>
                            <div className='flex'>
                                <img src={PhoneIcon} alt="" className='w-6 h-7 self-center' />
                                <p className='text-xl font-semibold ml-4'>Glassed Balcony</p>
                            </div>
                            <div className='flex' style={{ marginLeft: 'auto' }}>
                                <a href='#'>
                                    <img src={NegativeIcon} alt="" className='w-6 h-6 self-center rounded mt-1' />
                                </a>
                                <p className='text-2xl font-semibold mx-4'>1</p>
                                <a href='#'>
                                    <img src={PositiveIcon} alt="" className='w-6 h-6 self-center rounded mt-1' />
                                </a>
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