import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen  '>
      <h2 className='mb-6 text-5xl font-bold'>404 ERROR</h2>
      <Link
        to="/"
        className="bg-cyan-800 text-white px-10 py-2 rounded-2xl"
      >
        Home
      </Link>
    </div>
  );
};

export default Error;
