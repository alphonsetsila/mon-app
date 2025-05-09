import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Controls = ({ toggleZoom, frameZoom, closeFrame ,restPage ,activePage}) => { 
  return (
    <div className='absolute top-3 right-3 space-x-2 z-10'>
      <button className="text-2xl text-pink-400 cursor-pointer hidden lg:inline-block " onClick={toggleZoom}>
        <i className={frameZoom ? 'bx bxs-zoom-out': 'bx bxs-zoom-in'}></i>
      </button>
      <button className="text-2xl text-pink-400 cursor-pointer" onClick={closeFrame && restPage}>
        <i className='bx bx-x-circle'></i>
      </button>
    </div>
  );
};

export default Controls;
