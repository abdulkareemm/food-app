import {Footer, Nav} from "./components"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Cart, Home, Order} from "./pages"


function App() {

  return (
    <>
      <div className="w-[80%] m-auto">
        <Nav />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </Router>
        <Footer/>
      </div>
    </>
  );
}

export default App
