// import './App.css';

import  {BrowserRouter,Route, Routes} from "react-router-dom";
import './App.css';
// import Navbar from './components/Navbar';
import Home from  './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import MainLayout from "./layout/Mainlaout";

// import Pagenotfound from "./pages/found";

// import Footer from './components/Footer';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
