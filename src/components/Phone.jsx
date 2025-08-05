import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div>
      <h2>Single Phone</h2>
      <div
        key={phone.id}
        className="text-center shadow-lg p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300"
      >
        <img
          src={phone.image}
          alt={phone.name}
          className=" mx-auto rounded-md"
        />
        <h3 className="text-xl font-bold mt-4">{phone.name}</h3>
        <p className="text-gray-600 mb-2">${phone.price}</p>
        <p className="text-gray-600 mb-2">{phone.description}</p>

        <div className="flex gap-x-2  justify-center">
          <button className="bg-amber-300 px-6 py-1 rounded-sm cursor-pointer">
           Add to Cart
          </button>
          <button className="border-2 border-amber-300 bg-white px-6 py-1 rounded-sm cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
