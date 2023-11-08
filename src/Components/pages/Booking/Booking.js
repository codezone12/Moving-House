import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const Booking = () => {
    const location = useLocation();
const data  = location?.state?.data;
const navigate = useNavigate()
const handleNavigate = () =>{
    navigate('/calender', {
      state: {
       data : data
      }
    });
  }
    return (
        <>
            <div className="container mx-auto my-auto pt-10 mb-20" style={{ maxWidth: "70%" }}>
                <div style={{ display: 'grid', gridTemplateColumns: '70% 30%', gap:'30px'}}>
                    <div className='text-center'>
                        <div className="pt-20 font-normal text-5xl">How would you like to</div>
                        <div className="pt-5 font-normal text-5xl">book your home cleaning?</div>
                        <div className="w-full mt-8  flex justify-center items-center mb-5">

                            <p className=" border-black border w-20 text-center " ></p>

                        </div>
                        <p className='text-xl'>Every home is unique. For you to get the cleaning you want as easily as <br/>
                         possible, we always start with a free start-up meeting.<br/>
                          Choose the meeting type that suits you.</p>
                        <div className='mt-10' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <button style={{ background:'white', width: '300px', display: 'flex', flexDirection: 'row', gap: '30px', justifyContent: 'space-between' }} className="bg-inherit text-black p-5 hover:bg-white border rounded border-inherit text-xl text-bold">
                                Call me
                                <p className="text-center text-4xl my-auto"><svg height="20" viewBox="0 0 9 15" width="20" class="csw9N_C5 fiwAtSA" style={{ stroke: "#1e1e1e" }}   ><path d="m.958.995 6.51 6.51-6 6" fill="none" stroke-width="2"></path></svg></p>
                            </button>
                            <button onClick={handleNavigate} style={{ background:'white',width: '300px', display: 'flex', flexDirection: 'row', gap: '30px', justifyContent: 'space-between' }} className="bg-inherit text-black p-5 my-auto hover:bg-white border rounded border-inherit text-xl text-bold">
                                <p>Book home visit</p>
                                <p className="text-right text-4xl my-auto" ><svg height="20" viewBox="0 0 9 15" width="20" class="csw9N_C5 fiwAtSA" style={{ stroke: "#1e1e1e" }}   ><path d="m.958.995 6.51 6.51-6 6" fill="none" stroke-width="2"></path></svg></p>
                            </button>
                        </div>
                    </div>
                    <div className='mt-20' style={{backgroundColor: '#d1dce7', width:'300px', height: '250px'}}>
                        <div className='d-flex flex-col mt-5'>
                        <p className='text-xl'>Welcome to a simpler life</p>
                        <p className='text-base text-left px-5 mt-3'>We look forward to taking care of your home. During the start-up meeting, we will go over your home and your wishes. The price is based on your unique conditions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Booking;
