import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrdocutDetail from "./pages/PrdocutDetail";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element= {<PrdocutDetail />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
