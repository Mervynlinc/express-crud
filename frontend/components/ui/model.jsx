import React, {useEffect, useState} from 'react'
import { CircleX } from 'lucide-react';

function Model({onclose, user}) {
const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

    const handleClose = () => {
    // Reverse animation before unmounting
    setAnimate(false);
    setTimeout(onclose, 300); // match duration-300
  };

  return (
    <div className='flex flex-col justify-center items-center bg-black-100 bg-opacity-50 inset-0 z-50'>
        <div className={`
          bg-white p-6 rounded shadow-lg w-96 transform transition-all duration-300
          ${animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
        `}>
            <div className='flex flex-row justify-between mb-4'>
            <h2 className='text-xl font-semibold mb-4'>User Details</h2>
            <CircleX color="red" className=' cursor-pointer' onClick={handleClose} />
            </div>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
        </div>
    </div>
  )
}

export default Model