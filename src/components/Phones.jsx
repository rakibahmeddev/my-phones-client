import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Phones = () => {
  const phones = useLoaderData();
  const params = useParams()
  console.log(params.id);

  const handleViewDetail = (id) => {
    // Navigate to the phone detail page
    window.location.href = `/phone/${id}`;
  }

  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold my-6">All Phones ({phones.length})</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {phones.map((phone) => (
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
            <div className="flex gap-x-2  justify-center">
              <button onClick={() => handleViewDetail(phone.id)} className="bg-amber-300 px-6 py-1 rounded-sm cursor-pointer">
                View Detail
              </button>
              <button className="border-2 border-amber-300 bg-white px-6 py-1 rounded-sm cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phones;
