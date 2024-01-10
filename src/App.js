import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import ContactUsPage from './Components/Pages/ContactUsPage';
import LocationsServedPage from './Components/Pages/LocationsServedPage';
import PricingPage from './Components/Pages/PricingPage';
import ServicesPage from './Components/Pages/ServicesPage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>
        <Route path='/locations' element={<LocationsServedPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
