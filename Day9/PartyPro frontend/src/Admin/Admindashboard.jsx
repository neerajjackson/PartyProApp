import React from 'react';
// import './AdminDashboard.css'; // Import CSS file for styling (if needed)

function AdminDashboard() {
  return (
    
    <div className="container">
      <nav className="bg-gray-400 text-black">
  <ul className="flex flex-col items-center">
    <li>
      <a href="#" className="flex items-center gap-2 p-4">
        <img src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg" alt="" className="w-6 h-6 rounded-full"></img>
        <span className="font-semibold">AdminBoard</span>
      </a>
    </li>
    <li>
      <a href="/admin" className="flex items-center gap-2 p-4">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </a>
    </li>
    <li>
      <a href="/profiles" className="flex items-center gap-2 p-4">
        <i className="fas fa-user"></i>
        <span>Add Events</span>
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-wallet"></i>
        <span>Wallet</span>
      </a>
    </li>
    <li>
      <a href="/analytics" className="flex items-center gap-2 p-4">
        <i className="fas fa-chart-bar"></i>
        <span>Analytics</span>
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-tasks"></i>
        <span>Tasks</span>
      </a>
    </li>
    {/* <li>
      <a href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-cog"></i>
        <span>Settings</span>
      </a>
    </li> */}
    <li>
      <a href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-question-circle"></i>
        <span>Help</span>
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-sign-out-alt"></i>
        <span>Log out</span>
      </a>
    </li>
  </ul>
</nav>


      <section className="main">
        <div className="main-top">
          <h1>List of Events</h1>
          <i className="fas fa-user-cog"></i>
        </div>
        <div className="main-skills">
          <div className="card">
            <i className="fas fa-laptop-code"></i>
            <h3>Baby Shower</h3>
            {/* <p>New one to the World.</p> */}
            <button>modify pack</button>
          </div>
          <div className="card">
            <i className="fab fa-wordpress"></i>
            <h3>BirthDay</h3>
            {/* <p>Special Day of lives.</p> */}
            <button>Modify pack</button>
          </div>
          <div className="card">
            <i className="fas fa-palette"></i>
            <h3>Wedding</h3>
            {/* <p>Join Over 2 million Students.</p> */}
            <button>Modify pack</button>
          </div>
          <div className="card">
            <i className="fab fa-app-store-ios"></i>
            <h3>Surprice party</h3>
            {/* <p>Join Over 1 million Students.</p> */}
            <button>Modify pack</button>
          </div>
          <div className="card">
            <i className="fab fa-app-store-ios"></i>
            <h3>House Warming</h3>
            {/* <p>Join Over 1 million Students.</p> */}
            <button>Get Started</button>
          </div>
        </div>

        <section className="main-course">
          <h1> Tasks</h1>
          <div className="course-box">
            <ul>
              <li className="active">In progress</li>
              {/* <li>Booked</li> */}
              {/* <li>Incoming</li> */}
              {/* <li>Finished</li> */}
            </ul>
            <div className="course">
              <div className="box">
                <h3>Suresh Birthday</h3>
                <p>80% - progress</p>
                <button>Check</button>
                <i className="fab fa-html5 html"></i>
              </div>
              <div className="box">
                <h3>Reddy's Marriage</h3>
                <p>50% - progress</p>
                <button>Check</button>
                <i className="fab fa-css3-alt css"></i>
              </div>
              <div className="box">
                <h3>Surprice at LAmall</h3>
                <p>30% - progress</p>
                <button>Check</button>
                <i className="fab fa-js-square js"></i>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default AdminDashboard;
