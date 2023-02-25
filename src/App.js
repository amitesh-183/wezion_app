import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarCom from "./components/NavbarCom.jsx";
import Footer from "./components/Footer.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import Blogs from "./screens/Blogs.jsx";
import VlogsScreen from "./screens/VlogsScreen.jsx";
import GalleryScreen from "./screens/GalleryScreen.jsx";
import About from "./screens/About.jsx";
import Contact from "./screens/Contact.jsx";
import Login from "./screens/Login.jsx";
import Signup from "./screens/Signup.jsx";

function App() {
  return (
    <Router>
      <NavbarCom />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/vlogs" element={<VlogsScreen />} />
        <Route path="/gallery" element={<GalleryScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        {/* <Route path="/logout" element={<Logout */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
