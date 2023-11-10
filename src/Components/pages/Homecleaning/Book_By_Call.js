import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import RadioBox from './sections/RadioBox';

const Book_By_Call = () => {
    const [price, setPrice] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [doorCode, setDoorCode] = useState('');
    const [campaignCode, setCampaignCode] = useState('');
    const [agreeToOffers, setAgreeToOffers] = useState(false);


    const location = useLocation();
    const data = location?.state?.data;
    console.log('data received', data);
    useEffect(() => {
        setCity(data ? data[0] : "")
    }, [data])
    const finalPrice = useMemo(() => {
        if (price === "") {
            return null;
        }
        if (price >= 1 && price <= 39) {
            return 1469;
        } else if (price >= 40 && price <= 59) {
            return 1789;
        } else if (price >= 60 && price <= 89) {
            return 2109;
        } else if (price >= 90 && price <= 139) {
            return 2689;
        } else {
            return 5000;
        }
    }, [price]);

    const handleSubmit = async () => {
        const response = await axios.post('/api', {
            price, firstName, lastName, email, confirmEmail, mobileNumber, street, city, doorCode, campaignCode, agreeToOffers
        })
        // Other Operation of our choise like toasts etc
    }

    return (
        <div className="container pt-10">
            <div className="pt-20 font-normal text-5xl">Home cleaning</div>
            <div className="w-full mt-8 flex justify-center items-center mb-5">
                <p className="border-black border w-20 text-center"></p>
            </div>
            <div
                style={{ display: 'grid', gridTemplateColumns: '70% 30%', gap: '30px' }}
                className="mx-auto mb-10"
            >
                <div className="mx-auto w-2/3">
                    <div className='border bg-white rounded-md mb-2 p-5 border-[#d5d2c4]'>
            <RadioBox />
                    </div>
                    <div className="mt-3 rounded-lg p-4 w-72">
                        <p className="text-2xl text-left mb-5">Do you have any pets?</p>
                        {/* Checkbox for Cat(s) */}
                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id="cat"
                                name="pets"
                                className="mr-2 h-6 w-6"
                            />
                            <label className="text-lg" htmlFor="cat">
                                Cat(s)
                            </label>
                        </div>

                        {/* Checkbox for Dog(s) */}
                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id="dog"
                                name="pets"
                                className="mr-2 h-6 w-6"
                            />
                            <label className="text-lg" htmlFor="dog">
                                Dog(s)
                            </label>
                        </div>

                        {/* Checkbox for Other pet(s) */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="other"
                                name="pets"
                                className="mr-2 h-6 w-6"
                            />
                            <label className="text-lg" htmlFor="other">
                                Other pet(s)
                            </label>
                        </div>
                    </div>

                    <div className="rounded-lg my-5">
                        <label className="text-sm flex text-left font-bold mb-2" htmlFor="date">
                        Select start date*
                        </label>
                        <input
                        style={{height:'62px'}}
                            type="date"
                            id="date"
                            name="date"
                            className="block w-full px-4 border py-2 rounded-lg text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
                        />
                    </div>
                    <div className="border-t my-2 border-gray-300"></div>
                    <div className='flex text-left text-3xl font-medium my-3'> Contact details </div>
                    {/* First Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="firstName"
                            className="block text-left text-gray-700 text-lg font-bold mb-2"
                        >
                            First name*
                        </label>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="lastName"
                            className="block text-left text-gray-700 text-lg font-bold mb-2"
                        >
                            Last name*
                        </label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-left text-gray-700 text-lg font-bold mb-2"
                        >
                            Email*
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    {/* Confirm Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="confirmEmail"
                            className="block text-left text-gray-700 text-lg font-bold mb-2"
                        >
                            Confirm email*
                        </label>
                        <input
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div className="mb-4">
                        <label
                            htmlFor="mobileNumber"
                            className="block text-left text-gray-700 text-lg font-bold mb-2"
                        >
                            Mobile number*
                        </label>
                        <input
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    {/* Street */}
                    <div className="mb-4">
                        <label
                            htmlFor="street"
                            className="block text-left text-gray-700 text-lg font-bold mb-2"
                        >
                            Street*
                        </label>
                        <input
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            type="text"
                            id="street"
                            name="street"
                            className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    {/* City */}
                    <div className="mb-4">
                        <label
                            htmlFor="city"
                            className="block text-left text-gray-700 text-lg font-bold mb-2"
                        >
                            City*
                        </label>
                        <input
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            id="city"
                            name="city"
                            className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    {/* Door Code */}
                    <div className="mb-4">
                        <label
                            htmlFor="doorCode"
                            className="block text-left text-gray-700 text-lg font-bold mb-2"
                        >
                            Door code
                        </label>
                        <input
                            value={doorCode}
                            onChange={(e) => setDoorCode(e.target.value)}
                            type="text"
                            id="doorCode"
                            name="doorCode"
                            className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    {/* Campaign Code */}
                    <div className="mb-4">
                        <label
                            htmlFor="campaignCode"
                            className="block text-left text-gray-700 text-lg font-bold mb-2"
                        >
                            Campaign code
                        </label>
                        <input
                            value={campaignCode}
                            onChange={(e) => setCampaignCode(e.target.value)}
                            type="text"
                            id="campaignCode"
                            name="campaignCode"
                            className="w-full border rounded-md py-6 bg-white px-5 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <p className='text-3xl text-left mb-4'>Approval</p>
                    <div className="mb-4 pr-10 my-auto">
                        <input
                            type="checkbox"
                            id="agreeToOffers"
                            name="agreeToOffers"
                            checked={agreeToOffers}
                            onChange={() => setAgreeToOffers(!agreeToOffers)}
                            className="mr-2 h-6 w-6"
                        />
                        <label htmlFor="agreeToOffers" className="text-xl d-flex justify-left">
                            I agree to receive custom offers from you based on the <br /> information I have shared.
                        </label>
                    </div>
                    <div className="flex justify-start">
                        {/* "Contact Me" button */}
                        <button
                            className="bg-black hover:bg-black text-white font-bold py-4 px-14 rounded"
                            onClick={handleSubmit}
                        >
                            Contact Me
                        </button>
                    </div>

                </div>
                <div>
                    <div style={{ backgroundColor: '#d1dce7', width: '300px', height: '300px' }}>
                        <div className="d-flex flex-col py-7">
                            <p className="text-left ml-3 mb-1" style={{fontSize:'22px', fontFamily:'Tiempos Headline,serif'}}>Summary</p>
                            <p className="px-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span className="text-lg ">Home cleaning</span>
                                <span className="text-xl font-medium">Every week</span>
                            </p>
                            <div className="border-t my-2 border-gray-400 w-4/5 mx-auto"></div>
                            <p className="text-xl font-semibold text-left my-auto pl-3 py-2">Selected start date</p>
                            <p className="text-lg text-left px-5 mt-3">{data ? data[1] : ''}</p>
                            <div className="border-t my-2 border-gray-400 w-4/5 mx-auto"></div>
                            <p className="text-lg text-left px-5 mt-3">Starting price</p>
                            <p className="text-xs text-left px-5 mt-3">with RUT-deduction</p>
                            {finalPrice ? <p className="text-lg text-left px-5 mt-3">{finalPrice}</p> : ''}
                            <p className="text-xs text-left px-5 mt-3">*The price is based on the information you have provided.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Book_By_Call;
