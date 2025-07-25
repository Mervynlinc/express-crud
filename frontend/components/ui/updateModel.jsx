import React,{useEffect, useState} from 'react'

function UpdateModel({onclose, user}) {
    const [animate, setAnimate] = useState(false);
    const [message, setMessage] = useState("");

      useEffect(() => {
        // Trigger animation after component mounts
        setAnimate(true);
      }, []);
    
        const handleClose = () => {
        // Reverse animation before unmounting
        setAnimate(false);
        setTimeout(onClose, 300); // match duration-300
      };

      async function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(event.target);
        try {
          const response = await fetch(`http://localhost:3001/${user.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.get('name'),
              email: formData.get('email'),
            }),
          });

          const result = await response.json();
          if (response.ok) {
            setMessage(result.message || 'User updated successfully');
                setTimeout(handleClose, 1000); // 1 second delay
          } else {
            setMessage(result.message || 'Failed to update user');
          }
        } catch (error) {
          setMessage('Error: ' + error.message);
        }

        }
  return (
    <div className='flex flex-col justify-center items-center bg-black-100 bg-opacity-50 inset-0 z-50'>
        <div className={`
          bg-white p-6 rounded shadow-lg w-96 transform transition-all duration-300
          ${animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
        `}>

            <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-md mx-auto p-8 bg-white  text-black mt-3"
    >
      <div className="space-y-1 m-5">
        <label
          htmlFor="name"
          className="block font-semibold text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text" // Fixed: type="name" is invalid, use "text"
          id="name"
          name="name"
          required
          className="w-full p-3 border-gray-200 rounded-lg bg-gray-50"
          defaultValue={user?.name}
        />
      </div>

      <div className="space-y-1 m-5">
        <label
          htmlFor="email"
          className="block font-semibold text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-3 border-gray-200 rounded-lg bg-gray-50"
          defaultValue={user?.email}
        />
      </div>


      <div className='flex justify-between items-center m-5'>
      <button
        type="submit"
        className="bg-blue-600 w-1/2 text-white py-3 px-6 rounded-lg font-semibold"
      >
        Submit
      </button>

        <button 
        onClick={handleClose}
        className='bg-red-600 w-1/2 text-white py-3 px-6 rounded-lg font-semibold ml-2'
        >
            Close
        </button>

      </div>

      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
            </div>
            </div>
  )
}

export default UpdateModel