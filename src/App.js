// import logo from "./logo.svg";
// import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import GiftOccasionsDropdown from "./Components/Dropdown/GiftOccasionsDropdown";
import GiftBasket  from "./Components/Dropdown/GiftBasket";


function App() {
  return (
    <div className="App">
      {/* <Footer /> */}
      <GiftBasket />
    </div>
  );
}

export default App;
