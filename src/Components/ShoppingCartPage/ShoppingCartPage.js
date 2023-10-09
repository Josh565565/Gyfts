import React from "react";
import cart from "./ShoppingCart.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Image Import start
import Item1 from "../Assets/images/cart-item1.png";
import Item2 from "../Assets/images/cart-item2.png";
import Item3 from "../Assets/images/cart-item3.png";
import Plus from "../Assets/images/cart-plus.png";
import Minus from "../Assets/images/cart-minus.png";
import Imp from "../Assets/images/cart-imp.svg";
import Cancel from "../Assets/images/cart-cancel.svg";
import Naira from "../Assets/images/naira.png";
import NairaTotal from "../Assets/images/cart-naira.svg";
import NairaSubtotal from "../Assets/images/subtotal-naira.svg";

function ShoppingCartPage() {
  return (
    <div className={cart.con}>
      <div className={cart.headerDiv}>
        <Header />
      </div>
      <main>
        <div className={cart.firstHeader}>
          <h1 className={cart.firstH1}>Shopping Cart</h1>
        </div>
        <div className={cart.leftRightCon}>
          <div className={cart.leftDiv}>
            <div className={cart.GiftQPdiv}>
              <p className={cart.textGift}>Gift</p>
              <div className={cart.qpDiv}>
                <p className={cart.textQuantity}>Quantity</p>
                <p className={cart.textPrice}>Price</p>
              </div>
            </div>
            {/* Item 1 start */}
            <div className={cart.itemDiv}>
              <div className={cart.itemImageDiv}>
                <img className={cart.itemImg} src={Item1} alt="" />
                <p className={cart.itemImageDivPara}>For the Groom Classic</p>
              </div>
              <div className={cart.plusMinusAmountDiv}>
                <div className={cart.plusMinusDiv}>
                  <div className={cart.plusDiv}>
                    <img src={Plus} alt="" />
                  </div>
                  <div className={cart.oneDiv}>
                    <p>1</p>
                  </div>
                  <div className={cart.plusDiv}>
                    <img src={Minus} alt="" />
                  </div>
                </div>
                <div className={cart.amountRemoveDiv}>
                  {/* <div className={cart.cancelDiv }>
                    <img className={cart.removeImg} src={Cancel} alt="" />
                  </div> */}
                  <div className={cart.amountDiv}>
                    <img className={cart.nairaIcon} src={Naira} alt="" />
                    <p className={cart.amountp}>45,000</p>
                  </div>
                  <div className={cart.cancelDiv}>
                    <img className={cart.removeImg} src={Cancel} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Item 1 end */}
            {/* Item 2 start */}
            <div className={cart.itemDiv}>
              <div className={cart.itemImageDiv}>
                <img className={cart.itemImg} src={Item2} alt="" />
                <p className={cart.itemImageDivPara}>Men’s Grooming Basket</p>
              </div>
              <div className={cart.plusMinusAmountDiv}>
                <div className={cart.plusMinusDiv}>
                  <div className={cart.plusDiv}>
                    <img src={Plus} alt="" />
                  </div>
                  <div className={cart.oneDiv}>
                    <p>1</p>
                  </div>
                  <div className={cart.plusDiv}>
                    <img src={Minus} alt="" />
                  </div>
                </div>
                <div className={cart.amountRemoveDiv}>
                  <div className={cart.amountDiv}>
                    <img src={Naira} alt="" />
                    <p className={cart.amountp}>15,000</p>
                  </div>
                  <div className={cart.cancelDiv}>
                    <img className={cart.removeImg} src={Cancel} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Item 2 end */}
            {/* Item 3 start */}
            <div className={cart.itemDiv}>
              <div className={cart.itemImageDiv}>
                <img className={cart.itemImg} src={Item3} alt="" />
                <p className={cart.itemImageDivPara}>Beauty Gift Basket</p>
              </div>
              <div className={cart.plusMinusAmountDiv}>
                <div className={cart.plusMinusDiv}>
                  <div className={cart.plusDiv}>
                    <img src={Plus} alt="" />
                  </div>
                  <div className={cart.oneDiv}>
                    <p>1</p>
                  </div>
                  <div className={cart.plusDiv}>
                    <img src={Minus} alt="" />
                  </div>
                </div>
                <div className={cart.amountRemoveDiv}>
                  <div className={cart.amountDiv}>
                    <img src={Naira} alt="" />
                    <p className={cart.amountp}>25,000</p>
                  </div>
                  <div className={cart.cancelDiv}>
                    <img className={cart.removeImg} src={Cancel} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Item 3 end */}
            {/* Total amount start */}
            <div className={cart.totalDiv}>
              <p className={cart.totalp}>Total</p>
              <div className={cart.totalAmountDiv}>
                <img className={cart.totalNairaImg} src={NairaTotal} alt="" />
                <p className={cart.totalAmount}>85,000</p>
              </div>
            </div>
            {/* Total amount end */}
            <div className={cart.impDiv}>
              <img src={Imp} alt="" />
              <p className={cart.impP}>
                The standard delivery charges is Three thousand Naira.
              </p>
            </div>
          </div>
          <div className={cart.rightDiv}>
            <h1 className={cart.rightHeader}>Order Summary</h1>
            <div className={cart.subTotalDiv}>
              <p className={cart.subtotalP}>Subtotal</p>
              <div className={cart.subtotalAmountDiv}>
                <img src={NairaSubtotal} alt="" />
                <p className={cart.subtotalAmount}>85,000</p>
              </div>
            </div>
            <div className={cart.subTotalDiv}>
              <p className={cart.subtotalP}>Delivery fees</p>
              <div className={cart.subtotalAmountDiv}>
                <img src={NairaSubtotal} alt="" />
                <p className={cart.deliveryFeeAmount}>0.00</p>
              </div>
            </div>
            <p className={cart.promoCode}>Promo code</p>
            <input
              className={cart.promoInput}
              type="text"
              placeholder="Enter code"
            />
            <div className={cart.subTotalDiv}>
              <p className={cart.subtotalP}>Total</p>
              <div className={cart.subtotalAmountDiv}>
                <img src={Naira} alt="" />
                <p className={cart.subTotalAmount}>85,000</p>
              </div>
            </div>
            <input
              className={cart.proceedInput}
              type="submit"
              value="Proceed to Checkout"
            />
          </div>
          <div className={cart.impDivMobile}>
            <img className={cart.impImgIcon} src={Imp} alt="" />
            <p className={cart.impP}>
              The standard delivery charges is Three <br /> thousand Naira.
            </p>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ShoppingCartPage;
