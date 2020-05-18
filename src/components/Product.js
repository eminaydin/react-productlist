import React, { useState, useEffect } from 'react';
import "../App.scss"
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion"

const Product = ({ match, data, history, animation }) => {
    let [index, setIndex] = useState(0);

    let product = data[index];
    let randomNumber = Math.floor(Math.random() * (100 - 50) + 50);
    const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price);

    useEffect(() => {
        const currentItem = data.find(eachProduct => eachProduct.slug === match.params.slug);
        let indexOfProduct = data.indexOf(currentItem)
        setIndex(indexOfProduct)

    }, []);

    function clickHandler(e) {
        setIndex(e.currentTarget.name === "next" ? index + 1 : index - 1)
        history.replace(`/products/${product.slug}`)
    }




    return (

        <motion.main initial="initial"
            animate="in"
            exit="out"
            variants={animation}>
            <div className="card">
                <div className="card__title">
                    <div className="icon" onClick={() => history.goBack()} >
                        <a href="#"> <MdKeyboardBackspace /></a>
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
                        <span className="stock"><i className="fa fa-pen"></i> In stock</span>
                        <div className="reviews">
                            <span>({randomNumber} reviews)</span>
                        </div>
                    </div>
                </div>
                <div className="card__footer">
                    <div className="recommend">
                        <button type="button" name="back" onClick={clickHandler} disabled={index <= 0 && true}>Previous Product</button>
                    </div>
                    <div className="action">
                        <button type="button" name="next" onClick={clickHandler} disabled={index >= 39 && true}>Next Product</button>
                    </div>
                </div>
            </div>
        </motion.main>
    );
}

export default Product;
