import { NavBar } from "./components/NavBar/Nav";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/Home";
import PopularIn from "./components/Footer/UpFooter";
import ShoppingCart from "./components/Cart/Cart";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <PopularIn />
      <Footer />
    </Router>
  );
}

export default App;
