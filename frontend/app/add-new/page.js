'use client'; // Mark as client component for useState
import { useState } from 'react';

export default function AddNewPage() {
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    
    try {
      const response = await fetch('http://localhost:3001/add-user', {
        method: 'POST',
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
        setMessage(result.message || 'User added successfully');
      } else {
        setMessage(result.message || 'Failed to add user');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-md mx-auto p-8 bg-white shadow-lg rounded-xl border border-gray-100 text-black mt-3"
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
          placeholder="John Doe"
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
          placeholder="johndoe@gmail.com"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 w-full text-white py-3 px-6 rounded-lg font-semibold"
      >
        Submit
      </button>

      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
  );
}