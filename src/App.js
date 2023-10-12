// import logo from "./logo.svg";
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import ProductListingPage from "./Components/ProductListingPage/ProductListingPage";
import ShoppingCartPage from "./Components/ShoppingCartPage/ShoppingCartPage";
import Checkout from "./Components/CheckoutPage/Checkout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import GiftOccasionsDropdown from "./Components/Dropdown/GiftOccasionsDropdown";
import GiftBasket from "./Components/Dropdown/GiftBasket";
import MobileDropDown from "./Components/Dropdown/MobileDropDown";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlisting" element={<ProductListingPage />} />
          {/* <Route path="/productdetails" element={<ProductDetails />} /> */}
          <Route path="/items/:itemId" element={<ProductDetails />} />
          <Route path="/shoppingcart" element={<ShoppingCartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Redirect to home page if no route matches */}
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="/news/:slug" element={<NewsViewPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
