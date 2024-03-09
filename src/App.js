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
          {/* <CampsitesList /> */}
          <CampsitesDirectoryPage />
          <Footer />
      </div>
    );
  }

export default App



