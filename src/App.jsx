import { Footer, Nav } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, Home, Order } from "./pages";

function App() {
  return (
    <div className="relative">
      <div className="md:w-[80%] m-auto ">
        <Router>
          <Nav />

          <Routes>
            <Route path="/food-app/" element={<Home />} />
            <Route path="/food-app/cart" element={<Cart />} />
            <Route path="/food-app/order" element={<Order />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
