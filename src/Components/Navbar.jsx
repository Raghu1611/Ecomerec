import React from 'react';
import { assets2 } from '../assets/assets'; // Adjust path if necessary
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-2 font-medium '>
      <img src={assets2.logo} alt='logo' className='h-10' /> {/* Use assets.lo:10pxgo */}
      {/* Add other navbar content here */}


<ul className='hidden sm:flex gap-6 text:sm  text-black-500'>

<NavLink to='/' className='flex flex-col gap:1  item-center'>
  <p>Home</p>

  <hr className='w-2/4 border-solid h-[1.5px] bg-gray-700' hidden></hr>


</NavLink>
<NavLink  to='/collection'className='flex flex-col gap:5  item-center'>
  <p>Collection</p>

  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden></hr>


</NavLink>
<NavLink to='/Contact' className='flex flex-col gap:1  item-center'>
  <p>Contact</p>

  <hr className='w-1/2 border-none h-[1.5px] bg-gray-700' hidden></hr>


</NavLink>
<NavLink to='/about' className='flex flex-col gap:1  item-center'>
  <p>About</p>

  <hr className='w-2/4 border-none h-[1.5px] bg-blue-700' hidden></hr>


</NavLink>


</ul>
   
    </div>
  );
};

export default Navbar;
