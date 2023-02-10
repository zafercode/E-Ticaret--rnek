import React from "react";
import { SlBasket } from 'react-icons/sl'
import Gamers from '../assets/gamers.jpg'
import Students from '../assets/students.jpg'
import Work from '../assets/work.jpg'

const Box = () => {
  {/* Card */}
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>İŞ</p>
          <button className='flex border-white bg-none text-white/80 hover:bg-[#15284B] mx-2 absolute bottom-4 border rounded-3xl p-2'>Alışverişe Başla <SlBasket size={20} className="items-center mx-2 justify-center my-auto"/></button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Work}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>OYUNCULAR</p>
          <button className='flex border-white bg-none text-white/80 hover:bg-[#15284B] mx-2 absolute bottom-4 border rounded-3xl p-2'>Alışverişe Başla <SlBasket size={20} className="items-center mx-2 justify-center my-auto"/></button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Gamers}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>ÖĞRENCİLER</p>
          <button className='flex border-white bg-none text-white/80 hover:bg-[#15284B] mx-2 absolute bottom-4 border rounded-3xl p-2'>Alışverişe Başla <SlBasket size={20} className="items-center mx-2 justify-center my-auto"/></button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Students}
          alt='/'
        />
      </div>
    </div>
  );
};

export default Box;
