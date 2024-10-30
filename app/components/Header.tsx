import React from 'react';
import { IoHeartOutline } from "react-icons/io5";




import { CiSearch } from "react-icons/ci";

const Header = () => {
  
  return (
    <header >
      <div className='flex items-center justify-between mx-[14rem]  my-4'>
        <div className='flex items-center'>
          <img src='/Logo.png' className='mr-[4rem]' ></img>
          <div className='relative flex items-center'>
          <CiSearch style={{ width: '26px', height: '26px'}} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            className='bg-gray-100 h-12 text-sm font-[400]  pl-10 w-80 rounded-lg'
            placeholder='Search'
            type="search"
            aria-label="Search"
          />
          </div>
        </div>
        <nav className='flex font-semibold text-gray-400 items-center gap-9'>
          <a className='text-black' href="#">Home</a>
          <a  className='text2 hover:text-black' href="#">About</a>
          <a className='text2 hover:text-black' href="#">Contact Us</a>
          <a className='text2 hover:text-black' href="#">Blog</a>
        </nav>
        <div className='flex items-center gap-5 mr-[5rem]'>
          <IoHeartOutline className='hover:fill-red-600' style={{ width: '26px', height: '26px'}} />
          <img src='/Cart.png' style={{ width: '26px', height: '26px'}}  />
          <img src='/User.png'  style={{ width: '26px', height: '26px'}}  />
        </div>
      </div>
    </header>
  );
};

export default Header;
