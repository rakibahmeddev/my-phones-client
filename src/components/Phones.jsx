import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
  return (
    <div>
      <h2>All Phones {phones.length}</h2>
    </div>
  );
};

export default Phones;
