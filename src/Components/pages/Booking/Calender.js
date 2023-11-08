import React, { useRef, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { TIME } from '../../Constants/Constant';
import { useLocation, useNavigate } from 'react-router';

const CalendarComponent = () => {
    const [value, onChange] = useState(new Date());
    const [time, setTime] = useState('')
    const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);

    const selectedDate = new Date(value);
    const timeBtn = useRef()
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const date = new Intl.DateTimeFormat('en-US', options).format(selectedDate);
    const location = useLocation();
    const navigate = useNavigate()
    const data = location?.state?.data;
    const newData = [...data, date, time];
    const handleNavigate = () => {
        navigate('/home_cleaning', {
            state: {
                data: newData
            }
        });
    }
    const handleTimeChange = (index) => {
        setSelectedTimeIndex(index);
        setTime(TIME[index]);
    };
    return (
        <div className="container mx-auto text-center">
            <div
                style={{ display: 'grid', gridTemplateColumns: '70% 30%' }}
                className="mx-auto mb-10"
            >
                <div>
                    <div className="pt-20 font-normal text-5xl">Select date and time</div>
                    <div className="w-full mt-8 flex justify-center items-center mb-5">
                        <p className="border-black border w-20 text-center"></p>
                    </div>
                    <div className="w-full mt-8 flex justify-center items-center mb-5">
                        <Calendar className="text-center justify-center" onChange={onChange} value={value} />
                    </div>
                    <div className="text-xs justify-center px-5 mt-3" style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: '30px' }}>
                        {
                            TIME?.map((time, index) => {
                                return <input className={`px-5 py-3 rounded-lg`} style={{
                                    cursor: 'pointer',
                                    background: selectedTimeIndex === index ? 'black' : 'transparent',
                                    color: selectedTimeIndex === index ? 'white' : 'black',
                                    border: '1px solid black',
                                }}
                                    onClick={(e) => handleTimeChange(index)} type='button' value={time} key={index} ref={timeBtn}
                                />
                            })
                        }
                    </div>
                    <button className='px-20 py-3 bg-black text-white rounded-lg' onClick={handleNavigate}>Next</button>
                </div>
                <div>
                    <div className='mt-20' style={{ backgroundColor: '#d1dce7', width: '300px', height: '300px' }}>
                        <div className="d-flex flex-col">
                            <p className="text-2xl text-left ml-3 mb-1">Summary</p>
                            <p className="text-lg text-left ml-3">Home cleaning</p>
                            <p className="text-xl text-left ml-3">Every other week</p>
                            <hr
                                className="border w-2/3 mx-auto mt-3"
                                style={{ color: 'black', height: '1px', backgroundColor: '#a3bad0' }}
                            />
                            <p className="text-xl font-semibold text-left my-auto pl-3 py-2">Home visit</p>
                            <p className="text-base text-left px-5 mt-3">{date}</p>
                            <p className="text-lg text-left px-5 mt-1">{time}</p>
                            <hr
                                className="border w-2/3 mx-auto mt-3"
                                style={{ color: 'black', height: '1px', backgroundColor: '#a3bad0' }}
                            />
                            <p className='text-lg text-left ml-3'>Starting price</p>
                            <p className='text-xs text-left ml-3'>with RUT-deduction</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CalendarComponent;
