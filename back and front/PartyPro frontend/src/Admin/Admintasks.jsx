import React from 'react';

const AdminTasks = () => {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <nav className="bg-gray-400 text-black w-1/5">
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
      {/* Content */}
      <div className="text-black text-left ml-0  mt-1 p-10 font-poppins relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-50 rounded-lg"></div>
        <h2 className="text-3xl font-bold mb-4 relative z-10" style={{ paddingTop: "60px" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Upcoming Events</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="bg-white rounded-lg shadow-md p-4 ">
            <div className="flex justify-center items-center mb-4">
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-green-400 text-white mr-4">Sun</div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-400 text-white mr-4">Mon</div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-400 text-white mr-4">Tue</div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-400 text-white mr-4">Wed</div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-400 text-white mr-4">Thu</div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-400 text-white mr-4">Fri</div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-green-400 text-white">Sat</div>
            </div>
            {/* Example Calendar Dates */}
            <div className="grid grid-cols-7 gap-1">
              {[...Array(31).keys()].map((day) => (
                <div key={day} className={`w-10 h-10 flex justify-center items-center rounded-full text-gray-700 ${day + 1 === 11 || day + 1 === 31 ? 'bg-yellow-400' : 'bg-gray-200'}`}>{day + 1}</div>
              ))}
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">Reminders</h3>
            {/* Reminder Cards */}
            <div className="grid grid-cols-1 gap-4">
              {/* Reminder 1 */}
              <div className="bg-black rounded-lg shadow-md p-4 text-white flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Market Showcase</h3>
                  <p className="text-gray-300">10:00 AM</p>
                </div>
                <div className="flex space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              {/* Reminder 2 */}
              <div className="bg-black rounded-lg shadow-md p-4 text-white flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Live Music at the Market</h3>
                  <p className="text-gray-300">2:30 PM</p>
                </div>
                <div className="flex space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              {/* Reminder 3 */}
              <div className="bg-black rounded-lg shadow-md p-4 text-white flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Holiday Market Extravaganza</h3>
                  <p className="text-gray-300">5:00 PM</p>
                </div>
                <div className="flex space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTasks;
