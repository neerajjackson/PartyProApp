import React from 'react';
// import './AdminDashboard.css'; // Import CSS file for styling (if needed)

function AdminDashboard() {
  return (
    
    <div className="container">
      <navo>
        <ul>
          <li>
            <a href="#" className="logo">
            <img src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg" alt="" />
              <span className="nav-item">AdminBoard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-home"></i>
              <span className="nav-item">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user"></i>
              <span className="nav-item">Profiles</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-wallet"></i>
              <span className="nav-item">Wallet</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chart-bar"></i>
              <span className="nav-item">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-tasks"></i>
              <span className="nav-item">Tasks</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>
              <span className="nav-item">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question-circle"></i>
              <span className="nav-item">Help</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="fas fa-sign-out-alt"></i>
              <span className="nav-item">Log out</span>
            </a>
          </li>
        </ul>
      </navo>

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
              <li>Booked</li>
              {/* <li>Incoming</li> */}
              <li>Finished</li>
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
