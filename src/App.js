// import logo from "./logo.svg";
// import './App.css';
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
    <div className="App">
      {/* <Footer /> */}
      {/* <HomePage /> */}
      {/* <ProductListingPage /> */}
      {/* <ShoppingCartPage /> */}
      {/* <Checkout /> */}
      {/* <ProductDetails /> */}
      {/* <GiftOccasionsDropdown /> */}
      {/* <GiftBasket /> */}
      <MobileDropDown />
    </div>
  );
}

export default App;
