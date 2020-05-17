import React, { useState, useEffect } from 'react';
import "../App.scss"
import { MdKeyboardBackspace } from "react-icons/md";


const Product = ({ match, data, history }) => {
    let [index, setIndex] = useState(0);
    const current = data.find(p => p.id === match.params.productId);
    let product = data[index];
    let randomNumber = Math.floor(Math.random() * (100 - 50) + 50);


    useEffect(() => {
        let productIndex = data.indexOf(current)
        setIndex(productIndex)

        return () => {

        };
    }, [data]);

    function clickHandler(e) {
        setIndex(e.currentTarget.name === "next" ? index + 1 : index - 1)
        history.replace(`/products/${product.id}`)
    }


    const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price);
    return (

        <main>
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
                        <button type="button" name="back" onClick={clickHandler} disabled={index <= 0 && true}>Next Product</button>
                    </div>
                    <div className="action">
                        <button type="button" name="next" onClick={clickHandler} disabled={index >= 39 && true}>Next Product</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Product;
