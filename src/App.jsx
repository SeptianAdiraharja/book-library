import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Jumbotron />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}
