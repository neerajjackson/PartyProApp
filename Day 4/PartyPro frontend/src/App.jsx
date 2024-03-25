import "./App.css";  
import "./Components/dummy.css";
// import Admindashboard from "./Components/Admindashboard";
// import Home from "./Components/Home";
// import Login from "./silo/Login";
// import UserDashboard from "./Components/UserDashboard";
// import About from "./Components/About";
import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
// import { NavLink } from 'react-router-dom'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from "./Admin/Admindashboard";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import LoginPage from "./silo/Login";
import React from "react";
import AdminProfiles from "./Admin/AdminProfiles";
import AdminAnalytics from "./Admin/AdminAnalytics";
import UserPage from "./User/user";
// import AddEventForm from "./Admin/AddEventForm";


const LazyLandingPage = React.lazy(() =>
new Promise((resolve) =>
setTimeout(
  () => resolve(import('./Components/Home')),
  2000
  )
  )
  );
  const LazyLoadingIcon = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src="https://media.tenor.com/_fJz-Yp9XMAAAAAi/sharingan-eyes.gif" alt="Lazy Loading Icon" />
    </div>
  );

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
      {/* <Route path='/o' element={<Home />} /> */}
      <Route path='/contact' element={<Contact />} />
      {/* <Route path='/' element={<><Navbar/><Home /><Work/></>} /> */}
      <Route path='/work' element={<><Navbar/><Work /></>} />
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/profiles' element={<AdminProfiles />} />
      <Route path='/analytics' element={<AdminAnalytics />} />
      <Route path='/admin/about' element={<About/>} />
      <Route path='/user' element={<UserPage/>} />
      {/* <Route path='/admin/events' element={<AddEventForm/>} /> */}
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/" element={
    <>
      <React.Suspense fallback={<LazyLoadingIcon />}>
        <Navbar/>
        <LazyLandingPage />
        <Work />
      </React.Suspense>
    </>
  } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
