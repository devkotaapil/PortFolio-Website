
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HelloMessage = () => {
  return (
    <div className="flex bg-white text-black ">
      <TypeAnimation
        sequence={[
          'Hello,', // First string
          1000,                    // Wait 1s
          "I'm Apil Devkota", // Second string
          1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl font-bold text-black font-mono" // Tailwind styling
      />
    </div>
  );
};

export default HelloMessage;