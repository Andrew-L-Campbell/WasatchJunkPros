import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import LocationsServedPage from './Components/Pages/LocationsServedPage';
import PricingPage from './Components/Pages/PricingPage';
import ServicesPage from './Components/Pages/ServicesPage';
import BookNowPage from './Components/Pages/BookNowPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/book-now' element={<BookNowPage/>}/>
        <Route path='/locations' element={<LocationsServedPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
