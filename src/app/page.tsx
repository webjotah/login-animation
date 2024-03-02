'use client';

import { useState } from 'react';

export default function Home() {
  const [animate, setAnimate] = useState<string>('');

  const handleMove = () => {
    if (animate != '-translate-x-full') {
      setAnimate('-translate-x-full');
    } else {
      setAnimate('');
    }
  };

  return (
    <div className="bg-zinc-900 w-screen h-screen flex justify-between">
      <div className="flex items-center justify-center w-1/2 h-full">
        <button
          className={`px-8 py-2 font-semibold transition-all duration-500 text-rettek-100 bg-rettek-500 rounded-md ${
            animate === '' ? 'delay-300' : 'pointer-events-none opacity-0'
          }`}
          onClick={handleMove}
        >
          Login
        </button>
      </div>
      <div className="w-1/2 h-full bg-zinc-900 items-center flex justify-center">
        <button
          className={`px-8 py-2 transition-all duration-500 text-rettek-100 bg-rettek-500 rounded-md ${
            animate === '' ? 'pointer-events-none opacity-0' : 'delay-300'
          }`}
          onClick={handleMove}
        >
          Register
        </button>
        <div
          className={`bg-zinc-800 absolute w-1/2 h-full transition-all ease-in-out duration-700 ${animate}`}
        />
      </div>
    </div>
  );
}
