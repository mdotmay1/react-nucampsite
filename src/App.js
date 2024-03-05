//import CampsiteCard from './features/campsites/CampsiteCard.js';  *REMOVED IN TASK 2 - PART 2
import CampsitesList from './features/campsites/CampsitesList.js';
//import { CAMPSITES } from './app/shared/CAMPSITES'; *REMOVED IN TASK 2 - PART 2
/* REMOVED IN TASK 3 - PART 1
import { Container, Navbar, NavbarBrand } from 'reactstrap';  
import NucampLogo from './app/assets/img/logo.png';
*/
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

/*

Initial App function changed for Task 2 - Part 2.  Removed CampsiteCard and replaced with CampsitesList
in App function below

------

function App() {
  return (
    <div className='App'>
        <Navbar dark color='primary' sticky='top' expand='md'>
            <Container>
              <NavbarBrand href='/'>
                <img src={NucampLogo} alt='nucamp logo' />
              </NavbarBrand>
            </Container>
        </Navbar>
        <CampsiteCard campsite={CAMPSITES[0]} />
    </div>
  );
}

-----

*/

/*

App function from TASK 2.  Removed the Navbar rendering per TASK 3 - Part 1.  Placed the Navbar code 
into Header.js

  function App() {
    return (
      <div className='App'>
          <Navbar dark color='primary' sticky='top' expand='md'>
              <Container>
                <NavbarBrand href='/'>
                  <img src={NucampLogo} alt='nucamp logo' />
                </NavbarBrand>
              </Container>
          </Navbar>
          <CampsitesList />
      </div>
    );
}

*/

  function App() {
    return (
      <div className='App'>
          <Header />
          <CampsitesList />
          <Footer />
      </div>
    );
  }

export default App

/*

Notes:

For TASK 2 - Part 2 - I don't understand why Header and CampsitesList just has a self closing tag.  Is it because there's no props?

*/


