import React from "react";
import productListing from "./ProductListing.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Image import start
import ProductLandingPic from "../Assets/images/product-landing-pic.png";
import ProductLandingPicMobile from "../Assets/images/product-listing-pic-mobile.png";
import ProductItem1 from "../Assets/images/product-item1.png";
import ProductItem2 from "../Assets/images/product-item2.png";
import ProductItem3 from "../Assets/images/product-item3.png";
import ProductItem4 from "../Assets/images/product-item4.png";
import ProductItem5 from "../Assets/images/product-item5.png";
import ProductItem6 from "../Assets/images/product-item6.png";
import ProductItem7 from "../Assets/images/product-item7.png";
import ProductItem8 from "../Assets/images/product-item8.png";
import ProductItem9 from "../Assets/images/product-item9.png";
import Naira from "../Assets/images/naira.png";

function ProductListingPage() {
  return (
    <div className={productListing.container}>
      <div>
        <Header />
      </div>
      <main>
        <div className={productListing.homeStyle}>
          <div className={productListing.landingLeft}>
            <h1 className={productListing.landingh1}>
              Celebrating a <br />
              Beautiful Union.
            </h1>
            <p className={productListing.landingp}>
              Our wedding gifts are the perfect way to <br />
              send your love and best wishes to a newly <br />
              married couple.
            </p>
          </div>
          <div className={productListing.landingRight}>
            <img
              className={productListing.landingRightPic}
              src={ProductLandingPic}
              alt=""
            />
            <img
              className={productListing.landingRightPicMobile}
              src={ProductLandingPicMobile}
              alt=""
            />
          </div>
        </div>

        {/* Sort start */}
        <div className={productListing.sortDiv}>
          <div className={productListing.sortDiv1}>
            <h5 className={productListing.sortBy}>Sort by</h5>
            <select className={productListing.select}>
              <option>Price</option>
              <option>gift</option>
            </select>
            <p className={productListing.itemNumber}>9 items available</p>
          </div>
        </div>
        {/* Sort end */}
        {/* Top Picks start */}
        <div className={productListing.TopPicksDiv}>
          <div className={productListing.TopPicksDivMobile}>
            {/* <h3 className={productListing.TopPicksHeader}>Top Picks</h3> */}

            <div className={productListing.TopPicksDiv1}>
              {/* Top Pick box 1 start */}
              <div className={productListing.TopPicksDiv}>
                <div className={productListing.TopPicksItem1}>
                  <div className={productListing.TopPicksImgDiv}>
                    <a href="#">
                      <img
                        className={productListing.TopPicksImg1}
                        src={ProductItem1}
                        alt=""
                      />
                    </a>
                    <div className={productListing.productNameDiv}>
                      <div className={productListing.productNameDiv2}>
                        <a className={productListing.TopPicksName} href="#">
                          <p className={productListing.productName}>
                            Special Wedding Hamper
                          </p>
                          <div className={productListing.nairaDiv}>
                            <img
                              className={productListing.naira}
                              src={Naira}
                              alt=""
                            />
                            <p className={productListing.amount}>30,000</p>
                          </div>
                        </a>
                        <button
                          className={productListing.TopPicksBtn}
                          type="submit"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Pick box 1 end */}
              {/* Top Pick box 2 start */}
              <div className={productListing.TopPicksDiv}>
                <div className={productListing.TopPicksItem1}>
                  <div className={productListing.TopPicksImgDiv}>
                    <a href="#">
                      <img
                        className={productListing.TopPicksImg1}
                        src={ProductItem2}
                        alt=""
                      />
                    </a>
                    <div className={productListing.productNameDiv}>
                      <div className={productListing.productNameDiv2}>
                        <a className={productListing.TopPicksName} href="#">
                          <p className={productListing.productName}>
                            Premium Wedding Hamper
                          </p>
                          <div className={productListing.nairaDiv}>
                            <img
                              className={productListing.naira}
                              src={Naira}
                              alt=""
                            />
                            <p className={productListing.amount}>45,000</p>
                          </div>
                        </a>
                        <button
                          className={productListing.TopPicksBtn}
                          type="submit"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Pick box 2 end */}
              {/* Top Pick box 3 start */}
              <div className={productListing.TopPicksDiv}>
                <div className={productListing.TopPicksItem1}>
                  <div className={productListing.TopPicksImgDiv}>
                    <a href="#">
                      <img
                        className={productListing.TopPicksImg1}
                        src={ProductItem3}
                        alt=""
                      />
                    </a>
                    <div className={productListing.productNameDiv}>
                      <div className={productListing.productNameDiv2}>
                        <a className={productListing.TopPicksName} href="#">
                          <p className={productListing.productName}>
                            For the Bride
                          </p>
                          <div className={productListing.nairaDiv}>
                            <img
                              className={productListing.naira}
                              src={Naira}
                              alt=""
                            />
                            <p className={productListing.amount}>35,000</p>
                          </div>
                        </a>
                        <button
                          className={productListing.TopPicksBtn}
                          type="submit"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Pick box 3 end */}
              {/* Top Pick box 4 start */}
              <div className={productListing.TopPicksDiv}>
                <div className={productListing.TopPicksItem1}>
                  <div className={productListing.TopPicksImgDiv}>
                    <a href="#">
                      <img
                        className={productListing.TopPicksImg1}
                        src={ProductItem4}
                        alt=""
                      />
                    </a>
                    <div className={productListing.productNameDiv}>
                      <div className={productListing.productNameDiv2}>
                        <a className={productListing.TopPicksName} href="#">
                          <p className={productListing.productName}>
                            For the Groom
                          </p>
                          <div className={productListing.nairaDiv}>
                            <img
                              className={productListing.naira}
                              src={Naira}
                              alt=""
                            />
                            <p className={productListing.amount}>35,000</p>
                          </div>
                        </a>
                        <button
                          className={productListing.TopPicksBtn}
                          type="submit"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Pick box 4 end */}
              {/* Top Pick box 5 start */}
              <div className={productListing.TopPicksDiv}>
                <div className={productListing.TopPicksItem1}>
                  <div className={productListing.TopPicksImgDiv}>
                    <a href="#">
                      <img
                        className={productListing.TopPicksImg1}
                        src={ProductItem5}
                        alt=""
                      />
                    </a>
                    <div className={productListing.productNameDiv}>
                      <div className={productListing.productNameDiv2}>
                        <a className={productListing.TopPicksName} href="#">
                          <p className={productListing.productName}>
                            Civil Wedding Hamper
                          </p>
                          <div className={productListing.nairaDiv}>
                            <img
                              className={productListing.naira}
                              src={Naira}
                              alt=""
                            />
                            <p className={productListing.amount}>25,000</p>
                          </div>
                        </a>
                        <button
                          className={productListing.TopPicksBtn}
                          type="submit"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Pick box 5 end */}
              {/* Top Pick box 6 start */}
              <div className={productListing.TopPicksDiv}>
                <div className={productListing.TopPicksItem1}>
                  <div className={productListing.TopPicksImgDiv}>
                    <a href="#">
                      <img
                        className={productListing.TopPicksImg1}
                        src={ProductItem6}
                        alt=""
                      />
                    </a>
                    <div className={productListing.productNameDiv}>
                      <div className={productListing.productNameDiv2}>
                        <a className={productListing.TopPicksName} href="#">
                          <p className={productListing.productName}>
                            For the Bride Classic
                          </p>
                          <div className={productListing.nairaDiv}>
                            <img
                              className={productListing.naira}
                              src={Naira}
                              alt=""
                            />
                            <p className={productListing.amount}>55,000</p>
                          </div>
                        </a>
                        <button
                          className={productListing.TopPicksBtn}
                          type="submit"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Pick box 6 end */}
              {/* Top Pick box 7 start */}
              <div className={productListing.TopPicksDiv}>
                <div className={productListing.TopPicksItem1}>
                  <div className={productListing.TopPicksImgDiv}>
                    <a href="#">
                      <img
                        className={productListing.TopPicksImg1}
                        src={ProductItem7}
                        alt=""
                      />
                    </a>
                    <div className={productListing.productNameDiv}>
                      <div className={productListing.productNameDiv2}>
                        <a className={productListing.TopPicksName} href="#">
                          <p className={productListing.productName}>
                            For the Groom Classic
                          </p>
                          <div className={productListing.nairaDiv}>
                            <img
                              className={productListing.naira}
                              src={Naira}
                              alt=""
                            />
                            <p className={productListing.amount}>45,000</p>
                          </div>
                        </a>
                        <button
                          className={productListing.TopPicksBtn}
                          type="submit"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Pick box 7 end */}
              {/* Top Pick box 8 start */}
              <div className={productListing.TopPicksDiv}>
                <div className={productListing.TopPicksItem1}>
                  <div className={productListing.TopPicksImgDiv}>
                    <a href="#">
                      <img
                        className={productListing.TopPicksImg1}
                        src={ProductItem8}
                        alt=""
                      />
                    </a>
                    <div className={productListing.productNameDiv}>
                      <div className={productListing.productNameDiv2}>
                        <a className={productListing.TopPicksName} href="#">
                          <p className={productListing.productName}>
                            Civil Wedding Classic Hamper
                          </p>
                          <div className={productListing.nairaDiv}>
                            <img
                              className={productListing.naira}
                              src={Naira}
                              alt=""
                            />
                            <p className={productListing.amount}>40,000</p>
                          </div>
                        </a>
                        <button
                          className={productListing.TopPicksBtn}
                          type="submit"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Pick box 8 end */}
              {/* Top Pick box 9 start */}
              <div className={productListing.TopPicksDiv}>
                <div className={productListing.TopPicksItem1}>
                  <div className={productListing.TopPicksImgDiv}>
                    <a href="#">
                      <img
                        className={productListing.TopPicksImg1}
                        src={ProductItem9}
                        alt=""
                      />
                    </a>
                    <div className={productListing.productNameDiv}>
                      <div className={productListing.productNameDiv2}>
                        <a className={productListing.TopPicksName} href="#">
                          <p className={productListing.productName}>
                            Honeymoon Classic
                          </p>
                          <div className={productListing.nairaDiv}>
                            <img
                              className={productListing.naira}
                              src={Naira}
                              alt=""
                            />
                            <p className={productListing.amount}>35,000</p>
                          </div>
                        </a>
                        <button
                          className={productListing.TopPicksBtn}
                          type="submit"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Pick box 9 end */}
            </div>
          </div>
        </div>
        {/* Top Picks end */}
        {/* Item number start */}
        <div className={productListing.numberDivCon}>
          <div className={productListing.numberBox}>
            <p className={productListing.number1}>1</p>
          </div>
        </div>
        {/* Item number end */}
        {/* Footer start */}
        <div>
          <Footer />
        </div>
        {/* Footer end */}
      </main>
    </div>
  );
}

export default ProductListingPage;
