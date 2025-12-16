import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Service from "./pages/Service";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/solutions/:slug" element={<Solution />} />
        <Route path="/services/:slug" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
