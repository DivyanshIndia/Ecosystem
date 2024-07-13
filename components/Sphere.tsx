import React from 'react';

const Sphere = () => {
  return (
    <div className='relative h-96 w-96 shadow-lg rounded-full p-5 bg-cosmic-gradient dark:border-zinc-800/30 animate-spin-slow hover:animate-hover-spin focus:animate-focus-spin'>
      <div className='absolute bottom-1 left-1\/2 transform -translate-x-1/2 h-96 w-96 bg-cosmic-gradient shadow-lg rounded-full p-2 dark:border-zinc-800/30 animate-pulse'>
        <div className='h-full w-full  rounded-full opacity-50 hover:opacity-75 focus:opacity-75 transition-opacity duration-300'></div>
      </div>
    </div>
  );
};

export default Sphere;
