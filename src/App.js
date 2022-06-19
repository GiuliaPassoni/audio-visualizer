import logo from './logo.svg';
import './App.css';

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Visualiser from "./pages/Visualiser";
import Support from "./pages/Support";
import Login from "./pages/Login";

function App() {
  return (
      <>
          <Navbar />
          <div className='app-container'>
              <Routes>
                  <Route path='/' element={<Homepage/>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/visualiser' element={<Visualiser/>} />
                  <Route path='/support' element={<Support/>} />
              </Routes>
              <Footer/>
          </div>
      </>
  );
}

export default App;
