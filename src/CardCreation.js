// src/CardCreation.js
import React, { useState } from 'react';

const CardCreation = () => {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Card Created for ${name}`);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Create Your Digital Business Card</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Your Full Name"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-lg">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            placeholder="Your Job Title"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photo" className="block text-lg">Profile Photo (URL):</label>
          <input
            type="text"
            id="photo"
            placeholder="Enter image URL"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
        >
          Create Card
        </button>
      </form>
    </div>
  );
};

export default CardCreation;
