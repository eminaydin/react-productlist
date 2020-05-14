import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ match, data }) => {
    const [index, setIndex] = useState(0);
    const product = data.find(p => p.id === match.params.productId);

    console.log(data[index]);

    useEffect(() => {
        let productIndex = data.indexOf(product)
        setIndex(productIndex)
        return () => {

        };
    }, []);

    function backHandle() {
        setIndex(index - 1)
    }
    function nextHandle() {
        setIndex(index + 1)
    }
    console.log(data);



    let person = data[index];
    return (

        <div>
            <div>
                <h3><span><Link to="/products">  Return Back</Link></span> {person.name} </h3>
                <img src={person.image}></img>
                <p>{person.description}</p>
                <p>{person.price}</p>
                <button onClick={backHandle} disabled={index <= 0 && true}> previous</button>
                <button onClick={nextHandle} disabled={index >= 39 && true}>next</button>
            </div>

        </div >
    );
}

export default Product;
