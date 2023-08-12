import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
// import Footer from "../Components/Footer";
import Cart from "../Pages/Cart";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
