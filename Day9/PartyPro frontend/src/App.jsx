// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import LandingPage from './Pages/LandingPage';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ShoppingPage from './Pages/CustomizePage';
import ContactUsPage from './Pages/ContactUsPage';
import EventShowcase from './eventslist.jsx/EventShowcase';
import BookingConfirmationPopup from './Components/BookingConfirmationPopup';
import EventsShowcasePage from './Pages/EventsPage';

// import './App.css';
import LoginPage from './silo/login';
import EventShowcase1 from './eventslist.jsx/EventShowcase1';
import EventShowcase2 from './eventslist.jsx/EventShowcase2';
import EventShowcase3 from './eventslist.jsx/EventShowcase3';
import EventShowcase4 from './eventslist.jsx/EventShowcase4';
import EventShowcase5 from './eventslist.jsx/EventShowcase5';
import AdminProfiles from './Admin/AdminProfiles';
import AdminDashboard from './Admin/Admindashboard';

const App = () => {
  return (
    <Router>
        <Analytics/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Topbar" element={<TopBar />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="ShoppingPage" element={<ShoppingPage />} />
        <Route path="EventShowcase" element={<EventShowcase />} />
        <Route path="EventShowcase1" element={<EventShowcase1 />} />
        <Route path="EventShowcase2" element={<EventShowcase2 />} />
        <Route path="EventShowcase3" element={<EventShowcase3 />} />
        <Route path="EventShowcase4" element={<EventShowcase4 />} />
        <Route path="EventShowcase5" element={<EventShowcase5 />} />
        <Route path="ContactUsPage" element={<ContactUsPage />} />
        <Route path="BookingConfirmationPopup" element={<BookingConfirmationPopup />} />
        <Route path="about" element={<EventsShowcasePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<AdminDashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
