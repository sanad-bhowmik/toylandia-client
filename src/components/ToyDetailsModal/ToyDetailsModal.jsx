import React from 'react';

const ToyDetailsModal = ({ toy, closeModal }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-blue-500 px-4 py-5 sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-4xl ml-32 font-bold text-gray-900">{toy.toy_name}</h3>
                <div className="mt-4">
                  <img className="h-64 ml-12 w-full object-cover mb-4 rounded-lg" src={toy.img} alt={toy.toy_name} />
                  <p className="text-lg text-gray-800 font-medium">Price: ${toy.price}</p>
                  <p className="text-lg text-gray-800 font-medium">Sub-category: {toy.sub_categories}</p>
                  <p className="text-lg text-gray-800 font-medium">Available Quantity: {toy.available_quantity}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="btn btn-primary text-xl font-medium text-white bg-blue-500 hover:bg-blue-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsModal;
