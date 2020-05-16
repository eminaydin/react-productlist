import React, { useState, useEffect } from 'react';
import "../App.scss"
import { MdKeyboardBackspace } from "react-icons/md";

const Product = ({ match, data, history }) => {
    let [index, setIndex] = useState(0);
    const current = data.find(p => p.id === match.params.productId);
    let product = data[index];

    useEffect(() => {
        let productIndex = data.indexOf(current)
        setIndex(productIndex)
        return () => {

        };
    }, [current, data]);

    function backHandle() {
        setIndex(index -= 1)
        history.replace(`/products/${product.id}`)
    }
    function nextHandle() {
        setIndex(index += 1)
        history.replace(`/products/${product.id}`)

    }

    return (

        <main>
            <div className="card">
                <div className="card__title">
                    <div className="icon" onClick={() => history.goBack()} disabled={index <= 0 && true}>
                        <a href="#"> <MdKeyboardBackspace /></a>
                    </div>
                    <h3>New products</h3>
                </div>
                <div className="card__body">
                    <div className="half">
                        <div className="featured_text">
                            <h1>{product.name}</h1>
                            <p className="sub">Office Chair</p>
                            <p className="price">{product.price}</p>
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
                            <span>(64 reviews)</span>
                        </div>
                    </div>
                </div>
                <div className="card__footer">
                    <div className="recommend">
                        <button type="button" onClick={backHandle} disabled={index <= 0 && true}>Next Product</button>
                    </div>
                    <div className="action">
                        <button type="button" onClick={nextHandle} disabled={index >= 39 && true}>Next Product</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Product;
