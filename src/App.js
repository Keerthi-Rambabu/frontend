
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

import Review from './Pages/Review/Review';
// import Blogs from './Pages/Blogs/Blogs';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Footer from './Components/Footer/Footer';
import Avaliable from './Pages/Avaliable/Avaliable';
import CourseDetails from './Pages/CourseDetails/CourseDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews' element={<Review />} />
          {/* <Route path='/blogs' element={<Blogs />} /> */}
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/courses' element={<Avaliable/>}/>
          <Route path="/course/:courseName/*" element={<CourseDetails/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;

