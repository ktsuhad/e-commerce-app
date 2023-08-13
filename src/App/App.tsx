import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
// import Footer from "../Components/Footer";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import ProductDetails from "../Pages/ProductDetail";
import Success from "../Components/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/productdetails/:productId" element={<ProductDetails/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
