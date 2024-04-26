import React, { useState } from 'react';
// import '../css/admin.css'
const AdminProfiles = () => {
  const [eventName, setEventName] = useState('');
  const [budget, setBudget] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [eventCapacity, setEventCapacity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { eventName, budget, eventImage });
  };

  return (
    <div className="flex h-screen bg-f1f5f9 scrollbar-hide overflow-y-scroll">
       <nav className="bg-gray-400 h-auto text-black ">
        <ul className="flex flex-col items-center">
        <li>
      <a2 href="#" className="flex items-center gap-2 p-4">
        <img src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg" alt="" className="w-6 h-6 rounded-full"></img>
        <span className="font-semibold">AdminBoard</span>
      </a2>
    </li>
    <li>
      <a href='admin'><a2 href="/admin" className="flex items-center gap-2 p-4">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </a2></a>
    </li>
    <li>
      <a href='profiles'><a2 href="/profiles" className="flex items-center gap-2 p-4">
        <i className="fas fa-user"></i>
        <span>Add Events</span>
      </a2></a>
    </li>
    <li>
      <a href='wallet'><a2 href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-wallet"></i>
        <span>Wallet</span>
      </a2></a>
    </li>
    <li>
      <a href='analytics'><a2 href="analytics" className="flex items-center gap-2 p-4">
        <i className="fas fa-chart-bar"></i>
        <span>Analytics</span>
      </a2></a>
    </li>
    <li>
      <a href='tasks'><a2 href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-tasks"></i>
        <span>Tasks</span>
      </a2></a>
    </li>
    {/* <li>
      <a href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-cog"></i>
        <span>Settings</span>
      </a>
    </li> */}
    {/* <li>
      <a2 href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-question-circle"></i>
        <span>Help</span>
      </a2>
    </li> */}
    <li>
    <a href='homepage'> <a2 href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-sign-out-alt"></i>
        <span>Log out</span>
      </a2></a>
    </li>
        </ul>
      </nav>
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-center mb-8 mt-8">ADD AN EVENT</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">
              Event Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eventName"
              type="text"
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget">
              Budget
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="budget"
              type="text"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventImage">
              Event Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eventImage"
              type="text"
              placeholder="Event Image URL"
              value={eventImage}
              onChange={(e) => setEventImage(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventCapacity">
              Event Capacity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eventCapacity"
              type="text"
              placeholder="Event Capacity"
              value={eventCapacity}
              onChange={(e) => setEventCapacity(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Event
            </button>
          </div>
        </form>
        </div>
    </div>
  );
};

export default AdminProfiles;
