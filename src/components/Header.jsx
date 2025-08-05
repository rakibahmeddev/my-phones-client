import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center gap-x-6 bg-gray-200 p-4 rounded-full'>
            <Link to="/Home">Home</Link>
            <Link to="/phones">Phones</Link>
            <Link to="/phone">Phone</Link>
        </div>
    );
};

export default Header;