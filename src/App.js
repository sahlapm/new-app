
import ictlogo from './ict.png';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { Link,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div class="collapse navbar-collapse Mainheader" id="navbarTogglerDemo01">
          <img className='logo ms-100' src={ictlogo} alt="logo"  />
          <h3 class="text-white ml-3 heading">ICT Accademy </h3>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item active nav-item">
              <Link className='nav-link text-white navlnk' to='/'>Home</Link>
            </li>

            <li class="nav-item active nav-item">
              <Link className='nav-link text-white navlnk' to='/about'>About Us</Link>
            </li>

            <li class="nav-item active nav-item">
              <Link className='nav-link text-white navlnk' to='/contact'>Contact Us</Link>
            </li>

          

          </ul>
        </div>
      </nav>
      

 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<AboutUs/>} />
  <Route path="/contact" element={<ContactUs/>} />
 </Routes>
 </div>
  );
}

export default App;
