import React, { useState } from 'react';

const UpdateToyModal = ({ toy, onUpdate, onClose }) => {
  const [updatedToy, setUpdatedToy] = useState(toy);

  const handleChange = (e) => {
    setUpdatedToy({ ...updatedToy, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedToy);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen">
        <div className="bg-white w-full max-w-md mx-auto rounded shadow-lg p-6">
          <h2 className="text-2xl mb-4">Update Toy</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={updatedToy.price}
              onChange={handleChange}
              className="border w-full p-2 mb-4 rounded"
            />
            <label className="block mb-2">Quantity</label>
            <input
              type="number"
              name="available_quantity"
              value={updatedToy.available_quantity}
              onChange={handleChange}
              className="border w-full p-2 mb-4 rounded"
            />
            <label className="block mb-2">Details</label>
            <textarea
              name="description"
              value={updatedToy.description}
              onChange={handleChange}
              className="border w-full p-2 mb-4 rounded"
            />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 text-white font-semibold px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToyModal;