import React from 'react';

const Adminwallet = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <nav className="bg-gray-400 h-full text-black w-1/4">
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
            <div className="bg-gray-100 p-8 w-3/4">
                {/* Invoices Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    {/* Replace with dynamic data as needed */}
                    <div className="bg-white rounded-xl shadow p-4">
                    <p className="text-gray-400">Total Invoices</p>
                    <p className="text-xl font-semibold">582</p>
                </div>
                <div className="bg-white rounded-xl shadow p-4">
                    <p className="text-gray-400">Paid Invoices</p>
                    <p className="text-xl font-semibold">346</p>
                </div>
                <div className="bg-white rounded-xl shadow p-4">
                    <p className="text-gray-400">Unpaid Invoices</p>
                    <p className="text-xl font-semibold">236</p>
                </div>
                <div className="bg-white rounded-xl shadow p-4">
                    <p className="text-gray-400">Total Revenue</p>
                    <p className="text-xl font-semibold">$120K</p>
                </div>

                    {/* More invoice boxes can be added here */}
                </div>

                {/* Payment History Section */}
                <div className="bg-white rounded-xl shadow p-8">
                    <h2 className="font-bold text-lg mb-4">Payment History</h2>
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="text-left p-2">Invoice Date</th>
                                <th className="text-left p-2">Recipient</th>
                                <th className="text-left p-2">Email</th>
                                <th className="text-left p-2">Service Type</th>
                                <th className="text-left p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Replace with dynamic data as needed */}
                            <tr>
                                <td className="p-2">June 17, 2022</td>
                                <td className="p-2">XYZ Store</td>
                                <td className="p-2">contact@xyzstore.com</td>
                                <td className="p-2">Store Maintenance</td>
                                <td className="p-2">
                                    <span className="text-green-500">Completed</span>
                                </td>
                            </tr>
                            <tr>
                            <td className="p-2">May 20, 2022</td>
                            <td className="p-2">David Johnson</td>
                            <td className="p-2">david@example.com</td>
                            <td className="p-2">Consulting</td>
                            <td className="p-2">
                                <span className="text-yellow-500">Pending</span>
                            </td>
                        </tr>
                            {/* Additional rows can be added here */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Adminwallet;