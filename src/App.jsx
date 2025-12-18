import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import WhyChooseUs from "./pages/WhyChooseUs";
import Leadership from "./pages/Leadership";


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/solutions/:slug" element={<Solution />} />
        <Route path="/company/about-us" element={<About/>}></Route>
        <Route path="/company/why-choose-us" element={<WhyChooseUs/>}></Route>
        <Route path="/company/leadership" element={<Leadership/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
