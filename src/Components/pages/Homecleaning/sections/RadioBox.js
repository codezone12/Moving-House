import React, { useState } from 'react';
import './radiobox.css'

const RadioButton = ({ label, isChecked, onChange }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <label
        htmlFor={label}
        className="cursor-pointer flex items-center space-x-2 order-2"
      >
        <div
          className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${isChecked ? 'bg-black' : 'bg-white'}`}
        >
          {isChecked && (
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
        <span>{label}</span>
      </label>
      <input
        type="radio"
        id={label}
        name="frequency"
        checked={isChecked}
        onChange={onChange}
        className="hidden order-1"
      />
    </div>
  );
};

const RadioBox = () => {
  const [selectedFrequency, setSelectedFrequency] = useState('');

  const handleFrequencyChange = (value) => {
    setSelectedFrequency(value);
  };

  return (
    <div className="bg-white p-4 radio-buttons">
      <RadioButton
        label="Every other week"
        isChecked={selectedFrequency === 'everyOtherWeek'}
        onChange={() => handleFrequencyChange('everyOtherWeek')}
      />
      <div className="border-t my-2 border-gray-300"></div>
      <RadioButton
        label="Every week"
        isChecked={selectedFrequency === 'everyWeek'}
        onChange={() => handleFrequencyChange('everyWeek')}
      />
    </div>
  );
};

export default RadioBox;
