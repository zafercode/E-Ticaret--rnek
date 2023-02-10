import Box from "./components/Box";
import ImageSlider from "./components/ImageSlider";
import Offers from "./components/Offers";
import Referances from "./components/Referances";
import Footer from "./components/Footer";
import Ecommerce from "./components/Ecommerce";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ecommercepage1 from "./pages/Ecommercepage1";
import ContentSlider from "./components/ContentSlider";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/e-ticaret" element={<Ecommercepage1 />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
