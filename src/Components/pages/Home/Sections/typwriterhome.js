import React, { useEffect, useState } from 'react';

function TypewriterComponent() {
  const [text, setText] = useState('');
  const phrases = [' Home Cleaning', ' Deep Cleaning', ' Window Cleaning', ' Move out Cleaning'];
  let currentIndex = 0;

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

    const interval = setInterval(typeText, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="z-0 absolute top-44 ml-20 text-white text-6xl font-medium font-['Roboto'] lg:ml-28 xl:ml-24 2xl:ml-36">
      <p>More <span className="text-yellow-500">quality of</span></p>
      <p className="text-start mt-1">
        <span className="text-yellow-500">life</span> this fall{text}
      </p>
    </div>
  );
}

export default TypewriterComponent;
