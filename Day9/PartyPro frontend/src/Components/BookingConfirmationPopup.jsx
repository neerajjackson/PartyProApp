import React from 'react';

const BookingConfirmationPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Booking Confirmed!</h2>
        <p className="text-lg text-gray-600 mb-4">Thank you for booking. We look forward to seeing you at the event!</p>
        <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default BookingConfirmationPopup;
