import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./Ferocia"; // assuming you renamed to HomePage
import Portfolio from "./Portfolio";
import HomePage from "./sections/Ferocia";


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  </Router>
);

export default App;
