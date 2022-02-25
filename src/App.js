import "./App.css";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
