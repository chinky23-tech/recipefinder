import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./app.js";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Breakfast from "./Pages/Breakfast";
import Lunch from "./Pages/Lunch";
import Dinner from "./Pages/Dinner";
import LoginPage from "./Pages/LoginPage";
import ForgetPassword from "./Pages/ForgetPassword.jsx";  
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;



