import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import FavouriteProducts from "./pages/FavouriteProducts/FavouriteProducts";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<FavouriteProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
