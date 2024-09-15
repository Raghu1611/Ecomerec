import React, { useState } from 'react';
import { assets2 } from '../assets/assets'; // Adjust path if necessary
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {


  const[visible,setvisible]=useState(false);
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

  <hr className='w-1/2  h-[1.5px] bg-gray-700' hidden></hr>


</NavLink>
<NavLink to='/about' className='flex flex-col gap:1  item-center'>
  <p>About</p>

  <hr className='w-2/4 border-none h-[1.5px] bg-blue-700' hidden></hr>


</NavLink>


</ul>

<div className=' flex item-center gap-6'>



  <img src={assets2.search} className='w-5 cursor-pointer'/>
  <div className='group relative'>

    <img src={assets2.profile} className='w-5 cursor-pointer'/> 
    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
      <div className='flex flex-col gap-2 w-36  py-3 px-2  bg-slate-100 text-gray-500 rounded '>
      <p className='cursor-pointer hover:text-black '>My Profile</p>
      <p className='cursor-pointer hover:text-black'>Orders</p>
      
      <p className='cursor-pointer hover:text-black'>Logout</p>
      </div>

    </div>
  </div>


  <Link to='/cart' className='relative'>
  <img src={assets2.carticon} className='w-6 min-w-6'/>
  <p className='absolute right-[-5px] bottom-[-5px]  w-4 text-center leading-4 bg-black  text-white  aspect-square rounded-full'>10</p>
  </Link>
  <img  onClick={()=>setvisible(true)} src={assets2.menu} className='w-5 cursor-pointer sm:hidden'/>
</div>

{/* for sidebar menu for small screens 640px */}
<div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>


  <div className='flex flex-col text-grey-600'>


    <div className='flex item-center gap-3 p-3'>


      <img onClick={()=>setvisible(false)} src={assets2.downmenu} className='h-8  cursor-pointer rotate-90'/>
      <p >Back</p>
    </div>
    <NavLink onClick={()=>setvisible(false)}  className='py-2 pl-6 border' to='/' >Home</NavLink>
    <NavLink  onClick={()=>setvisible(false)}className='py-2 pl-6 border' to='/collection' >Collection</NavLink>
    <NavLink onClick={()=>setvisible(false)}  className='py-2 pl-6 border' to='/about' >About</NavLink>
   
    <NavLink onClick={()=>setvisible(false)}className='py-2 pl-6 border' to='/contact' >Contact</NavLink>
  </div>
</div>

</div>



   
  
  );
};

export default Navbar;
