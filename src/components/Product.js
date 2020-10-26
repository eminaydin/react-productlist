import React, { useState, useEffect } from "react";
import "../App.scss";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";

const Product = ({ match, data, history, animation }) => {
  let [index, setIndex] = useState(0);
  let product = data[index];
  let randomNumber = Math.floor(Math.random() * (100 - 50) + 50);
  const currencyFormat = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  useEffect(() => {
    const currentItem = data.find(
      (eachProduct) => eachProduct.slug === match.params.slug
    );
    let indexOfProduct = data.indexOf(currentItem);
    setIndex(indexOfProduct);
  }, [data, match.params.slug]);

  function clickHandler(e) {
    const target = e.currentTarget.name;
    if (target === "next") {
      const nextProduct = data[index + 1];
      setIndex(index + 1);
      history.replace(`/products/${nextProduct.slug}`);
    } else {
      const prevProduct = data[index - 1];
      setIndex(index - 1);
      history.replace(`/products/${prevProduct.slug}`);
    }
  }

  return (
    <motion.main initial="initial" animate="in" exit="out" variants={animation}>
      <div className="card">
        <div className="card__title">
          <div className="icon" onClick={() => history.replace("/products")}>
            <span>
              <MdKeyboardBackspace />
            </span>
          </div>
          <h3>New products</h3>
        </div>
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h1>{product.name}</h1>
              <p className="sub">Office Chair</p>
              <p className="price">{currencyFormat}</p>
            </div>
            <div className="image">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <p>{product.description}</p>
            </div>
            <span className="stock">
              <i className="fa fa-pen"></i> In stock
            </span>
            <div className="reviews">
              <span>({randomNumber} reviews)</span>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="recommend">
            <button
              type="button"
              name="back"
              onClick={clickHandler}
              disabled={index <= 0}
            >
              Previous Product
            </button>
          </div>
          <div className="action">
            <button
              type="button"
              name="next"
              onClick={clickHandler}
              disabled={index >= 39}
            >
              Next Product
            </button>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Product;
