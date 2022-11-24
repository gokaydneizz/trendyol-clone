import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Authentication from "./pages/Authentication/Authentication";
import Cart from "./pages/Cart/Cart";
import FavouriteProducts from "./pages/FavouriteProducts/FavouriteProducts";
import Home from "./pages/Home/Home";

function App() {
  const user = localStorage.getItem("user");

  console.log(user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<FavouriteProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
