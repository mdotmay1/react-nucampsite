import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
//import CampsitesList from './features/campsites/CampsitesList.js';   replaced with CampsiteDirectoryPage
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import logo from './logo.svg';
import './App.css';



  function App() {
    return (
      <div className='App'>
          <Header />
          {/* <CampsitesList /> REMOVED WHEN WE PUT IN THE CAPSITESDIRECTORYPAGE */}
          {/* <CampsitesDirectoryPage /> REMOVED WHEN WE PUT IN ROUTES*/}
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='directory' element={<CampsitesDirectoryPage />} />
          </Routes>
          <Footer />
      </div>
    );
  }

export default App



